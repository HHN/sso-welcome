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
    title: "Neu hier?",
    subtitle: "Accounteinrichtung",
    text: "Lernen Sie hier, wie Sie Ihren Account einrichten."
  },
  en: {
    title: "New user?",
    subtitle: "Setup your Account",
    text: "Learn here how to setup your account."

  }
}
})
</script>