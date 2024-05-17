<template>
  <div class="lp-container">
    <Head></Head>
    <!-- <Lp_home @toindex="toindex" v-if="index == 1"></Lp_home> -->
    <div class="lp-import-box">
      <div class="lp-import-title-box">
        <div class="title-left">
          <img @click.stop="" class="title-arrows" :src="getImageUrl('index/lp-arrows.png')" alt="" />
          <div class="title-content-box">
            <div class="title-text">导入流动性池</div>
            <div class="title-tips">接收LP代币并赚取0.17%的交易费用</div>
          </div>
        </div>
        <div class="title-right">
          <img class="tool-icon" width="24" height="24" :src="getImageUrl('index/setting.svg')" />
          <img class="tool-icon" width="24" height="24" :src="getImageUrl('index/time.svg')" />
        </div>
      </div>
    </div>
    <Footer></Footer>
    <tabbar></tabbar>
  </div>
</template>

<script>
export default {
  data() {
    return {
      index: 1,
    };
  },
  methods: {
    toindex(type) {
      this.index = type;
    },
  },
};
</script>
<style lang="scss" scoped>
@import url('../styles/lp.scss');
</style>
