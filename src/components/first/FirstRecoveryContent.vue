<template>
    <h1>{{  t('title') }}</h1>
    <p>{{  t('text') }}</p>

    <br />

    <v-alert type="info" variant="tonal">
        <p>Falls Sie den Ihren zweiten Faktor verlieren sollten, dann können Wiederherstellungscodes helfen, den Zugriff
            wiederherzustellen.</p>

    </v-alert>

    <br />



    <p>Im nächsten Schritt erhalten Sie eine Liste von Codes, die Sie jeweils einmal verwenden können.
        Bitte speichern Sie diese Liste ab oder drucken Sie diese aus und legen Sie diese in einem verschlossenen Ort ab.
    </p>

    <br />


    <p>Sollten Sie diesen Schritt bereits erledigt haben, haben Sie nachfolgend die Möglichkeit diesen Schritt zu
        überspringen oder neue Wiederherstellungscodes zu erzeugen.</p>
</template>

<script setup lang="ts">
import { useI18n } from "vue-i18n";

const { t } = useI18n({
messages: {
  de: {
    title: "Wiederherstellungscodes",
    text: "Neben Ihrem Passwort werden Sie an immer mehr Anwendungen einen zweiten Faktor benötigen, um sich an diesen anzumelden. Was ein zweiter Faktor ist, wie man ihn verwendet und wieso er wichtig ist, wird in einem nachfolgenden Schritt beschrieben."
  },
  en: {
    title: "Recovery Code",
    text: "TODO: translate"
  }
}
})
</script>