import { createApp } from 'vue'
import App from './App.vue'
import axios from 'axios';
import router from './router';

axios.defaults.baseURL = 'https://firestore.googleapis.com/v1/projects/sprint-563bf/databases/(default)/documents'

createApp(
    router,
    App
).mount('#app')
