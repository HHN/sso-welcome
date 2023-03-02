<template>
    <h1>{{  t('title') }}</h1>
    <p>{{  t('text') }}</p>
</template>
<script setup lang="ts">
import { useI18n } from "vue-i18n";

const { t } = useI18n({
messages: {
  de: {
    title: "Willkommen!",
    text: "Willkommen an der Hochschule Heilbronn! Wenn Sie neu an der HHN sind oder gerade ein neues Passwort erhalten haben, möchten wir Sie auf den nächsten Seiten Schritt für Schritt durch die notwendigen Schritte führen. Wir sind bestrebt, es Ihnen so einfach wie möglich zu machen, sich anzumelden und loszulegen. Folgen Sie einfach den Anweisungen auf den Seiten und Sie werden bald in der Lage sein, die Dienste der HHN zu nutzen."
  },
  en: {
    title: "Welcome!",
    text: "TODO: translate"
  }
}
})
</script>