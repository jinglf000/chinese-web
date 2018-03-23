// The Vue build version to load with the `import` command
// (runtime-only or standalone) has been set in webpack.base.conf with an alias.
import 'babel-polyfill';
import '@/common/scss/index.scss';
// import VConsole from 'vconsole';
import fastclick from 'fastclick';
import Vue from 'vue';
import App from './App';
import router from './router';

Vue.config.productionTip = false;

if (process.env.NODE_ENV === 'development') {
  /* eslint-disable no-new */
  // new VConsole();
}

fastclick.attach(document.body);

/* eslint-disable no-new */
new Vue({
  el: '#app',
  router,
  components: { App },
  template: '<App/>'
});
