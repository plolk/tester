import Vue from "https://cdnjs.cloudflare.com/ajax/libs/vue/2.5.22/vue.js";
import App from "./App.vue";

Vue.config.productionTip = false;

new Vue({
  render: h => h(App)
}).$mount("#app");
