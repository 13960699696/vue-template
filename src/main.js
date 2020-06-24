import Vue from 'vue';
import App from './App.vue';
import router from './router';
import store from './store';
//引入api和axio
import axios from 'common/axios';
import api from 'common/api';
import moment from 'moment'//导入文件 
Vue.prototype.$moment = moment;
Vue.prototype.$axios = axios;
Vue.prototype.$api = api;
//导入全局样式文件
import 'styles/reset.less';
//引入饿了么ui
import ElementUI from 'element-ui';
import 'element-ui/lib/theme-chalk/index.css';
Vue.use(ElementUI);
//使用cookier
import VueCookies from 'vue-cookies'
Vue.use(VueCookies)
//定义指令
import './directive';
// 权限拦截
import './permission';

Vue.config.productionTip = false

new Vue({
  router,
  store,
  render: h => h(App)
}).$mount('#app')
