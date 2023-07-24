/*
 * @Author: aqing 1134575174@qq.com
 * @Date: 2023-07-19 16:22:27
 * @LastEditors: aqing 1134575174@qq.com
 * @LastEditTime: 2023-07-24 17:41:04
 * @FilePath: \vue2_vite_ethers\src\store\index.js
 * @Description: 这是默认设置,请设置`customMade`, 打开koroFileHeader查看配置 进行设置: https://github.com/OBKoro1/koro1FileHeader/wiki/%E9%85%8D%E7%BD%AE
 */
import Vue from 'vue';
import Vuex from 'vuex';
// 引入插件
import createPersistedState from 'vuex-persistedstate';
import user from './module/user.js';
Vue.use(Vuex);

const store = new Vuex.Store({
  modules: {
    user,
  },
  /* vuex数据持久化配置 */
  plugins: [
    createPersistedState({
      // 存储方式：localStorage、sessionStorage、cookies
      storage: window.sessionStorage,
      // 存储的 key 的key值
      key: 'storemsg',
      paths: ['user'],
    }),
  ],
});
// 重置store
export function resetStore() {
  store.replaceState(createStore(options).state);
}
export default store;
