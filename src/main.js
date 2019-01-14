import Vue from 'vue'
import App from './App.vue'
import router from "./router";
import vuex from "vuex";
import store from "./store";
import axios from "axios";
import md5 from "md5";
import qs from "qs";
import ElementUI from "element-ui";
import 'element-ui/lib/theme-chalk/index.css';

Vue.config.productionTip = false;
Vue.use(ElementUI);
Vue.use(vuex);

Vue.prototype.$axios = axios;
Vue.prototype.$qs = qs;
Vue.prototype.$md5 = md5;

new Vue({
  router,
  store,
  render: h => h(App),
}).$mount('#app');