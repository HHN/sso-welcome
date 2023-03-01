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
    title: "Anwendungen",
    subtitle: "Liste der Web-Anwendungen",
    text: "Hier erhalten Sie eine Übersicht über die wichtigsten Anwendungen an der Hochschule Heilbronn."
  },
  en: {
    title: "Applications",
    subtitle: "List of web-applications",
    text: "Here you can find a list of the most important web applications used at Heilbronn University."

  }
}
})
</script>