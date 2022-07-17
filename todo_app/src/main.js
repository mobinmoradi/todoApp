import { createApp } from 'vue'
import { Icon } from '@iconify/vue';
import App from './App.vue'
import router from './router';
import './index.css'

let app = createApp(App).use(router)

app.component('Icon',Icon)

app.mount('#app')
