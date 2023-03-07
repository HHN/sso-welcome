<template>
  <v-card variant="tonal">
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
      title: "Probleme, Fragen?",
      subtitle: "Hilfe",
      text: "Hier finden Sie weitere Informationen, Hilfestellungen und den Kontakt zur Benutzerberatung.",
    },
    en: {
      title: "Problems, questions?",
      subtitle: "Help",
      text: "Find further information, assistance and the contact to the user support service.",
    },
  },
});
</script>
