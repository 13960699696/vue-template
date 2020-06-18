import Vue from "vue";
import VueRouter from "vue-router";
import login from './login';

//使用插件
Vue.use(VueRouter); //执行install方法
//var newRou = login.concat(base);
var newRou = login;
export default new VueRouter({
  mode: "hash", //history
  routes: newRou
});
