<template>
  <div class="items-container">
    <h1>{{ t("title") }}</h1>
    <p>{{ t("text") }}</p>

    <br />

    <h3>{{ t("subtitle1") }}</h3>
    <table>
      <tr>
        <td><v-icon icon="mdi-check" size="large" start /></td>
        <td>
          {{ t("tr1") }}
        </td>
      </tr>
      <tr>
        <td><v-icon icon="mdi-check" size="large" start /></td>
        <td>
          {{ t("tr2") }}
        </td>
      </tr>
      <tr>
        <td><v-icon icon="mdi-check" size="large" start /></td>
        <td>
          {{ t("tr3") }}
        </td>
      </tr>
    </table>

    <h3>{{ t("subtitle2") }}</h3>
    <table>
      <tr>
        <td><v-icon icon="mdi-check" size="large" start /></td>
        <td>
          {{ t("tr4") }}
        </td>
      </tr>
      <tr>
        <td><v-icon icon="mdi-check" size="large" start /></td>
        <td>
          {{ t("tr5") }}
        </td>
      </tr>
      <tr>
        <td><v-icon icon="mdi-check" size="large" start /></td>
        <td>{{ t("tr6") }}</td>
      </tr>
      <tr>
        <td><v-icon icon="mdi-check" size="large" start /></td>
        <td>
          {{ t("tr7") }}
        </td>
      </tr>
      <tr>
        <td><v-icon icon="mdi-check" size="large" start /></td>
        <td>
          {{ t("tr8") }}
        </td>
      </tr>
      <tr>
        <td><v-icon icon="mdi-check" size="large" start /></td>
        <td>
          {{ t("tr9") }}
        </td>
      </tr>
    </table>
    <h3>{{ t("subtitle3") }}</h3>

    <v-alert type="success" :title="t('subtitle4')" variant="tonal">
      <p>
        {{ t("text1") }}
        <a href="https://www.hs-heilbronn.de/login-hilfe" target="_blank">{{
          t("linktext")
        }}</a
        >.
      </p>
    </v-alert>

    <br />

    <v-alert type="success" :title="t('subtitle5')" variant="tonal">
      <p>
        {{ t("text2") }}
      </p>

      <p>
        {{ t("text3") }}
      </p>

      <p>
        {{ t("text4") }}
      </p>

      <pre>
        
      A7k1wdHm,dmT5L.
      </pre>

      <p>
        {{ t("text5") }}
      </p>
    </v-alert>

    <br />

    <p>
      {{ t("text8") }}
    </p>
  </div>
</template>
<script setup lang="ts">
import { useI18n } from "vue-i18n";

const { t } = useI18n({
  messages: {
    de: {
      title: "Anmelden",
      text: "Ihr Passwort ist der zentrale Sicherheitsfaktor für Ihren Hochschulaccount. Deshalb ist es wichtig, dass Sie ein gutes und sicheres Passwort verwenden. Falls Sie Ihr Initialpasswort noch nicht geändert haben, werden Sie im nächsten Schritt gebeten dies zu tun. Nachfolgend wird erklärt, wie Sie mit Ihrem Hochschulpasswort umgehen und wie Sie dieses erstellen.",
      subtitle1: "Wie gehe ich mit meinem Passwort um?",
      tr1: "Verwenden Sie keine gleichen Passwörter für verschiedene Accounts.",
      tr2: "Halten Sie Ihr Passwört unter Verschluss, indem Sie beispielsweise einen Passwortmanager nutzen.",
      tr3: "Geben Sie Ihr Passwört nicht an Dritte weiter und versenden Sie ihr Passwört nicht per E-Mail.",
      subtitle2: "Wie sollte mein Passwort aufgebaut sein?",
      tr4: "Das Passwort nutzt alle verfügbaren Zeichenarten (Ziffern, Sonderzeichen, Groß- und Kleinbuchstaben).",
      tr5: "Das Passwort ist mindestens 12 Zeichen lang, je länger desto besser.",
      tr6: "Das Passwort steht nicht in einem Wörterbuch.",
      tr7: "Das Passwort enthält keine gängigen Wiederholungs- oder Tastaturmuster (abcdefg, 1232456, asdfg, ...).",
      tr8: "Das Passwort enthält keine Begriffe und Zahlen, die mit Ihnen oder der HHN in Verbindung gebracht werden können (Geburtstage, Namen von Haustieren, Namen von Familienmitgliedern, ...)",
      tr9: "Das Passwort ist kein einfaches Passwort, dem eine Zahl und ein Sonderzeichen am Anfang oder Ende hinzugefügt wird.",
      subtitle3: "Erstellung eines sicheren Passworts",
      subtitle4: "Passwort durch Passwortmanager generieren",
      subtitle5: "Passwort selbst erstellen",
      text1:
        "Passwortmanager wie KeepassXC ermöglichen es von Haus aus sichere Passwörter zu erstellen. Weitere Informationen dazu finden Sie",
      linktext: "hier",
      text2:
        "Wenn Sie Ihr Passwort nicht durch einen Passwortmanager generieren, empfehlen wir Ihnen, sich ein Passwort aus einem für Sie leicht merkbaren Satz zu erstellen.",
      text3:
        "Beispielsatz: “Am Sonntag koche ich wieder die Himbeermarmelade, die meine Tochter so liebt.”",
      text4:
        "Hier verwenden wir einen beliebigen Satz, nehmen davon die ersten Buchstaben jedes Wortes und ersetzen dabei an geeigneten Stellen die Buchstaben durch passende Ziffern (Sonntag → 7, …).",

      text5: "Verwenden Sie auf keinen Fall das oben genannte Passwort!",
      text6: "",
      text7: "",
      text8:
        "Im nächsten Schritt werden Sie gebeten, sich anzumelden. Falls Sie Ihr Initialpasswort noch nicht geändert haben, werden Sie aufgefordert, dies zu ändern. Sollten Sie diesen Schritt bereits erledigt haben, werden Sie ohne diese Aufforderung weitergeleitet.",
      text9: "",
      text10: "",
      text11: "",
      text12: "",
    },
    en: {
      title: "Login",
      text: "TODO: translate",
    },
  },
});
</script>

<style lang="scss">
@import "../../styles/variables.scss";
table {
  display: flex;
  flex-direction: column;
  gap: 10px;
  .v-icon {
    color: green;
  }
}
</style>
