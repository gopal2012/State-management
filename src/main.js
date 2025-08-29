import { createApp } from "vue";
import App from "./App.vue";
import store from "./store/store.js";
import router from "./store/router.js";

createApp(App).use(store).use(router).mount("#app");
