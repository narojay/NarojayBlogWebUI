import Vue from 'vue'
import App from './App.vue'
import router from './router'
import axios from './httpConfig/http.js'
import moment from 'moment'
import ElementUI from 'element-ui'
import 'element-ui/lib/theme-chalk/index.css';
import Router from 'vue-router'
Vue.config.productionTip = false
Vue.prototype.$http =axios
Vue.prototype.$moment = moment;
Vue.use(ElementUI);
Vue.use(Router);
new Vue({
  render: h => h(App),
  router
}).$mount('#app')
