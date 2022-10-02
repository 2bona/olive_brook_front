import Vue from 'vue'
import App from './App.vue'
import store from './store'
import router from './router'
import vuetify from './plugins/vuetify'
import axios from "axios";
import moment from "moment";

document.cookie = "cross-site-cookie=image; SameSite=None; Secure";
axios.defaults.headers.common["X-Requested-With"] = "XMLHttpRequest";
axios.defaults.headers.common["Access-Control-Allow-Origin"] = "*";
axios.defaults.headers.post["Content-Type"] =
  "application/x-www-form-urlencoded";
axios.defaults.headers.post["Accept"] = "application/json";
axios.defaults.headers.post["Credentials"] = true;
axios.defaults.baseURL = "https://olivebrookinternational.com/backend/api/";
Vue.use(axios);
Vue.filter("getDay", function(created) {
  return moment(created).format("ddd");
});
Vue.filter("filterDate", function(created) {
  return moment(created).format("Do MMM");
});
Vue.filter("desc", function(text) {
  if (text.length >= 106) {
    return text.slice(0, 100) + "...";
  } else {
    return text;
  }
});
Vue.config.productionTip = false

new Vue({
  store,
  router,
  vuetify,
  render: h => h(App)
}).$mount('#app')
