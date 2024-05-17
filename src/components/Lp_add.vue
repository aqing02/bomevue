<template>
  <div class="lp-import-box">
    <div class="lp-import-title-box">
      <div class="title-left">
        <img @click.stop="toindex(1)" class="title-arrows" :src="getImageUrl('index/lp-arrows.png')" alt="" />
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
    <div class="lp-coin-box">
      <div class="coin-name-box">
        <img :src="getImageUrl('index/bome-icon.png')" class="coin-img" />
        <div class="coin-name">BOME</div>
      </div>
      <img :src="getImageUrl('index/coin-arrows.png')" class="coin-right" />
    </div>
    <img :src="getImageUrl('index/lp-add.png')" class="lp-add-icon" />
    <div class="lp-coin-box">
      <div class="coin-name-box">
        <img :src="getImageUrl('index/bnb-icon.png')" class="coin-img" />
        <div class="coin-name">BOME</div>
      </div>
      <img :src="getImageUrl('index/coin-arrows.png')" class="coin-right" />
    </div>
    <div class="lp-coin-add-box">
      <div class="add-tips-text">您在该流动池中还没有提供流动性</div>
      <div class="add-tips-btn">增加流动性</div>
    </div>
  </div>
</template>

<script>
export default {
  methods: {
    toindex(type) {
      this.$emit('toindex', type);
    },
  },
};
</script>

<style lang="scss" scoped>
@import url('../styles/lp.scss');
</style>
