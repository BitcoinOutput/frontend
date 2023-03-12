import { createApp } from 'vue'
import App from './App.vue'
import './assets/tailwind.css'
import './assets/main.css'
import router from './router'

import Axios from 'axios'
import Notifications from '@kyvg/vue3-notification'

const baseURL = 'http://localhost:5000'

Axios.defaults.baseURL = baseURL

const app = createApp(App)

app.use(router)
app.use(Notifications).mount('#app')
