<template>
  <div class="items-container">
    <h1>{{ t("title") }}</h1>
    <p>{{ t("text") }}</p>

    <br />

    <v-alert type="info" variant="tonal" :title="t('subtitle1')">
      <p>
        {{ t("text1") }}
      </p>

      <p>
        {{ t("text2") }}
      </p>

      <v-container>
        <ol>
          <li>
            {{ t("li1") }}
          </li>
          <li>
            {{ t("li2") }}
          </li>
          <li>
            {{ t("li3") }}
          </li>
        </ol>
      </v-container>

      <p>
        {{ t("text21") }}
      </p>
    </v-alert>

    <br />

    <h2>{{ t("subtitle2") }}</h2>
    <p>
      {{ t("text3") }}
    </p>

    <h3>{{ t("subtitle3") }}</h3>
    <p>
      {{ t("text4") }}
    </p>
    <v-container>
      <ul>
        <li>{{ t("li4") }}</li>
        <li>{{ t("li5") }}</li>
        <li>
          {{ t("li6") }}
          <a
            href="https://support.apple.com/guide/mac-help/create-a-passkey-mchl4af65d1a/mac"
            target="_blank"
            >{{ t("macOS") }}</a
          >
          {{ t("and") }}
          <a
            href="https://support.apple.com/guide/iphone/use-passkeys-in-safari-iph37306ae67/ios"
            target="_blank"
            >{{ t("iPhone") }}</a
          >
        </li>
        <li>
          {{ t("li7") }}
          <a
            href="https://developers.google.com/identity/passkeys/supported-environments"
            target="_blank"
            >{{ t("li7Link") }}</a
          >
        </li>
      </ul>
    </v-container>

    <p>
      <b>{{ t("text5") }}</b>
    </p>
    <p>
      {{ t("text51") }}
    </p>
    <p>
      {{ t("text52") }}
    </p>

    <h3>{{ t("subtitle4") }}</h3>
    <p>
      {{ t("text6") }}
    </p>
    <v-container>
      <ul>
        <li>
          {{ t("li8") }}
          <a
            href="https://play.google.com/store/apps/details?id=com.azure.authenticator"
            target="_blank"
            >{{ t("microsoftPlay") }}</a
          >,
          <a
            href="https://apps.apple.com/us/app/microsoft-authenticator/id983156458"
            target="_blank"
            >{{ t("microsoftApple") }}</a
          >
        </li>
        <li>
          {{ t("li9") }}
          <a
            href="https://play.google.com/store/apps/details?id=com.google.android.apps.authenticator2"
            target="_blank"
            >{{ t("googlePlay") }}</a
          >,
          <a
            href="https://apps.apple.com/us/app/google-authenticator/id388497605"
            target="_blank"
            >{{ t("googleApple") }}</a
          >
        </li>
      </ul>
    </v-container>

    <p>
      {{ t("text7") }}
    </p>

    <br />

    <v-alert type="warning" variant="tonal" :title="t('subtitle6')">
      <p>
        {{ t("text9") }}
      </p>
      <p>
        {{ t("text10") }}
      </p>
    </v-alert>
  </div>
</template>
<script setup lang="ts">
import { useI18n } from "vue-i18n";

const { t } = useI18n({
  messages: {
    de: {
      title: "2. Faktor / Mehrfaktorauthentifizierung",
      text: "Die Mehrfaktorauthentifizierung (MFA) ist ein weitverbreitetes Sicherheitsverfahren, das bereits in vielen Online-Diensten und Anwendungen eingesetzt wird. MFA stellt sicher, dass der Zugriff auf ein Benutzerkonto nicht nur durch Kenntnis eines Passworts möglich ist, sondern zusätzlich weitere Faktoren benötigt werden, um sich erfolgreich anzumelden. Auch an der Hochschule wird MFA nun eingeführt.",
      subtitle1: "Warum ist MFA notwendig?",
      text1:
        "Passwörter allein sind heutzutage oft nicht mehr ausreichend, um einen sicheren Zugang zu einem Konto zu gewährleisten. Es gibt eine Vielzahl von Möglichkeiten, wie Passwörter kompromittiert werden können, wie beispielsweise durch Phishing, Social Engineering oder Brute-Force-Angriffen. Häufig werden gestohlene Passwörter im Darknet auch zum Kauf angeboten. Einmal in die Hände von Angreifern geraten, können diese Passwörter dann dazu verwendet werden, auf ein Benutzerkonto zuzugreifen und sensible Daten zu stehlen oder Schaden anzurichten.",
      text2:
        "MFA bietet eine zusätzliche Sicherheitsebene, indem zur Anmeldung neben einem Passwort ein oder mehrere zusätzliche Faktoren benötigt werden. Die zusätzlichen Faktoren können verschiedene Formen annehmen, wie zum Beispiel: ",
      li1: "Etwas, das der Benutzer weiß (z.B. ein Passwort oder eine PIN)",
      li2: "Etwas, das die Person hat (z. B. ein Smartphone oder einen Hardware-Token)",
      li3: "Etwas, das das die Person ist (z. B. biometrische Daten wie Fingerabdrücke oder Gesichtserkennung)",
      text21:
        "Die Kombination aus diesen Faktoren erschwert es Angreifern erheblich, auf ein Benutzerkonto zuzugreifen, da neben dem Passwort stets noch ein weiterer Faktor zur Anmeldung benötigt wird.",
      subtitle2: "Mögliche zweite Faktoren",
      text3:
        "Am Login-Portal der Hochschule können verschiedene Arten von zweiten Faktoren verwendet werden. ",
      subtitle3: "Sicherheitstoken",
      text4:
        "Präferiert wird die Verwendung sogenannter „Sicherheitstoken“, die in verschiedenen Formen existieren. Das Login-Portal unterstützt dabei alle Geräte, die den FIDO2 / WebAuthn-Standard unterstützen. Dazu gehören z. B.: ",
      li4: "USB-Tokens wie YubiKeys",
      li5: "Aktuelle Windows-Geräte mit aktiviertem Windows Hello",
      li6: "Apple Passkey auf",
      macOs: "macOS",
      and: "und",
      iPhone: "iPhone",
      li7: "Google Passkey für",
      li7Link: "Android und Chrome",
      text5:
        "Hinweis: An alle Beschäftigten der Hochschule werden USB-Token (sogenannte YubiKeys) ausgegeben. Bitte wenden Sie sich ggf. an Ihr Sekretariat, das Ihnen einen YubiKey zur Verfügung stellen wird.",
      text51:
        "Zur Registrierung Ihres persönlichen USB-Token stellen Sie bitte sicher, dass Sie den Token im Gerät eingesteckt haben. Fahren Sie anschließend die Einrichtung mit einem Klick auf die Schaltfläche „Weiter (Registrierung Sicherheitstoken)“ fort und folgen den Anweisungen. Unter anderem müssen Sie nun die Verwendung des USB-Tokens auswählen und am USB-Token dann auf die leuchtende Schaltfläche tippen.",
      text52:
        "Die ausgegebenen YubiKeys unterstützen auch NFC und können dadurch auch an modernen Smartphones verwendet werden. Dazu müssen die Schlüssel später bei der Anmeldung am Login-Portal nur an die Geräterückseite gehalten werden.",
      subtitle4: "Einmalpasswörter",
      text6:
        "Neben Sicherheitstoken ist auch eine Verwendung von zeitbasierten Einmalpasswörtern (engl. TOTP) möglich. Dabei werden von einer Smartphone App zeitabhängige Einmalpasswörter generiert, die dann bei der Anmeldung am Login-Portal als zweiter Faktor verwendet werden können. Zur Einrichtung empfehlen wir eine der nachfolgenden Apps:",

      li8: "Microsoft Authenticator",
      microsoftPlay: "Google Play Store",
      microsoftApple: "Apple App Store",
      li9: "Google Authenticator",
      googlePlay: "Google Play Store",
      googleApple: "Apple App Store",
      text7:
        "Installieren Sie einer dieser Apps auf Ihrem Smartphone. Fahren Sie anschließend die Einrichtung mit einem Klick auf die Schaltfläche „Weiter (Registrierung Einmalpasswörter)“ fort und folgen den Anweisungen. Dabei werden Sie unter anderem dazu aufgefordert, mit der App einen QR-Code zu scannen. Anschließend ist die App dann in der Lage, Einmalpasswörter zu generieren, die Sie für die Anmeldung am Login-Portal verwenden können.",
      subtitle6: "Wichtige Hinweise",
      text9:
        "Präferiert ist die Verwendung von Sicherheitstoken. Diese bieten eine höhere Sicherheit, sind resistent gegen Phishing-Angriffe und sind schneller. Für Beschäftigte der Hochschule ist die Verwendung von Sicherheitstoken verpflichtend. Dazu werden von der Hochschule YubiKeys bereitgestellt.",
      text10:
        "Im Login-Portal können später beliebige weitere zweite Faktoren (Token und/oder Einmalpasswörter) registriert werden. Bitte fügen Sie zuerst die Variante hinzu, die Sie am häufigsten verwenden (z. B. Sicherheitstoken). Die zuerst registrierte Variante wird beim Login später als erstes vorgeschlagen. Damit ersparen Sie sich das manuelle Neuauswählen Ihres bevorzugten Faktors bei jedem Login. ",
    },
    en: {
      title: "2nd Factor / Multi-Factor Authentication",
      text: "Multi-factor authentication (MFA) is a widespread security method that is used in many online services and applications. MFA ensures that access to a user account is not only possible by knowing a password, but that additional factors are required to successfully log in. MFA is also mandatory for accessing university services in the future.",
      subtitle1: "Why is MFA necessary?",
      text1:
        "Passwords alone are often not enough to ensure secure access to an account these days. There are a variety of ways in which passwords can be compromised, such as phishing, social engineering, or brute force attacks. Often, stolen passwords are offered for sale on the darknet. Once in the hands of attackers, these passwords can then be used to access a user account and steal sensitive data or cause damage.",
      text2:
        "MFA provides an additional layer of security by requiring one or more additional factors in addition to a password. The additional factors can take various forms, such as:",
      li1: "Something a person knows (e.g., a password or PIN)",
      li2: "Something a person has (e.g., a smartphone or hardware token)",
      li3: "Something a person is (e.g., biometric data such as fingerprints or facial recognition)",
      text21:
        "The combination of these factors makes it much more difficult for attackers to access a user account since another factor is always required for login in addition to the password. ",
      subtitle2: "Possible second factors",
      text3:
        "The university's login portal supports different types of second factors that are described in the following.",
      subtitle3: "Security Token",
      text4:
        "The login portal supports preferably “security tokens” which can take on various forms. This includes all physical devices that support the FIDO2 / WebAuthn standard. For example:",
      li4: "USB hardware token like YubiKeys",
      li5: "Current Windows devices with Windows Hello enabled",
      li6: "Apple Passkey on macOS and iPhone",
      macOs: "macOS",
      and: "and",
      iPhone: "iPhone",
      li7: "Google Passkey for",
      li7Link: "Android and Chrome",
      text5:
        "Note: USB tokens (i.e., YubiKeys) will be issued to all employees of the university. If necessary, please contact your secretary's office where you will be provided with a YubiKey.",
      text51:
        'To register your personal USB hardware token, please make sure that you have inserted the token in the device. Then continue setup by clicking the "Next (register security token)" button below and follow the instructions. Among other things, you must select the use of the USB token and then push the illuminated button on the token.',
      text52:
        "The YubiKeys also support NFC and can thus also be used on modern smartphones. To do this, the keys only need to be held up to the back of the device when logging in to the login portal.",
      subtitle4: "One-time passwords",
      text6:
        "In addition to security tokens, the login-portal also supports the use of time-based one-time passwords (TOTP). For this, a smartphone app will generate time-based one-time passwords which can then be used as a second factor when logging in. In order to use such a setup we recommend one of the following apps:",

      text7:
        'Install one of these apps on your smartphone. Then continue the setup process by clicking the "Next (register one-time passwords)" button below and following the instructions. Among other things, you will be prompted to scan a QR code with the app. The app will then be able to generate one-time passwords that you can use within future logins to the login portal.',
      subtitle6: "Important Notes",
      text9:
        "The use of security tokens is preferred. These offer greater security, are resistant to phishing attacks and are faster. The use of security tokens is mandatory for employees of the university. YubiKeys are provided to all employees for this purpose.",
      text10:
        "Any other second factors (tokens and/or one-time passwords) can be registered later in the account management self-service. Please add the variant you use most often first (e.g., security token). The first registered variant will be suggested as the primary one when logging in later. This saves you from having to manually reselect your preferred factor every time you log in. ",
    },
  },
});
</script>
<style lang="scss">
@import "../../styles/variables.scss";
</style>
