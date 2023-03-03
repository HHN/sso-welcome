<template>
  <div class="items-container">
    <h1>{{ t("title") }}</h1>
    <p>{{ t("text") }}</p>

    <br />

    <v-alert type="info" variant="tonal">
      <p>
        {{ t("text2") }}
      </p>
    </v-alert>

    <br />

    <p>
      {{ t("text3") }}
    </p>

    <br />

    <p>
      {{ t("text4") }}
    </p>
  </div>
</template>

<script setup lang="ts">
import { useI18n } from "vue-i18n";

const { t } = useI18n({
  messages: {
    de: {
      title: "Wiederherstellungscodes",
      text: "Neben Ihrem Passwort werden Sie an immer mehr Anwendungen einen zweiten Faktor benötigen, um sich an diesen anzumelden. Was ein zweiter Faktor ist, wie man ihn verwendet und wieso er wichtig ist, wird in einem nachfolgenden Schritt beschrieben.",
      text2:
        "Falls Sie den Ihren zweiten Faktor verlieren sollten, dann können Wiederherstellungscodes helfen, den Zugriff wiederherzustellen. ",
      text3:
        "Im nächsten Schritt erhalten Sie eine Liste von Codes, die Sie jeweils einmal verwenden können. Bitte speichern Sie diese Liste ab oder drucken Sie diese aus und legen Sie diese in einem verschlossenen Ort ab.",
      text4:
        "Sollten Sie diesen Schritt bereits erledigt haben, haben Sie nachfolgend die Möglichkeit diesen Schritt zu überspringen oder neue Wiederherstellungscodes zu erzeugen.",
    },
    en: {
      title: "Recovery Code",
      text: "TODO: translate",
    },
  },
});
</script>

<style lang="scss">
@import "../../styles/variables.scss";
</style>
