<template>
  <div class="items-container linebreak">
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
      text: "Neben Ihrem Passwort werden Sie zukünftig zur Anmeldung an vielen Anwendungen der Hochschule einen zweiten Faktor benötigen. Was ein zweiter Faktor ist, wie man ihn verwendet und wieso er wichtig ist, wird im nächsten Schritt erklärt.",
      text2:
        "Falls Sie diesen zweiten Faktor später einmal verlieren sollten, dann können Wiederherstellungscodes helfen, den Zugriff zu Ihrem Konto wiederherzustellen.",
      text3:
        "In diesem Schritt erhalten Sie daher eine Liste von Codes, die Sie im Notfall jeweils einmalig als zweiten Faktor verwenden können (vergleichbar mit TAN-Nummern). Bitte speichern Sie diese Liste sicher ab (bspw. in einem Passwort-Manager) oder drucken Sie diese Liste aus und legen Sie an einem verschlossenen Ort ab.",
      text4:
        "Sollten Sie bereits Wiederherstellungscode erzeugt haben, können Sie diesen Schritt überspringen oder neue Wiederherstellungscodes erzeugen.",
    },
    en: {
      title: "Recovery Codes",
      text: "In addition to your password, you will need a second factor to log into a growing number od university services in the future. What a second factor is, how to use it and why it is important will be explained in the next step.",
      text2:
        "In case you lose this second factor later, recovery codes can help restore access to your account. ",
      text3:
        "Next, you will therefore receive a list of recovery codes that you can use once as a second factor in an emergency (comparable to TAN numbers). Please save this list securely (e.g., in a password manager) or print it out and store it in a locked place.",
      text4:
        "If you have already generated recovery codes, you can skip this step or generate new recovery codes.",
    },
  },
});
</script>

<style lang="scss">
@import "../../styles/variables.scss";
</style>
