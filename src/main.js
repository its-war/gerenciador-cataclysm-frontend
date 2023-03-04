import { createApp } from 'vue'
import { createPinia } from 'pinia'

import App from './App.vue'
import router from './router'
import SystemResources from "@/plugins/SystemResources";

// Vuetify
import 'vuetify/styles'
import { createVuetify } from 'vuetify'
import * as components from 'vuetify/components'
import * as directives from 'vuetify/directives'
import '@mdi/font/css/materialdesignicons.css'

const vuetify = createVuetify({
    components,
    directives,
    theme: {
        defaultTheme: 'dark'
    }
})

const app = createApp(App)

app.config.globalProperties.$axios = new SystemResources('http://' + window.location.host + '/api');
//app.config.globalProperties.$axios = new SystemResources('http://192.168.0.21/api');

app.use(createPinia())
app.use(router)
app.use(vuetify)

app.mount('#app')
