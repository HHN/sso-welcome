/**
 * main.ts
 *
 * Bootstraps Vuetify and other plugins then mounts the App`
 */

// Components
import App from './App.vue'

// Composables
import { createApp } from 'vue'
import { createI18n } from 'vue-i18n'


// Plugins
import { registerPlugins } from '@/plugins'

const messages = {
    de: {
        message: {
            hello: 'Hallo, {name}!'
        }
    },
    en: {
        message: {
            hello: 'hello, {name}!'
        }
    },
    
}


const i18n = createI18n({
    locale: 'de',
    messages: messages,
    legacy: false,
  })

const app = createApp(App)

registerPlugins(app)

app.use(i18n)
app.mount('#app')
