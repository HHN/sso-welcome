import { useAppStore } from "@/store/app";
import Keycloak from "keycloak-js";
import { LoginState } from "@/models/LoginState";
import router from "@/router";

const appStore = useAppStore();

export function initLogin() {
    const keycloak = appStore.keycloak;
    keycloak
    .init({
        onLoad: 'check-sso',
        silentCheckSsoRedirectUri: window.location.origin + '/silent-check-sso.html'
    })
    .then(function(authenticated) {
        if (authenticated) {
            //document.getElementById("account_name").textContent = loggedInUserName();
            appStore.fullName = loggedInUserName(keycloak);
    

        var url = 'https://login.hhn-test.de/realms/hhn/account/credentials';
        var req = new XMLHttpRequest();
        req.open('GET', url, true);
        req.setRequestHeader('Accept', 'application/json');
        req.setRequestHeader('Authorization', 'bearer ' + keycloak.token);
    
       // var promise = createPromise();
    
        req.onreadystatechange = function () {
            if (req.readyState == 4) {
                if (req.status == 200) {
                    console.log(JSON.parse(req.responseText));
                    const creds = JSON.parse(req.responseText);

                    for (let element of creds) {
                        if (element.type === "otp") {
                            appStore.credentialState.otpCount = element.userCredentialMetadatas.length;
                        }
                        if (element.type === "webauthn") {
                            appStore.credentialState.webauthnCount = element.userCredentialMetadatas.length;
                        }
                        // todo
                        if (element.type === "recovery-authn-codes") {
                            appStore.credentialState.recoveryCodeCountRemaining = element.userCredentialMetadatas.length;
                            appStore.credentialState.recoveryCodeCountTotal = element.userCredentialMetadatas.length;

                        }
                    }

                    appStore.loggedIn = LoginState.LOGGED_IN;
                    appStore.waitingForLoginState = false;

                    if (appStore.credentialState.recoveryCodeCountRemaining === 0 || (appStore.credentialState.otpCount === 0 && appStore.credentialState.webauthnCount === 0)) {
                        router.push('/first');
                    }


                    //promise.setSuccess(kc.profile);
                } else {
                    //promise.setError();
                }
            }
        };
    
        req.send();
        } else {
            appStore.loggedIn = LoginState.NOT_LOGGED_IN;
            appStore.waitingForLoginState = false;

        }
        
    
    }).catch(function(e) {
        //alert('failed to initialize');
        console.log(e);
    });
}

export function login() {
    const keycloak = appStore.keycloak;
    keycloak.login();
}

export function createRecoveryCodes() {
    const keycloak = appStore.keycloak;
    keycloak.login({action: "CONFIGURE_RECOVERY_AUTHN_CODES"});
}

export function createWebauthn() {
    const keycloak = appStore.keycloak;
    keycloak.login({action: "webauthn-register"});
}

export function createOTP() {
    const keycloak = appStore.keycloak;
    keycloak.login({action: "CONFIGURE_TOTP"});
}


export function logout() {
    const keycloak = appStore.keycloak;
    keycloak.logout();
}


// taken from keycloak source code
function loggedInUserName(keycloak: Keycloak) {
    let userName = "unbekannt";
    if (keycloak.tokenParsed) {
        const givenName = keycloak.tokenParsed.given_name;
        const familyName = keycloak.tokenParsed.family_name;
        const preferredUsername = keycloak.tokenParsed.preferred_username;
        if (givenName && familyName) {
            userName = givenName + " " + familyName;
        } else {
            userName = (givenName || familyName) || preferredUsername || userName;
        }
    }
    return sanitize(userName);
}

function sanitize(dirtyString: string) {
    let element = document.createElement("span");
    element.textContent = dirtyString;
    return element.innerHTML;
}