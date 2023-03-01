<template>
    <v-card variant="tonal" color="info">
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
      title: "Umzug aus der alten Welt",
      subtitle: "Accounteinrichtung",
      text: "Lernen Sie hier, wie Sie Ihren Account umziehen und einrichten."
    },
    en: {
      title: "Migration",
      subtitle: "Setup your Account",
      text: "Learn here how to migrate and setup your account."

    }
  }
})
</script>