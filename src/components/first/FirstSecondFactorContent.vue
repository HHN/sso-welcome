<template>
  <div class="items-container">
    <h1>{{ t("title") }}</h1>
    <p>{{ t("text") }}</p>

    <br />

    <v-alert type="info" variant="tonal" :title="t('subtitle1')">
      <p>
        {{ t("text1") }}
      </p>

      <p>
        {{ t("text2") }}
      </p>

      <v-container>
        <ol>
          <li>
            {{ t("li1") }}
          </li>
          <li>
            {{ t("li2") }}
          </li>
          <li>
            {{ t("li3") }}
          </li>
        </ol>
      </v-container>

      <p>
        {{ t("text21") }}
      </p>
    </v-alert>

    <br />

    <h2>{{ t("subtitle2") }}</h2>
    <p>
      {{ t("text3") }}
    </p>

    <h3>{{ t("subtitle3") }}</h3>
    <p>
      {{ t("text4") }}
    </p>
    <v-container>
      <ul>
        <li>{{ t("li4") }}</li>
        <li>{{ t("li5") }}</li>
        <li>{{ t("li6") }}</li>
        <li>{{ t("li7") }}</li>
      </ul>
    </v-container>

    <p>
      {{ t("text5") }}
    </p>

    <h3>{{ t("subtitle4") }}</h3>
    <p>
      {{ t("text6") }}
    </p>
    <v-container>
      <ul>
        <li>{{ t("li8") }}</li>
        <li>{{ t("li9") }}</li>
        <li>{{ t("li10") }}</li>
      </ul>
    </v-container>

    <p>
      {{ t("text7") }}
    </p>

    <v-alert type="success" variant="tonal" :title="t('subtitle5')">
      <p>
        {{ t("text8") }}
      </p>
    </v-alert>

    <br />

    <v-alert type="warning" variant="tonal" :title="t('subtitle6')">
      <p>
        {{ t("text9") }}
      </p>
    </v-alert>
  </div>
</template>
<script setup lang="ts">
import { useI18n } from "vue-i18n";

const { t } = useI18n({
  messages: {
    de: {
      title: "2. Faktor / Mehrfaktorauthentifizierung",
      text: "Die Mehrfaktorauthentifizierung (MFA) ist ein Sicherheitsverfahren, das in vielen Online-Diensten und Anwendungen eingesetzt wird, um die Sicherheit von Benutzerkonten zu erhöhen. Sie stellt sicher, dass der Zugriff auf ein Benutzerkonto nicht nur durch Kenntnis eines Passworts möglich ist, sondern zusätzliche Faktoren benötigt werden, um sich erfolgreich anzumelden.",
      subtitle1: "Warum ist MFA notwendig?",
      text1:
        "Warum ist MFA notwendig? Das liegt daran, dass Passwörter allein oft nicht ausreichend sind, um einen sicheren Zugang zu einem Konto zu gewährleisten. Es gibt eine Vielzahl von Möglichkeiten, wie Passwörter kompromittiert werden können, einschließlich Phishing, Social Engineering und Brute-Force-Angriffen. Einmal in die Hände von Angreifern geraten, können diese Passwörter dazu verwendet werden, auf ein Benutzerkonto zuzugreifen und sensible Daten zu stehlen oder sogar Schaden anzurichten.",
      text2:
        "MFA bietet eine zusätzliche Sicherheitsebene, indem es ein oder mehrere zusätzliche Faktoren erfordert, um sich anzumelden. Die zusätzlichen Faktoren können verschiedene Formen annehmen, wie zum Beispiel: ",
      li1: "Etwas, das der Benutzer weiß (z.B. ein Passwort oder eine PIN)",
      li2: "Etwas, das der Benutzer hat (z.B. ein Smartphone oder ein Token)",
      li3: "Etwas, das der Benutzer ist (z.B. biometrische Daten wie Fingerabdrücke oder Gesichtserkennung)",
      text21:
        "Die Kombination aus diesen Faktoren erschwert es Angreifern erheblich, auf ein Benutzerkonto zuzugreifen, da sie alle Faktoren benötigen, um sich anzumelden. ",
      subtitle2: "Mögliche zweite Faktoren",
      text3:
        "Für den Login an Websystemen der HHN können Sie verschiedene Arten von zweiten Faktoren verwenden. ",
      subtitle3: "Sicherheitstoken",
      text4:
        "Präferiert wird die Verwendung von Sicherheitstoken in verschiedenen Formen. Wir unterstützen Geräte, die den FIDO2 / WebAuthn-Standard unterstützen. Dazu gehören z.B.: ",
      li4: "USB-Tokens wie Yubikeys",
      li5: "aktuelle Windows-Geräte mit aktiviertem Windows Hello",
      li6: "Apple Passkey auf Macs und mobilen Endgeräten",
      li7: "Android-Geräte mit Fingerabruck / Gesichtserkennung",
      text5:
        "Bei USB-Tokens stellen Sie bei der Anmeldung sicher, dass Sie den USB-Token im Gerät eingesteckt haben. Im Anschluss melden Sie sich an, bestätigen die Verwendung des USB-Tokens und drücken auf die dann leuchtende Schaltfläche. ",
      subtitle4: "Einmalpasswörter",
      text6:
        "Möglich ist auch eine Verwendung von zeitbasierten Einmalpasswörtern (engl. TOTP), wie sie auch bei verschiedensten anderen Anwendungen zum Einsatz kommen. Dazu verwenden Sie eine Anwendung wie: ",

      li8: "Google Authenticator auf Android/iOS",
      li9: "Microsoft Authenticator auf Android/iOS",
      li10: "KeepassXC auf Windows / MacOS / Linux",
      text7:
        "Beim Login werden Sie aufgefordert, das aktuell gültige Einmalpasswort einzugeben. Sie finden dies durch Öffnen der jeweiligen Anwendung.",
      subtitle5: "Empfehlung",
      text8:
        "Präferiert ist die Verwendung von Sicherheitstokens. Diese bieten einerseits eine höhere Sicherheit, sind sicher vor Manipulationen und sind schneller. ",
      subtitle6: "Wichtiger Hinweis",
      text9:
        "Bitte fügen Sie zuerst die Variante hinzu, die Sie am häufigsten verwenden (z.B. Sicherheitstoken). Die zu erst gewählte Variante wird beim Login zuerst vorgeschlagen. Damit ersparen Sie sich das manuelle Neuauswählen bei jedem Login. ",
    },
    en: {
      title: "Second Faktor",
      text: "TODO: translate",
    },
  },
});
</script>
<style lang="scss">
@import "../../styles/variables.scss";
</style>
