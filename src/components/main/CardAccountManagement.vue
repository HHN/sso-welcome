<template>
  <v-card variant="tonal">
<template v-slot:title>
  {{  t('title') }}
</template>

<template v-slot:subtitle>
  {{  t('subtitle') }}
</template>

<template v-slot:text>
  {{  t('text') }}
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
    text: "Hier können Sie Ihr Passwort ändern, Ihre zweiten Faktoren und aktive Sitzungen einsehen und verwalten."
  },
  en: {
    title: "Change your credentials",
    subtitle: "Manage your Account",
    text: "Here you can change your password and view and manage your second factors and active sessions."

  }
}
})
</script>