import { createApp } from 'vue'
import App from './App.vue'
import api from './apis/index'
import 'virtual:windi.css'

createApp(App).use(api).mount('#app')
