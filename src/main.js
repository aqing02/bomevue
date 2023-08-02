/*
 * @Author: aqing 1134575174@qq.com
 * @Date: 2023-07-19 16:22:27
 * @LastEditors: aqing 1134575174@qq.com
 * @LastEditTime: 2023-07-27 17:53:54
 * @FilePath: \vue2_vite_ethers\src\main.js
 * @Description: 这是默认设置,请设置`customMade`, 打开koroFileHeader查看配置 进行设置: https://github.com/OBKoro1/koro1FileHeader/wiki/%E9%85%8D%E7%BD%AE
 */
import Vue from 'vue';

import App from './App.vue';
import store from './store/index';
import router from './router';
import User from '@/api/user';
import Mixin from './mixins/index';
import ethers from '@/utils/ethers_func';
import ElementUI from 'element-ui';
import 'element-ui/lib/theme-chalk/index.css';
import Vant from 'vant';
import 'vant/lib/index.css';
import 'lib-flexible/flexible';
console.log(window.ethereum);
console.log(ethereum);
if (window.ethereum) {
  ethereum.on('disconnect', async (e) => {
    //一旦切换账号这里就会执行
    console.log('切换账号---->>', e);
  });
  ethereum.on('connect', async (e) => {
    //一旦切换账号这里就会执行
    console.log('切换账号1---->>', e);
  });
  ethereum.on('accountsChanged', async (accounts) => {
    //一旦切换账号这里就会执行
    console.log('切换账号22---->>', accounts);
    store.commit('user/setconnect_address', accounts);
  });
}

Vue.prototype.$api = User;
Vue.prototype.$store = store;
Vue.prototype.$ethers = ethers;
Vue.mixin(Mixin);
Vue.use(Vant);
Vue.use(ElementUI);
new Vue({
  router,
  store,
  render: (h) => h(App),
}).$mount('#app');
