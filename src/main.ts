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
import "mosha-vue-toastify/dist/style.css";
const app = createApp(App);
app.use(moshaToast);
registerPlugins(app);

app.mount("#app");
