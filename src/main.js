import { createApp } from 'vue'
import App from './App.vue'
import 'normalize.css'
import "./assets/css/main.css"
import router from './router'
import store from './store/index'


const app = createApp(App)

app.use(store)

app.use(router)

app.mount('#app')
