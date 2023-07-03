import Vue from "vue";
import App from "./App.vue";

Vue.directive("custom", {});

new Vue({
  el: "#app",
  render: h => h(App)
});
