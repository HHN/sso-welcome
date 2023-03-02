<template>
    <h1>{{  t('title') }}</h1>
    <p>{{  t('text') }}</p>

    <br />

    <p>Ein gutes Passwort sollte </p>

    <v-container>
        <ul>
            <li>gut zu merken</li>
            <li>möglichst komplex</li>
            <li>möglichst lang</li>
            <li>nicht aus Wörterbuchworten</li>
            <li>nicht aus eigenen Namen und Namen der HHN bestehen.</li>
        </ul>
    </v-container>


    <v-alert type="success" title="Passwort durch Passwortmanager generieren" variant="tonal">
        <p>Passwortmanager wie KeepassXC ermöglichen es von Haus aus sichere Passwörter zu erstellen. Weitere Informationen
            dazu finden Sie <a href="https://www.hs-heilbronn.de/login-hilfe" target="_blank">hier</a>.</p>

    </v-alert>

    <br />

    <v-alert type="info" title="Passwort selbst erstellen" variant="tonal">
        <p>Wenn Sie Ihr Passwort nicht durch einen Passwortmanager generieren, empfehlen wir Ihnen, sich ein Passwort aus
            einem für Sie leicht merkbaren Satz zu erstellen.</p>

        <p>Beispielsatz: “Am Sonntag koche ich wieder die Himbeermarmelade, die meine Tochter so liebt.”</p>

        <p>Hier verwenden wir einen beliebigen Satz, nehmen davon die ersten Buchstaben jedes Wortes und ersetzen dabei an
            geeigneten Stellen die Buchstaben durch passende Ziffern (Sonntag → 7, …).</p>

        <pre>
    A7k1wdHm,dmT5L.
    </pre>

        <p>Verwenden Sie auf keinen Fall das oben genannte Passwort!</p>
    </v-alert>

    <br />



    <p>Im nächsten Schritt werden Sie gebeten, sich anzumelden. Falls Sie Ihr Initialpasswort noch nicht geändert haben,
        werden Sie aufgefordert, dies zu ändern. Sollten Sie diesen Schritt bereits erledigt haben, werden Sie ohne diese
        Aufforderung weitergeleitet.</p>
</template>
<script setup lang="ts">
import { useI18n } from "vue-i18n";

const { t } = useI18n({
messages: {
  de: {
    title: "Anmelden",
    text: "Ihr Passwort ist der zentrale Sicherheitsfaktor für Ihr Hochschulaccount. Deshalb ist es wichtig, dass Sie ein gutes und sicheres Passwort verwenden, dass Sie für keinen anderen Dienst einsetzen."
  },
  en: {
    title: "Login",
    text: "TODO: translate"
  }
}
})
</script>