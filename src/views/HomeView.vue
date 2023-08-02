<!--
 * @Author: aqing 1134575174@qq.com
 * @Date: 2023-07-19 16:22:27
 * @LastEditors: aqing 1134575174@qq.com
 * @LastEditTime: 2023-07-27 17:55:55
 * @FilePath: \vue2_vite_ethers\src\views\HomeView.vue
 * @Description: 这是默认设置,请设置`customMade`, 打开koroFileHeader查看配置 进行设置: https://github.com/OBKoro1/koro1FileHeader/wiki/%E9%85%8D%E7%BD%AE
-->
<template>
  <main>
    <count-down
      class="timecss"
      v-on:start_callback="countDownS_cb(1)"
      v-on:end_callback="countDownE_cb(1)"
      :currentTime="1481450106"
      :startTime="1481450110"
      :endTime="1481450115"
      tipText="距离活动开始还有"
      tipTextEnd="距离活动结束还有"
      endText="已结束"
      :dayTxt="' 天 '"
      :hourTxt="' 时 '"
      :minutesTxt="' 分 '"
      :secondsTxt="' 秒 '"
    ></count-down>
    <van-button @click="showloading" type="primary">主要按钮</van-button>
    <div class="connect_wallet">连接钱包</div>
  </main>
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
.timecss {
  color: black;
  font-size: 18px;
  font-weight: 600;
}
.connect_wallet {
  width: 50px;
  padding: 5px 10px;
  background: antiquewhite;
}
</style>
