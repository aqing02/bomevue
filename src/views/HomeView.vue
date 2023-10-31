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
