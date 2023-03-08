<template>
  <div class="items-container">
    <h1>{{ t("title") }}</h1>
    <p>{{ t("text") }}</p>

    <br />

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
      <tr>
        <td><v-icon icon="mdi-check" size="large" start /></td>
        <td>
          {{ t("tr31") }}
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
        <a href="https://keepassxc.org/" target="_blank">{{ t("linktext") }}</a
        >{{ t("text13") }}
      </p>
    </v-alert>

    <br />

    <v-alert type="success" :title="t('subtitle5')" variant="tonal">
      <p>
        {{ t("text2") }}
      </p>
      <br />
      <p>
        {{ t("text3") }}
      </p>
      <br />
      <p>
        {{ t("text4") }}
      </p>

      <pre>
        
        {{ t("example") }}
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
      text: "Ihr Passwort ist der zentrale Schlüssel für Ihren Hochschulaccount. Deshalb ist es wichtig, dass Sie ein gutes und sicheres Passwort verwenden. Falls Sie Ihr Initialpasswort noch nicht geändert haben, werden Sie im nächsten Schritt dazu aufgefordert. Nachfolgend einige Tipps zur Erstellung Ihres neuen Passworts:",
      tr1: "Verwenden Sie für die Hochschule ein individuelles Passwort, das Sie nicht schon an anderer Stelle verwenden.",
      tr2: "Halten Sie Ihr Passwort unter Verschluss, indem Sie beispielsweise einen Passwort-Manager nutzen.",
      tr3: "Geben Sie Ihr Passwort nicht an Dritte weiter und versenden Sie ihr Passwort nicht per E-Mail.",
      tr31: "Sie müssen Ihr Passwort zukünftig nicht mehr regelmäßig ändern. Bitte nehmen Sie sich daher Zeit, sich nun einmalig ein starkes Passwort zu überlegen. Dieses Passwort wird Ihr digitales Hochschulkonto auf lange Zeit schützen.",
      subtitle2: "Wie sollte mein Passwort aufgebaut sein?",
      tr4: "Das Passwort muss alle verfügbaren Zeichenarten nutzen (Ziffern, Sonderzeichen, Groß- und Kleinbuchstaben).",
      tr5: "Das Passwort muss mindestens 12 Zeichen lang sein, je länger desto besser.",
      tr6: "Das Passwort darf nicht in einem Wörterbuch stehen.",
      tr7: "Das Passwort darf keine gängigen Wiederholungs- oder Tastaturmuster enthalten (bspw. abcdefg, 1232456, asdfg, ...).",
      tr8: "Das Passwort darf keine Begriffe und Zahlen enthalten, die mit Ihnen oder der HHN in Verbindung gebracht werden können (bspw. Geburtstage, Namen von Haustieren, Namen von Familienmitgliedern, Jahreszahlen, ...).",
      tr9: "Das Passwort darf kein einfaches Passwort sein, dem eine Zahl und ein Sonderzeichen am Anfang oder Ende hinzugefügt wird (bspw. kein „2023!“ am Ende).",
      subtitle3: "Erstellung eines sicheren Passworts",
      subtitle4: "Passwort durch Passwortmanager generieren",
      subtitle5: "Passwort selbst erstellen",
      text1:
        "Spezielle Programme, so genannte Passwort-Manager, können bei der Verwaltung vieler Passwörter helfen. Ein beliebter, freiverfügbarer Passwortmanager ist beispielsweise",
      linktext: "KeePassXC",
      text13:
        ". Ein solcher Passwortmanager kann Sie dabei unterstützen, komplexe Passwörter nach dem Zufallsprinzip zu generieren.",
      text2:
        "Wenn Sie Ihr Passwort nicht durch einen Password-Manager generieren, empfehlen wir Ihnen, sich ein Passwort aus einem für Sie leicht merkbaren Satz zu erstellen.",
      text3:
        "Beispielsatz: “Am Sonntag koche ich wieder die Himbeermarmelade, die meine Freundin so liebt.”",
      text4:
        "Hier verwenden wir einen beliebigen Satz, nehmen davon die ersten Buchstaben jedes Wortes und ersetzen dabei an geeigneten Stellen einzelne Buchstaben durch geeignete Ziffern (Sonntag → 7, …).",

      example: "A7k1wdHm,dmF5L.",
      text5:
        "Achtung: Verwenden Sie bitte auf keinen Fall dieses Passwort! ;) ",
      text8:
        "Im nächsten Schritt werden Sie nun gebeten, sich anzumelden. Falls Sie Ihr Initialpasswort noch nicht geändert haben, werden Sie dazu aufgefordert ein neues Passwort zu konfigurieren. Sollten Sie diesen Schritt bereits erledigt haben, werden Sie ohne diese Aufforderung weitergeleitet.",
    },
    en: {
      title: "Your Password",
      text: "Your password is the central key for your university account. Therefore, it is important that you use a good and secure password. If you have not yet changed your initial password, you will be prompted to do so in the next step. Please find below a few tips for creating your new password:",
      tr1: "Use a unique password for your university account that you do not already use elsewhere.",
      tr2: "Keep your password secure and under lock by using e.g. a password manager.",
      tr3: "Do not share your password with third parties and do not send your password by e-mail.",
      tr31: "You will no longer need to change your password regularly. Therefore, please take the time to think of a strong password now. This password will protect your digital university account for a long time.",
      subtitle2: "What defines a good password?",
      tr4: "The password must use all available character types (digits, special characters, upper and lower case letters).",
      tr5: "The password must be at least 12 characters long, the longer the better.",
      tr6: "The password must not be listed in a dictionary.",
      tr7: "The password must not contain any common repetition or keyboard patterns (e.g. abcdefg, 1232456, asdfg, ...).",
      tr8: "The password must not contain any terms or numbers that can be associated with you or the university (e.g. birthdays, names of pets, names of family members, dates, etc.).",
      tr9: 'The password must not be a simple password with a number and a special character added to the beginning or end (e.g. no "2023!" at the end).',
      subtitle3: "Creating a secure password",
      subtitle4: "Generate password using a password manager",
      subtitle5: "Create your own password",
      text1:
        "Special programs called password managers can help manage many passwords. For example, a popular password manager that is freely available is",
      linktext: "KeePassXC",
      text13:
        ". Such a password manager can help you generate complex and random passwords.",
      text2:
        "If you do not generate your password by a password manager, we recommend that you create a password from a phrase that is easy for you to remember.",
      text3:
        'Example sentence: "On Sunday, I\'m going to make that raspberry jam that my friend loves so much."',
      text4:
        "Here we use an arbitrary sentence, take the first letters of each word and replace individual letters (Sunday → 7, love → <3 ...).",

      example: "O7,Igtmtrjtmf<3sm.",
      text5:
        "Attention: Please do not use this password under any circumstances! ;)",
      text8:
        "You will now be asked to log in. If you have not yet changed your initial password, you will be prompted to set a new password. If you have already changed your password, you will be redirected to the next step.",
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
