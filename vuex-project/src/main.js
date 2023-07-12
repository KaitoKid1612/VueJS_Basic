import Vue from "vue";
import VueResource from "vue-resource";
import VueRoutes from "routes";
import { store } from "./store/store";
import App from "./App.vue";

Vue.use(VueRoutes);
Vue.use(VueResource);

new Vue({
  el: "#app",
  store,
  render: h => h(App)
});
