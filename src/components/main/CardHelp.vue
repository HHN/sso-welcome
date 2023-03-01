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
    title: "Probleme, Fragen?",
    subtitle: "Hilfe",
    text: "Hier erhalten Sie weitere Informationen und können Kontakt mit der Benutzerberatung aufnehmen."
  },
  en: {
    title: "Problems, questions?",
    subtitle: "Help",
    text: "Here you can find additional information and can contact the user support team."

  }
}
})
</script>