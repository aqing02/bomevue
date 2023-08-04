/*
 * @Author: aqing 1134575174@qq.com
 * @Date: 2023-08-04 10:07:38
 * @LastEditors: aqing 1134575174@qq.com
 * @LastEditTime: 2023-08-04 10:09:42
 * @FilePath: \vue2_vite_ethers\src\router\modules\demo.js
 * @Description: 这是默认设置,请设置`customMade`, 打开koroFileHeader查看配置 进行设置: https://github.com/OBKoro1/koro1FileHeader/wiki/%E9%85%8D%E7%BD%AE
 */
export default [
  {
    path: '/',
    name: 'home',
    component: () => import('@/views/HomeView.vue'),
  },
  {
    path: '/about',
    name: 'about',
    component: () => import('@/views/AboutView.vue'),
  },
];
