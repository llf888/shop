import Vue from 'vue'
import App from './App.vue'
import router from './router'
import store from './store'
import axios from 'axios'
import ElementUI from "element-ui"
import 'element-ui/lib/theme-chalk/index.css'

import 'mint-ui/lib/style.css'

Vue.use(ElementUI)

Vue.config.productionTip = false
Vue.prototype.axios=axios 
axios.defaults.withCredentials=true;
import './lib/mui/css/mui.css'
import './lib/mui/css/icons-extra.css'

new Vue({
  router,
  store,
  render: h => h(App)
}).$mount('#app')
