import { createApp } from 'vue'
import { Icon } from '@iconify/vue';
import VueSweetalert2 from 'vue-sweetalert2';
import 'sweetalert2/dist/sweetalert2.min.css';

import App from './App.vue'
import router from './router';
import store from './store/store';
import './index.css'

let app = createApp(App).use(router).use(store).use(VueSweetalert2)

app.component('Icon',Icon)

app.mount('#app')
