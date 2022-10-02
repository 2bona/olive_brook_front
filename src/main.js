import Vue from 'vue'
import App from './App.vue'
import store from './store'
import router from './router'
import vuetify from './plugins/vuetify'
import axios from "axios";
import moment from "moment";

var token2= "eyJ0eXAiOiJKV1QiLCJhbGciOiJSUzI1NiJ9.eyJhdWQiOiIxMSIsImp0aSI6IjllMGJhMjYzOTEzMDJiYmUwZTc3Njc1N2RiMGMwM2MwMzFmNGY3NmUwMGIxNWE0MTQ1ZTlhNTVlYjM4NjIwZGZjZjYxYjA1ZjQ4YjBjMjNmIiwiaWF0IjoxNjY0NzA2MjMwLjI5MzIwOSwibmJmIjoxNjY0NzA2MjMwLjI5MzIxMSwiZXhwIjoxNjk2MjQyMjMwLjI4NzMwMiwic3ViIjoiMzEzNCIsInNjb3BlcyI6W119.wvs-Rv2dCXNMtTylglFWEt5ba8kqHRGKSvpAfuJosJdTC2rTUqyBdbU5_nNzXzZIvLN-5tiUqCO_No1sGqFoxfNYdF1TLO8b93bsNMSwi747Zgwwd5mQZsFXx1MA3LRvS9wXIWFozVIvGzekNHq8i8tY2i8XiBjfspcrTMuW91lXL7-MMYwl1Ou5AVQnV-IiQuKMn3wULQnZfCjo9ZncOUGw6PogHi6_muKklRPgIyMC9AZis9kAh9UrWA2Jq9ljupBeg11MvCgJdw5bYTLhFnASLTR6N7CRsp3YpEGM2cY3ZsV8VWqYkQPtpDO2X7qRIKXSLvhdi58OJSzoBeqyet1nn8PWRuOODUPbkPySFT3VJtUi7Ck_t6xGrKKo1Zd_kLaK75JQ75ij1SOodGPy7KcDuBjzbkhstbHdnP_c4_5XLiFrlW0A_hLI1YAhuFw4RWzoL0Qhf5eh6XkNx2-zMl7DmNDK_xZNax97s-u-dQwRzTW0v1k-1m5mCo8pS_t3r75vj39lTjvSRu9II244qPGSwbBvatU8WtarGPT9Our1ESg4Y3iVZMhviTrZDgnGalmU_avx3tNvslOd59X9bB1ImjZZi6vQTdwdn2r6Cyzch981RN1Vf-Mjieowcg2ixZPu22fXxwbofI5KyoQfl5hSAlHciw46-By3UznqODU"
document.cookie = "cross-site-cookie=image; SameSite=None; Secure";
Vue.config.productionTip = false
axios.defaults.headers.common["Authorization"] = "Bearer " + token2;

axios.defaults.headers.common["X-Requested-With"] = "XMLHttpRequest";
axios.defaults.headers.common["Access-Control-Allow-Origin"] = "*";
axios.defaults.headers.post["Content-Type"] = "application/x-www-form-urlencoded";
axios.defaults.headers.post["Accept"] = "application/json";
axios.defaults.headers.post["Credentials"] = true;
axios.defaults.baseURL = "https://olivebrookinternational.com/backend/api";
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

new Vue({
  store,
  router,
  vuetify,
  render: h => h(App)
}).$mount('#app')
