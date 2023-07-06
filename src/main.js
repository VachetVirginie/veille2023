import { createApp } from "vue";
import App from "./App.vue";

import store from "./store";
import "./assets/index.css";
import { YoutubeVue3 } from "youtube-vue3";
import router from "./router/router";

// Vuetify
import "vuetify/styles";
import { createVuetify } from "vuetify";
import * as components from "vuetify/components";
import * as directives from "vuetify/directives";

const vuetify = createVuetify({
    components,
    directives,
});


const app = createApp(App);
app.use(router);
app.use(store);
app.use(vuetify);
app.component("YoutubeVue3", YoutubeVue3).mount("#app");

