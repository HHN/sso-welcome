<template>
    <h1>{{  t('title') }}</h1>
    <p>{{  t('text') }}</p>

    <br />

    <v-alert type="info" variant="tonal" title="Wieso Mehrfaktorauthentifizierung?">
        <p>
            Warum ist MFA notwendig? Das liegt daran, dass Passwörter allein oft nicht ausreichend sind, um einen sicheren
            Zugang zu einem Konto zu gewährleisten. Es gibt eine Vielzahl von Möglichkeiten, wie Passwörter kompromittiert
            werden können, einschließlich Phishing, Social Engineering und Brute-Force-Angriffen. Einmal in die Hände von
            Angreifern geraten, können diese Passwörter dazu verwendet werden, auf ein Benutzerkonto zuzugreifen und
            sensible Daten zu stehlen oder sogar Schaden anzurichten.

        </p>

        <p>
            MFA bietet eine zusätzliche Sicherheitsebene, indem es ein oder mehrere zusätzliche Faktoren erfordert, um sich
            anzumelden. Die zusätzlichen Faktoren können verschiedene Formen annehmen, wie zum Beispiel:


        </p>

        <v-container>
            <ol>
                <li>Etwas, das der Benutzer weiß (z.B. ein Passwort oder eine PIN)</li>
                <li>Etwas, das der Benutzer hat (z.B. ein Smartphone oder ein Token)</li>
                <li>Etwas, das der Benutzer ist (z.B. biometrische Daten wie Fingerabdrücke oder Gesichtserkennung)</li>

            </ol>
        </v-container>

        <p>Die Kombination aus diesen Faktoren erschwert es Angreifern erheblich, auf ein Benutzerkonto zuzugreifen, da sie
            alle Faktoren benötigen, um sich anzumelden.</p>

    </v-alert>


    <br />

    <h2>Mögliche zweite Faktoren</h2>
    <p>Für den Login an Websystemen der HHN können Sie verschiedene Arten von zweiten Faktoren verwenden.</p>

    <h3>Sicherheitstoken</h3>
    <p>Präferiert wird die Verwendung von Sicherheitstoken in verschiedenen Formen. Wir unterstützen Geräte, die den FIDO2 /
        WebAuthn-Standard unterstützen. Dazu gehören z.B.:</p>
    <v-container>
        <ul>
            <li>USB-Tokens wie Yubikeys</li>
            <li>aktuelle Windows-Geräte mit aktiviertem Windows Hello</li>
            <li>Apple Passkey auf Macs und mobilen Endgeräten</li>
            <li>Android-Geräte mit Fingerabruck / Gesichtserkennung</li>
        </ul>
    </v-container>

    <p>Bei USB-Tokens stellen Sie bei der Anmeldung sicher, dass Sie den USB-Token im Gerät eingesteckt haben. Im Anschluss
        melden Sie sich an, bestätigen die Verwendung des USB-Tokens und drücken auf die dann leuchtende Schaltfläche.</p>


    <h3>Einmalpasswörter</h3>
    <p>Möglich ist auch eine Verwendung von zeitbasierten Einmalpasswörtern (engl. TOTP), wie sie auch bei verschiedensten
        anderen Anwendungen zum Einsatz kommen. Dazu verwenden Sie eine Anwendung wie:</p>
    <v-container>
        <ul>
            <li>Google Authenticator auf Android/iOS</li>
            <li>Microsoft Authenticator auf Android/iOS</li>
            <li>KeepassXC auf Windows / MacOS / Linux</li>
        </ul>
    </v-container>

    <p>Beim Login werden Sie aufgefordert, das aktuell gültige Einmalpasswort einzugeben. Sie finden dies durch Öffnen der
        jeweiligen Anwendung.</p>


<v-alert type="success" variant="tonal" title="Empfehlung">
    <p>Präferiert ist die Verwendung von Sicherheitstokens. Diese bieten einerseits eine höhere Sicherheit, sind sicher
        vor Manipulationen und sind schneller.</p>
</v-alert>

<br />

<v-alert type="warning" variant="tonal" title="Wichtiger Hinweis">
    <p>Bitte fügen Sie zuerst die Variante hinzu, die Sie am häufigsten verwenden (z.B. Sicherheitstoken). Die zu erst
        gewählte Variante wird beim Login zuerst vorgeschlagen. Damit ersparen Sie sich das manuelle Neuauswählen bei
        jedem Login.</p>
</v-alert></template>
<script setup lang="ts">
import { useI18n } from "vue-i18n";

const { t } = useI18n({
messages: {
  de: {
    title: "2. Faktor / Mehrfaktorauthentifizierung",
    text: "Die Mehrfaktorauthentifizierung (MFA) ist ein Sicherheitsverfahren, das in vielen Online-Diensten und Anwendungen eingesetzt wird, um die Sicherheit von Benutzerkonten zu erhöhen. Sie stellt sicher, dass der Zugriff auf ein Benutzerkonto nicht nur durch Kenntnis eines Passworts möglich ist, sondern zusätzliche Faktoren benötigt werden, um sich erfolgreich anzumelden."
  },
  en: {
    title: "Second Faktor",
    text: "TODO: translate"
  }
}
})
</script>