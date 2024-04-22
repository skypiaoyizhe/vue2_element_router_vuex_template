import Vue from 'vue'
import App from './App.vue'
import router from './router'
import store from './store'

import ElementUI from 'element-ui';
import 'element-ui/lib/theme-chalk/index.css';

import request,{get,post} from '@/util/request.js'
Vue.prototype.$request = request
Vue.prototype.$get = get
Vue.prototype.$post = post

Vue.use(ElementUI);

Vue.config.productionTip = false



new Vue({
  router,
  store,
  render: h => h(App)
}).$mount('#app')
