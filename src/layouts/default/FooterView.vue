
<template>
    <div class="footer">
        <a :href="t('imprintUrl')">{{ t('imprintTitle') }}</a> {{ t('and') }}
        <a :href="t('dataSafetyUrl')">{{ t('dataSafetyTitle') }}</a>

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
        and: "und"
      },
      en: {
        imprintTitle: "Imprint",
        dataSafetyTitle: "Data Safety",
        imprintUrl: "https://www.hs-heilbronn.de/impressum",
        dataSafetyUrl: "https://www.hs-heilbronn.de/datenschutz",
        and: "and"

      },
    }
});

</script>

<style scoped>
.footer {
    text-align: center;
}
</style>