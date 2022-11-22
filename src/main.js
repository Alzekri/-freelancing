import { createApp } from "vue";
import App from "./App.vue";
import router from "./router";
import store from "./store";
import "bootstrap";
import "bootstrap/dist/css/bootstrap.min.css";
import "normalize.css";
import { FontAwesomeIcon } from "@fortawesome/vue-fontawesome";
import { library } from "@fortawesome/fontawesome-svg-core";
import { far } from "@fortawesome/free-regular-svg-icons";
import { fas } from "@fortawesome/free-solid-svg-icons";
import { fab } from "@fortawesome/free-brands-svg-icons";
import BaseButton from "./components/UI/BaseButton.vue";

library.add(far, fas, fab);
createApp(App)
  .component("FIcons", FontAwesomeIcon)
  .component("base-button", BaseButton)
  .use(store)
  .use(router)
  .mount("#app");
