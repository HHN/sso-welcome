<template>
  <v-app-bar flat>
    <v-app-bar-title>
      <v-btn v-if="appStore.loggedIn === LoginState.UNKNOWN" icon="mdi-progress-helper" :to="'/'"></v-btn>
      <v-btn v-if="appStore.loggedIn !== LoginState.UNKNOWN" icon="mdi-home" :to="'/'"></v-btn>
      {{appStore.loggedIn === LoginState.LOGGED_IN ? $t('message.hello', { name: appStore.fullName}) : 'login.hs-heilbronn.de'}}
    </v-app-bar-title>
    <v-btn append-icon="mdi-web">
      <v-menu activator="parent">
        <v-list>
          <v-list-item @click="setLanguage('de')">DE</v-list-item>
          <v-list-item @click="setLanguage('en')">EN</v-list-item>
        </v-list>
      </v-menu>
    </v-btn>
    <v-btn v-if="appStore.loggedIn === LoginState.LOGGED_IN" @click="logout" icon="mdi-logout"></v-btn>
    <v-btn v-if="appStore.loggedIn === LoginState.NOT_LOGGED_IN" @click="login" icon="mdi-login"></v-btn>
    <v-btn v-if="appStore.loggedIn === LoginState.UNKNOWN" append-icon="mdi-progress-helper"></v-btn>

  </v-app-bar>
</template>

<script lang="ts" setup>
  //
  import { useAppStore } from '@/store/app';
  import { login, logout } from '@/services/LoginService';
  import { LoginState } from '@/models/LoginState';
import { useI18n } from 'vue-i18n';

  const { t, locale } = useI18n({ useScope: 'global' })

  function setLanguage(val: string) {
    locale.value = val;
  }

  const appStore = useAppStore();
</script>
