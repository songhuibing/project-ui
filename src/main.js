import Vue from 'vue'
import App from './App.vue'
import router from './router'
import store from './store'
import ElementUI from 'element-ui';
import './assets/css/comm.css';  
import 'element-ui/lib/theme-chalk/index.css';
import jm from 'vue-jsmind';
Vue.use(jm)
Vue.use(ElementUI);

import * as echarts from 'echarts'
Vue.prototype.$echarts = echarts
import dataV from '@jiaminghi/data-view'
Vue.use(dataV)
if(window.jsMind){
  console.log('wind')
  Vue.prototype.jsMind=window.jsMind
}
Vue.config.productionTip = false

new Vue({
  router,
  store,
  render: h => h(App)
}).$mount('#app')
