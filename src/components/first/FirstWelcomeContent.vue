<template>
  <div class="items-container">
    <h1>{{ t("title") }}</h1>
    <p>{{ t("text1") }}</p>
    <p>{{ t("text2") }}</p>
    <p>
      {{ t("text3") }}
      <a href="https://www.hs-heilbronn.de/reset" target="_blank"
        >https://www.hs-heilbronn.de/reset</a
      >.
    </p>
    <p>{{ t("text4") }}</p>
  </div>
</template>
<script setup lang="ts">
import { useI18n } from "vue-i18n";

const { t } = useI18n({
  messages: {
    de: {
      title: "Willkommen!",
      text1:
        "Willkommen auf dem neuen Login-Portal der Hochschule Heilbronn (HHN)! Wenn Sie neu an der HHN sind oder gerade ein neues Passwort erhalten haben, möchten wir Sie auf den nächsten Seiten Schritt für Schritt anleiten, um Ihr neues digitales Konto zu registrieren.",
      text2:
        "Mit diesem Konto können Sie sich anschließend an wichtigen Diensten, wie bspw. VPN oder der ILIAS Lernplattform anmelden.",
      text3:
        "Wir versuchen, Ihnen die Einrichtung des Kontos so einfach wie möglich zu machen. Folgen Sie dazu einfach den Anweisungen auf den nachfolgenden Seiten. Bei Problemen oder Rückfragen, wenden Sie sich bitte an die Benutzerberatung (Helpdesk). Die Kontaktdaten finden Sie unter",
      text4:
        "Bitte führen Sie die Ersteinrichtung Ihres Accounts an einem regulären Computer durch und nicht direkt an einem Smartphone.",
    },
    en: {
      title: "Welcome!",
      text1:
        "Welcome to the new login portal of Heilbronn University (HHN)! If you are new to HHN or have just received a new password, we would like to guide you through the registration process of your new digital account on the next pages.",
      text2:
        "With this account you can then log into important university IT services, such as VPN or the ILIAS learning platform.",
      text3:
        "We try to make it as easy as possible for you to set up your new account. Simply follow the instructions on the following pages. If you have any problems or queries, please contact the user support. Please find the support contact details at",
      text4:
        "Please complete the initial account setup on a regular computer and not directly on your smartphone.",
    },
  },
});
</script>
<style lang="scss">
@import "../../styles/variables.scss";
</style>
