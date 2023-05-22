import Vue from 'vue';

import App from './App.vue';
import store from './store';
import router from './router';
import User from '@/api/user';
import '@/style/index.less';
import '@/assets/main.css';
Vue.prototype.$api = User;
new Vue({
  router,
  store,
  render: (h) => h(App),
}).$mount('#app');
