<template>
  <div class="items-container">
    <h1>{{ t("title") }}</h1>
    <p>
      {{ t("text1") }}
      <a href="/realms/hhn/account/" target="_blank">{{ t("link") }}</a
      >{{ t("text2") }}
    </p>
    <p>
      {{ t("text3") }}
      <a href="https://www.hs-heilbronn.de/reset" target="_blank"
        >https://www.hs-heilbronn.de/reset</a
      >.
    </p>
  </div>
</template>
<script setup lang="ts">
import { useI18n } from "vue-i18n";

const { t } = useI18n({
  messages: {
    de: {
      title: "Herzlichen Glückwunsch!",
      text1:
        "Ihr digitales Hochschulkonto ist nun erfolgreich eingerichtet. Über die",
      link: "Accountverwaltung",
      text2:
        " können Sie zukünftig Ihr Passwort jederzeit ändern, oder Ihre zweiten Faktoren verwalten.",
      text3:
        "Weitere Informationen, Hilfestellungen oder den Kontakt zur Benutzerberatung finden Sie unter",
    },
    en: {
      title: "Congratulations!",
      text1:
        "Your digital university account is now successfully set up. In the future, you can change your password or manage your second factors at any time via the",
      link: "account management self-service",
      text2: ".",
      text3:
        "For more information, assistance or to contact user support, visit",
    },
  },
});
</script>
<style lang="scss">
@import "../../styles/variables.scss";
</style>
