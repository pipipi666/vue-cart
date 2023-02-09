import Vue from "vue";
import VueAwesomeSwiper from "vue-awesome-swiper";
import App from "./App.vue";
import store from "./store";
import "swiper/css/swiper.min.css";

Vue.config.productionTip = false;
Vue.use(VueAwesomeSwiper);

new Vue({
  store,
  render: (h) => h(App),
}).$mount("#app");
