<template>
  <first-tabs v-if="appStore.loggedIn !== LoginState.UNKNOWN" />
</template>

<script lang="ts" setup>
//import MainSelect from '@/components/MainSelect.vue'
import FirstTabs from "@/components/first/FirstTabs.vue";
import { useAppStore } from "@/store/app";
import { LoginState } from "@/models/LoginState";

const appStore = useAppStore();
</script>
<style lang="scss">
.v-container {
  padding: 12px;
  max-width: 1200px;
  @media (min-width: 960px) {
  }
}
</style>
