import { createApp } from 'vue'
import { createPinia } from 'pinia'

// Vuetify
import 'vuetify/styles'
import { createVuetify } from 'vuetify'
import '@mdi/font/css/materialdesignicons.css' // Ensure you are using css-loader
import * as components from 'vuetify/components'
import * as directives from 'vuetify/directives'

import App from './App.vue'
import router from './router'

import './assets/main.css'

const app = createApp(App)

const vuetify = createVuetify({
    components,
    directives
})

app.use(createPinia())
app.use(router)
app.use(vuetify).mount('#app')
