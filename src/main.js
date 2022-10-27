import Vue from 'vue'
import App from './App.vue'
import ElementUI from 'element-ui'
import Router from "vue-router"
import 'element-ui/lib/theme-chalk/index.css'
import { routes } from "./router";
import vuex from "vuex"
import axios from "axios";
Vue.prototype.$http = axios
Vue.config.productionTip = false
axios.defaults.withCredentials = true;// 允许跨域携带cookie
axios.crossDomain=true,
Vue.use(ElementUI)
Vue.use(Router)
Vue.use(vuex)
Vue.prototype.$axios = axios
Vue.config.productionTip = false
const router=new Router({
  routes,
  mode:"history"
})
Vue.use(routes)
new Vue({
  router,
  render: h => h(App),
}).$mount('#app')
