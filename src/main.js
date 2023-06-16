import { createApp } from 'vue';
import App from './App.vue';
import { createRouter, createWebHistory } from 'vue-router';
import Playlist from './views/PlaylistView.vue';
import Video from './views/VideoView.vue';

const router = createRouter({
    history: createWebHistory(),
    routes: [
        { path: '/', component: Playlist },
        { path: '/video/:id', component: Video },
    ],
});

const app = createApp(App);
app.use(router);
app.mount('#app');
