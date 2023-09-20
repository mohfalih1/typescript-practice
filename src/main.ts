/**
 * main.ts
 *
 * Bootstraps Vuetify and other plugins then mounts the App`
 */

// Components
import App from "./App.vue";

// Composables
import { createApp } from "vue";

// Plugins
import { registerPlugins } from "@/plugins";
import moshaToast from "mosha-vue-toastify";
import i18n from "@/i18n";

import "mosha-vue-toastify/dist/style.css";
import "@/assets/style.css";
const app = createApp(App);
app.use(moshaToast);
registerPlugins(app);
app.use(i18n);

app.provide("t", i18n.global.t);

app.mount("#app");
