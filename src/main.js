import "./assets/css/main.css";

import { createApp } from "vue";
import { createPinia } from "pinia";
import { createI18n } from "vue-i18n";
import { createHead } from "@unhead/vue/client";
import piniaPluginPersistedstate from "pinia-plugin-persistedstate";
import App from "./App.vue";
import router from "./router";
import en from "@/locales/en.json";
import ar from "@/locales/ar.json";

const messages = {
  en,
  ar,
};
const storedLocale = localStorage.getItem("preferredLanguage");

const browserLocale = navigator.language.split("-")[0];

const defaultLocale = storedLocale || browserLocale || "en";

const i18n = createI18n({
  legacy: false,
  globalInjection: true,
  locale: defaultLocale,
  fallbackLocale: "en",
  messages,
});

const app = createApp(App);
const pinia = createPinia();
const head = createHead();
pinia.use(piniaPluginPersistedstate);
app.use(head);
app.use(pinia);
app.use(router);
app.use(i18n);

app.mount("#app");
