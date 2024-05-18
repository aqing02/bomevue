<template>
  <div class="lp-container">
    <Head></Head>
    <Lp_home @toindex="toindex" v-if="index == 1"></Lp_home>
    <Lp_add @toindex="toindex" v-if="index == 2"></Lp_add>
    <Lp_change @toindex="toindex" v-if="index == 3"></Lp_change>
    <!-- <div class="lp-add-tips" v-if="index == 3">
      通过添加流动性，您将赚取该币对所有交易额的
      0.17%，与您在流动性池中的份额成正比。赚取的费用会添加到流动性池中，实时累积，可以通过解除流动性来领取。
    </div> -->
    <!-- <Footer></Footer> -->
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
