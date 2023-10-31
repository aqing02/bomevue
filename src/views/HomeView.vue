<!--
 * @Author: aqing 1134575174@qq.com
 * @Date: 2023-07-19 16:22:27
 * @LastEditors: aqing 1134575174@qq.com
 * @LastEditTime: 2023-10-27 14:56:21
 * @FilePath: \vue2_vite_ethers\src\views\HomeView.vue
 * @Description: 这是默认设置,请设置`customMade`, 打开koroFileHeader查看配置 进行设置: https://github.com/OBKoro1/koro1FileHeader/wiki/%E9%85%8D%E7%BD%AE
-->
<template>
  <div class="home-container">
    <Head title="首页"></Head>
    <tabbar></tabbar>
  </div>
</template>

<script>
import CountDown from 'vue2-countdown';
export default {
  data() {
    return {};
  },
  components: {
    CountDown,
  },
  created() {},
  methods: {
    countDownS_cb: function (x) {
      console.log(x);
    },
    countDownE_cb: function (x) {
      console.log(x);
    },
    async showloading() {
      this.$router.push({
        name: 'admin',
      });
      // this.toast('点击成功');
      // this.loading('');
      // this.$ethers.connect_web();
      // const { chainId } = await this.$ethers.connect_web().getNetwork();
      // console.log(chainId);
      // setTimeout(() => {
      //   this.clearloading();
      // }, 3000);
    },
  },
};
</script>
<style lang="scss" scoped>
// @media screen and (min-width: 480px) {
//   .home-container {
//     padding-bottom: 0 !important;
//   }
// }
.home-container {
  width: 100%;
  min-height: 100vh;
  padding-bottom: 45px;
}
</style>
