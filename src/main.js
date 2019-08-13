// The Vue build version to load with the `import` command
// (runtime-only or standalone) has been set in webpack.base.conf with an alias.
import Vue from 'vue';
import BootstrapVue from 'bootstrap-vue';
import 'bootstrap/dist/css/bootstrap.css';
import 'bootstrap-vue/dist/bootstrap-vue.css';
import 'vue-awesome/icons/flag';
import 'vue-awesome/icons';
import Icon from 'vue-awesome/components/Icon';
import App from './App';
import store from './store';
import router from './router';

Vue.use(BootstrapVue);
Vue.component('v-icon', Icon);
Vue.config.productionTip = false;

/* eslint-disable no-new */
new Vue({
  el: '#app',
  store,
  router,
  components: { App },
  template: '<App/>',
});
