import Vue from 'vue'
import App from './App.vue'
import router from './router'
import store from './store'
import ElementUI from 'element-ui';
import './assets/css/comm.css';
import 'element-ui/lib/theme-chalk/index.css';
import jm from 'vue-jsmind';
import kityminder from 'vue-kityminder-gg'
import Antd from 'ant-design-vue';
import 'ant-design-vue/dist/antd.css';

Vue.use(kityminder)
Vue.use(jm)
Vue.use(ElementUI);
Vue.use(Antd);
import VueDraggableResizable from 'vue-draggable-resizable'

router.beforeEach((to, form, next) => {
  debugger
  //如果进入到的路由是登录页或者注册页面，则正常展示
  if (to.path == '/login' || to.path == '/register') {
    next();
  } else if (!(localStorage.getItem('token'))) {
    if (form.path == '/login') {
      to.meta.keepAlive = false
    } else {
      to.meta.keepAlive = true
    }
    //alert("还没有登录，请先登录！");
    //next('/login');     //转入login登录页面，登录成功后会将token存入localStorage
    next()
  } else {
    next();
  }
})

Vue.component('vue-draggable-resizable', VueDraggableResizable)
import * as echarts from 'echarts'
Vue.prototype.$echarts = echarts
import dataV from '@jiaminghi/data-view'
Vue.use(dataV)
if (window.jsMind) {
  console.log('wind')
  Vue.prototype.jsMind = window.jsMind
}
Vue.config.productionTip = false

new Vue({
  router,
  store,
  render: h => h(App)
}).$mount('#app')
