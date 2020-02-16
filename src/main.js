// The Vue build version to load with the `import` command
// (runtime-only or standalone) has been set in webpack.base.conf with an alias.
import Vue from 'vue'
import App from './App'
import router from './router'
import vueResource from 'vue-resource'
import axios from 'axios'

Vue.config.productionTip = false;
Vue.use(vueResource);
Vue.prototype.$axios = axios;
// 自定义rainbow指令（也可在具体页面写）
// Vue.directive('rainbow', {
//   bind(el, binding, vnode) {
//     el.style.color = "#" + Math.random().toString(16).slice(2,8)
//   }
// });
// 自定义指令绑定值（传参主要用于判断）
Vue.directive('theme',{
  bind(el,binding,vnode) {
    if(binding.value == 'wide') {
      el.style.maxWidth = "100%"
    };
    // 自定义指令里面传参
    if(binding.arg == 'bg') {
      el.style.backgroundColor = '#17abe3'
    }
  }
});
// 自定义过滤器（也可在具体页面里写）
// Vue.filter('to-uppercase',(value) => {
//   return value.toUpperCase() // （将标题过滤为全大写）
// });
// 自定义过滤器
Vue.filter('snippet',(value) => {
  return value.slice(0,100) + '...'
})

/* eslint-disable no-new */
new Vue({
  el: '#app',
  router,
  components: { App },
  template: '<App/>'
})
