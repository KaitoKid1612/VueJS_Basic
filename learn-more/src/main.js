import Vue from "vue";
import App from "./App.vue";

Vue.filter("toUpperCase", function(value) {
  return value.toUpperCase();
});

// Vue.mixin({
//   created() {
//     console.log("Global mixins - Created Hook");
//   }
// });

new Vue({
  el: "#app",
  render: h => h(App)
});
