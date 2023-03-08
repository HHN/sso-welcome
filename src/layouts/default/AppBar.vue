<template>
  <v-app-bar flat>
    <v-app-bar-title>
      <v-btn
        v-if="appStore.loggedIn === LoginState.UNKNOWN"
        icon="mdi-progress-helper"
        :to="'/'"
      ></v-btn>
      <v-btn
        v-if="appStore.loggedIn !== LoginState.UNKNOWN"
        icon="mdi-home"
        :to="'/'"
      ></v-btn>
      {{
        appStore.loggedIn === LoginState.LOGGED_IN
          ? $t("message.hello", { name: appStore.fullName })
          : "login.hs-heilbronn.de"
      }}
    </v-app-bar-title>
    <v-btn class="flex-item" append-icon="mdi-web">
      <v-menu activator="parent">
        <v-list>
          <v-list-item @click="setLanguage('de')">DE</v-list-item>
          <v-list-item @click="setLanguage('en')">EN</v-list-item>
        </v-list>
      </v-menu>
    </v-btn>
    <v-btn
      class="flex-item"
      v-if="appStore.loggedIn === LoginState.LOGGED_IN"
      @click="logout"
      icon="mdi-logout"
    ></v-btn>
    <v-btn
      class="flex-item"
      v-if="appStore.loggedIn === LoginState.NOT_LOGGED_IN"
      @click="login"
      icon="mdi-login"
    ></v-btn>
    <v-btn
      class="flex-item"
      v-if="appStore.loggedIn === LoginState.UNKNOWN"
      append-icon="mdi-progress-helper"
    ></v-btn>
  </v-app-bar>
</template>

<script lang="ts" setup>
//
import { useAppStore } from "@/store/app";
import { login, logout } from "@/services/LoginService";
import { LoginState } from "@/models/LoginState";
import { useI18n } from "vue-i18n";

const { t, locale } = useI18n({ useScope: "global" });

function setLanguage(val: string) {
  locale.value = val;
  localStorage.setItem('lang',val);
}

const appStore = useAppStore();
</script>
<style lang="scss">
@import "../../styles/variables.scss";

.v-app-bar {
  display: flex;
  .v-toolbar__content,
  .v-toolbar__extension {
    gap: 3px;
  }
  .flex-item {
    display: flex;
  }
  .v-app-bar-title {
    .v-btn {
      margin-right: 12px;
    }
  }

  .v-btn {
    padding: 0px;
    //margin-right: 12px;
    .v-btn__append {
      margin-inline-start: 0px;
      margin-inline-end: 0px;
    }
  }
  .v-btn--size-default {
    min-width: 0px;
  }
  .v-toolbar-title {
    margin-inline-start: 12px;
  }
}
.v-app-bar.v-toolbar {
  box-shadow: 0 1px 3px 1px #0000, 0 1px 2px 2px #0000, 0 2px 2px -1px #00000014;
}
.v-app-bar .v-btn--size-default {
  border-radius: 50%;
  width: calc(var(--v-btn-height) + 12px);
  height: calc(var(--v-btn-height) + 12px) !important;
}
</style>
