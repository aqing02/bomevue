<!--
 * @Author: aqing 1134575174@qq.com
 * @Date: 2023-07-19 16:22:27
 * @LastEditors: aqing 1134575174@qq.com
 * @LastEditTime: 2023-07-24 18:28:27
 * @FilePath: \vue2_vite_ethers\src\views\AboutView.vue
 * @Description: 这是默认设置,请设置`customMade`, 打开koroFileHeader查看配置 进行设置: https://github.com/OBKoro1/koro1FileHeader/wiki/%E9%85%8D%E7%BD%AE
-->
<template>
  <div class="about">
    <h1>This is an about page</h1>
  </div>
</template>

<script>
import User from '@/api/user';

export default {
  data() {
    return {
      username: '',
      password: '',
    };
  },
  computed: {},
  created() {
    this.config();
    console.log(' import.meta.env.MODE: ', import.meta.env.MODE);
    console.log(' import.meta.env.BASE_URL: ', import.meta.env.VITE_BASE_URL);
    console.log(' import.meta.env.PROD: ', import.meta.env.PROD);
    console.log(' import.meta.env.DEV: ', import.meta.env.DEV);
    console.log(' import.meta.env.SSR: ', import.meta.env.SSR);
    this.$ethers.getwallet_address();
  },
  methods: {
    async login() {
      const res = await User.login(this.username, this.password);
      console.log(res);
    },
    async config() {
      const result = await this.$api.getconfig();
      console.log(result);
    },
  },
};
</script>

<style lang="less">
@media (min-width: 1024px) {
  .about {
    display: flex;
    align-items: center;
    min-height: 100vh;

    h1 {
      color: red;
    }
  }
}
</style>
