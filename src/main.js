import { createApp } from "vue";
import App from "./App.vue";

import store from "./store";
import "./assets/index.css";
import { YoutubeVue3 } from "youtube-vue3";
import router from "./router/router";

const app = createApp(App);
app.use(router);
app.use(store);
app.component("YoutubeVue3", YoutubeVue3).mount("#app");

