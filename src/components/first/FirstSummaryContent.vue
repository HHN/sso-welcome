<template>
  <div class="items-container"></div>
</template>
<script setup lang="ts">
import { useI18n } from "vue-i18n";

const { t } = useI18n({
  messages: {
    de: {},
    en: {},
  },
});
</script>
<style lang="scss">
@import "../../styles/variables.scss";
</style>
