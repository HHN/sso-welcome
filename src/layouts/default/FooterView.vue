<template>
  <div class="footer">
    <a :href="t('imprintUrl')">{{ t("imprintTitle") }}</a>
    <a :href="t('dataSafetyUrl')">{{ t("dataSafetyTitle") }}</a>
  </div>
</template>
<script setup lang="ts">
import { useI18n } from "vue-i18n";

const { t } = useI18n({
  messages: {
    de: {
      imprintTitle: "Impressum",
      dataSafetyTitle: "Datenschutz",
      imprintUrl: "https://www.hs-heilbronn.de/impressum",
      dataSafetyUrl: "https://www.hs-heilbronn.de/datenschutz",
    },
    en: {
      imprintTitle: "Imprint",
      dataSafetyTitle: "Data Safety",
      imprintUrl: "https://www.hs-heilbronn.de/impressum",
      dataSafetyUrl: "https://www.hs-heilbronn.de/datenschutz",
    },
  },
});
</script>

<style lang="scss">
@import "../../styles/variables.scss";
.footer {
  display: flex;
  gap: 12px;
  font-size: 0.875rem;
  padding: 3px 12px;
  border-top: 1px solid lightgray;
  color: $hhn-blue;
}
</style>
