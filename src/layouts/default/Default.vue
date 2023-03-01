<template>
  <v-app>
    <default-bar />

    <default-view />
    <footer-view />

    <v-overlay v-model="appStore.waitingForLoginState" class="align-center justify-center" >
        <v-progress-circular indeterminate :size="128" :width="12"  />
    </v-overlay>
  </v-app>
</template>

<script lang="ts" setup>
  import { initLogin } from '@/services/LoginService';
import DefaultBar from './AppBar.vue'
  import DefaultView from './View.vue'
  import FooterView from './FooterView.vue'
  import { useAppStore } from '@/store/app';
import { LoginState } from '@/models/LoginState';

  const appStore = useAppStore();

initLogin();
</script>
