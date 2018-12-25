// The Vue build version to load with the `import` command
// (runtime-only or standalone) has been set in webpack.base.conf with an alias.
import Vue from 'vue'
import App from './App'
import router from './router/index'
import iView from 'iview';
import numInput from './pub/components/numInput/numInput';
import 'iview/dist/styles/iview.css';
import './assets/css/reset.css';
Vue.use(numInput);
Vue.use(iView);

document.documentElement.style.fontSize = document.documentElement.clientWidth / 7.5 + 'px';
Vue.config.productionTip = false;

/* eslint-disable no-new */
new Vue({
  el: '#app',
  router,
  components: { App },
  template: '<App/>'
});
