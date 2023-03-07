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
      title: "Zugangsdaten ändern",
      subtitle: "Accountverwaltung",
      text: "Über die Accountverwaltung können Sie jederzeit Ihr Passwort ändern, Ihre zweiten Faktoren verwalten und aktive Sitzungen einsehen.",
    },
    en: {
      title: "Change Login Data",
      subtitle: "Account Management",
      text: "Self-service to change your password, manage your second login factors and view active sessions.",
    },
  },
});
</script>
