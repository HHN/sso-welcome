<template>
  <v-row class="first-tabs">
    <v-col cols="2">
      <v-tabs v-model="tab" direction="vertical" color="primary">
        <v-tab value="tab-welcome" :disabled="readOnly.welcome">
          <v-icon start :color="colors.welcome"> mdi-account </v-icon>
          {{ t("welcome") }}
        </v-tab>
        <v-tab value="tab-login" :disabled="readOnly.login">
          <v-icon start :color="colors.login"> mdi-lock </v-icon>
          {{ t("login") }}
        </v-tab>
        <v-tab value="tab-recovery" :disabled="readOnly.recovery">
          <v-icon start :color="colors.recovery"> mdi-lock-reset </v-icon>
          {{ t("recovery") }}
        </v-tab>
        <v-tab value="tab-second-factor" :disabled="readOnly.secondFactor">
          <v-icon start :color="colors.secondFactor"> mdi-key </v-icon>
          {{ t("secondFactor") }}
        </v-tab>
        <v-tab value="tab-summary" :disabled="readOnly.summary">
          <v-icon start :color="colors.summary"> mdi-subtitles </v-icon>
          {{ t("conclusion") }}
        </v-tab>
      </v-tabs>
    </v-col>

    <!-- Content -->
    <v-col cols="10">
      <v-window v-model="tab">
        <v-window-item value="tab-welcome">
          <v-container>
            <first-welcome-content />
            <first-button-bar>
              <v-btn @click="welcomeContinue()">{{ t("continue") }}</v-btn>
            </first-button-bar>
          </v-container>
        </v-window-item>
        <v-window-item value="tab-login">
          <v-container>
            <first-login-content />
            <first-button-bar>
              <v-btn @click="loginContinue()">{{ t("continue") }}</v-btn>
            </first-button-bar>
          </v-container>
        </v-window-item>
        <v-window-item value="tab-recovery">
          <v-container>
            <first-recovery-content />
            <first-button-bar>
              <v-btn @click="recoveryContinue()">{{
                appStore.credentialState.recoveryCodeCountRemaining <= 0
                  ? t("continueCreate")
                  : t("generateNew")
              }}</v-btn>
              <v-btn
                v-if="appStore.credentialState.recoveryCodeCountRemaining > 0"
                @click="recoverySkip()"
                >{{ t("continueSkip") }}</v-btn
              >
            </first-button-bar>
          </v-container>
        </v-window-item>
        <v-window-item value="tab-second-factor">
          <v-container>
            <first-second-factor-content />
            <first-button-bar>
              <v-btn @click="tokenContinue()">{{ t("addToken") }}</v-btn>
              <v-btn @click="otpContinue()">{{ t("addOTP") }}</v-btn>
              <v-btn
                v-if="
                  appStore.credentialState.otpCount > 0 ||
                  appStore.credentialState.webauthnCount > 0
                "
                @click="secondFactorSkip()"
                >{{ t("continueSkip") }}</v-btn
              >
            </first-button-bar>
          </v-container>
        </v-window-item>
        <v-window-item value="tab-summary">
          <v-container>
            <first-summary-content />
          </v-container>
        </v-window-item>
      </v-window>
    </v-col>
  </v-row>
</template>

<script lang="ts" setup>
import { onMounted, ref } from "vue";
import { useAppStore } from "@/store/app";
import { LoginState } from "@/models/LoginState";
import {
  createOTP,
  createRecoveryCodes,
  createWebauthn,
  login,
} from "@/services/LoginService";
import FirstButtonBar from "./FirstButtonBar.vue";
import FirstWelcomeContent from "./FirstWelcomeContent.vue";
import FirstLoginContent from "./FirstLoginContent.vue";
import FirstRecoveryContent from "./FirstRecoveryContent.vue";
import FirstSecondFactorContent from "./FirstSecondFactorContent.vue";
import FirstSummaryContent from "./FirstSummaryContent.vue";
import { useI18n } from "vue-i18n";

const tab = ref<string>("tab-summary");
const appStore = useAppStore();

const colorSet = {
  unset: "",
  done: "success",
  notDone: "error",
};

let colors = {
  welcome: colorSet.unset,
  login: colorSet.unset,
  recovery: colorSet.unset,
  secondFactor: colorSet.unset,
  summary: colorSet.unset,
};

let readOnly = {
  welcome: false,
  login: true,
  recovery: true,
  secondFactor: true,
  summary: true,
};

const { t } = useI18n({
  messages: {
    de: {
      continue: "Weiter",
      welcome: "Willkommen",
      login: "Login",
      recovery: "Wdh.codes",
      secondFactor: "2. Faktor",
      conclusion: "Übersicht",
      continueCreate: "Weiter (erzeugen)",
      generateNew: "neu generieren",
      continueSkip: "Weiter (überspringen)",
      addToken: "Weiter (Sicherheitstoken)",
      addOTP: "Weiter (Einmalpasswörter)",
    },
    en: {
      continue: "Next",
      welcome: "Welcome",
      login: "Login",
      recovery: "Recovery codes",
      secondFactor: "Second Factor",
      conclusion: "summary",
      continueCreate: "Next (generate)",
      generateNew: "Regenerate",
      continueSkip: "Next (Skip)",
      addToken: "Next (security token)",
      addOTP: "Next (one-time passwords)",
    },
  },
});

function determineAndSetCurrentTab() {
  console.log(appStore.loggedIn);
  if (appStore.loggedIn === LoginState.NOT_LOGGED_IN) {
    tab.value = "tab-welcome";
    colors = {
      welcome: colorSet.unset,
      login: colorSet.unset,
      recovery: colorSet.unset,
      secondFactor: colorSet.unset,
      summary: colorSet.unset,
    };
    readOnly = {
      welcome: false,
      login: true,
      recovery: true,
      secondFactor: true,
      summary: true,
    };
  } else {
    if (appStore.credentialState.recoveryCodeCountRemaining <= 0) {
      tab.value = "tab-recovery";
      colors = {
        welcome: colorSet.done,
        login: colorSet.done,
        recovery: colorSet.unset,
        secondFactor: colorSet.unset,
        summary: colorSet.unset,
      };
      readOnly = {
        welcome: false,
        login: false,
        recovery: false,
        secondFactor: true,
        summary: true,
      };
    } else if (
      appStore.credentialState.otpCount <= 0 &&
      appStore.credentialState.webauthnCount <= 0
    ) {
      console.log(appStore.credentialState);
      tab.value = "tab-second-factor";
      colors = {
        welcome: colorSet.done,
        login: colorSet.done,
        recovery: colorSet.done,
        secondFactor: colorSet.unset,
        summary: colorSet.unset,
      };
      readOnly = {
        welcome: false,
        login: false,
        recovery: false,
        secondFactor: false,
        summary: true,
      };
    } else {
      tab.value = "tab-summary";
      colors = {
        welcome: colorSet.done,
        login: colorSet.done,
        recovery: colorSet.done,
        secondFactor: colorSet.done,
        summary: colorSet.done,
      };
      readOnly = {
        welcome: false,
        login: false,
        recovery: false,
        secondFactor: false,
        summary: false,
      };
    }
  }
}

onMounted(() => {
  determineAndSetCurrentTab();
});

function welcomeContinue() {
  tab.value = "tab-login";
  colors = {
    welcome: colorSet.done,
    login: colorSet.unset,
    recovery: colorSet.unset,
    secondFactor: colorSet.unset,
    summary: colorSet.unset,
  };
  readOnly = {
    welcome: false,
    login: false,
    recovery: true,
    secondFactor: true,
    summary: true,
  };
}

function loginContinue() {
  login();
}

function recoveryContinue() {
  createRecoveryCodes();
}

function otpContinue() {
  createOTP();
}

function tokenContinue() {
  createWebauthn();
}

function recoverySkip() {
  tab.value = "tab-second-factor";
  colors = {
    welcome: colorSet.done,
    login: colorSet.done,
    recovery: colorSet.done,
    secondFactor: colorSet.unset,
    summary: colorSet.unset,
  };
  readOnly = {
    welcome: false,
    login: false,
    recovery: false,
    secondFactor: false,
    summary: true,
  };
}

function secondFactorSkip() {
  tab.value = "tab-summary";
  colors = {
    welcome: colorSet.done,
    login: colorSet.done,
    recovery: colorSet.done,
    secondFactor: colorSet.done,
    summary: colorSet.unset,
  };
  readOnly = {
    welcome: false,
    login: false,
    recovery: false,
    secondFactor: false,
    summary: false,
  };
}
</script>
<style lang="scss">
/*
<v-row>
    <v-col cols="2">
      <v-tabs v-model="tab" direction="vertical" color="primary">
        <v-tab value="tab-welcome" :disabled="readOnly.welcome">
          <v-icon start :color="colors.welcome"> mdi-account </v-icon>
          Willkommen
        </v-tab>
*/
.first-tabs {
  flex-direction: inherit;
  gap: 10px;
  padding: 10px;
  .v-row {
    flex-wrap: none !important;
  }

  @media (max-width: 600px) {
    flex-direction: column;
    .v-tab.v-tab {
      --v-btn-height: 30px;
    }
  }
  .v-col {
    padding: 0px;
  }
  .v-col-2 {
    display: flex;
    max-width: none;
  }
  .v-col-10 {
    display: flex;
    flex: 1;
    max-width: none;
  }
  .v-tabs {
    .v-btn--size-default {
      padding-right: 0px;
    }
  }
  //max-width: 0px;
}
</style>
