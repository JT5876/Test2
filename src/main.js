// main.js
import { createApp } from 'vue';
import App from './App.vue';
import { createRouter, createWebHistory } from 'vue-router';
import RegisterSide from './components/RegisterSide.vue';

import './assets/main.css';

const app = createApp(App);

const router = createRouter({
    history: createWebHistory(),
    routes: [
        { path: '/register', component: RegisterSide },
    ],
});

app.use(router);

app.mount('#app');