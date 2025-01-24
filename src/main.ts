import './assets/main.css'
import './assets/base.css'
import router from './router'
import { Transition } from 'vue'
import { createApp } from 'vue'
import App from './App.vue'
const app = createApp(App)
app.use(router)
app.mount('#app')


