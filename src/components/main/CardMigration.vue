<template>
  <v-card variant="tonal" color="info">
    <template v-slot:title>
      {{ t("title") }}
    </template>

    <template v-slot:subtitle>
      {{ t("subtitle") }}
    </template>

    <template v-slot:text>
      {{ t("text") }}
    </template>
  </v-card>
</template>
<script setup lang="ts">
import { useI18n } from "vue-i18n";

const { t } = useI18n({
  messages: {
    de: {
      title: "Neuen Account einrichten",
      subtitle: "Einrichtungsassistent",
      text: "Benutzen Sie den Einrichtungsassistent, um Ihr Initialpasswort zu ändern und einen zweiten Anmeldefaktor einzurichten.",
    },
    en: {
      title: "Account Registration",
      subtitle: "Setup Wizard",
      text: "Use the setup wizard to register your new account, change your initial password and set up a second login factor.",
    },
  },
});
</script>
