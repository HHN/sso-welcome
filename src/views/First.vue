<template>
  <first-tabs v-if="appStore.loggedIn !== LoginState.UNKNOWN"/>
</template>

<script lang="ts" setup>
//import MainSelect from '@/components/MainSelect.vue'
import FirstTabs from '@/components/first/FirstTabs.vue';
import { useAppStore } from '@/store/app';
import { LoginState } from '@/models/LoginState';

const appStore = useAppStore();
</script>
