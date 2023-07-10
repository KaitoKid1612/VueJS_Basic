import Vue from "vue";
import VueResource from "vue-resource";
import App from "./App.vue";

//use vue-resource package
Vue.use(VueResource);
Vue.http.options.root =
  "https://vuejs-server-97056-default-rtdb.asia-southeast1.firebasedatabase.app";

// Vue.http.interceptors.push((request, next) => {
//   console.log(request);
//   if (request.method == "POST") request.method = "PUT";
//   next(Response => {
//     Response.json = () => {
//       return {
//         message: Response.body
//       };
//     };
//   });
// });

new Vue({
  el: "#app",
  render: h => h(App)
});
