import { createApp } from "vue";
import {
    createRouter, createWebHistory
} from "vue-router";

import App from "./App.vue";
import Playlist from "./views/PlaylistView.vue";
import Video from "./views/VideoView.vue";
import ListOfPlaylists from "./views/ListOfPlaylist.vue";

import store from "./store";
import "./assets/index.css";
import { YoutubeVue3 } from "youtube-vue3";

const routes = [{
    path: "/", component: ListOfPlaylists
},
                {
                    path: "/playlist/:id", component: Playlist
                },
                {
                    path: "/video/:id", component: Video
                },];

const router = createRouter({
    history: createWebHistory(),
    routes,
});


const app = createApp(App);
app.use(router);
app.use(store);
app.component("YoutubeVue3", YoutubeVue3).mount("#app");

