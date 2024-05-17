<template>
  <div class="lp-import-box">
    <div class="lp-import-title-box">
      <div class="title-left">
        <img @click.stop="toindex(1)" class="title-arrows" :src="getImageUrl('index/lp-arrows.png')" alt="" />
        <div class="title-content-box">
          <div class="title-text">BOME-USDTLP</div>
          <div class="title-tips">接收LP代币并赚取0.17%的交易费用</div>
        </div>
      </div>
      <div class="title-right">
        <img class="tool-icon" width="24" height="24" :src="getImageUrl('index/setting.svg')" />
        <img class="tool-icon" width="24" height="24" :src="getImageUrl('index/time.svg')" />
      </div>
    </div>
    <div class="exchange-box-block">
      <div class="exchange-title-box">
        <div class="coin-msg">
          <img class="tool-icon" width="24" height="24" :src="getImageUrl('index/bome-icon.png')" />
          <div class="coin-name">Bome</div>
          <img class="tool-icon" width="24" height="24" :src="getImageUrl('index/coin-arrows.png')" />
        </div>
        <div class="exchange-title-balance">余额: <span>0.00</span></div>
      </div>
      <div class="exchange-coin-msg">
        <div class="coin-input-box">
          <input type="text" class="coin-input active" v-model="exchange_num" />
        </div>
      </div>
    </div>
    <img :src="getImageUrl('index/lp-add.png')" class="lp-add-icon" />
    <div class="exchange-box-block">
      <div class="exchange-title-box">
        <div class="coin-msg">
          <img class="tool-icon" width="24" height="24" :src="getImageUrl('index/bnb-icon.png')" />
          <div class="coin-name">binance</div>
          <img class="tool-icon" width="24" height="24" :src="getImageUrl('index/coin-arrows.png')" />
        </div>
        <div class="exchange-title-balance">余额: <span>0.00</span></div>
      </div>
      <div class="exchange-coin-msg">
        <div class="coin-input-box">
          <input type="text" class="coin-input active" v-model="exchange_num" />
        </div>
      </div>
    </div>
    <div class="lp-price-box">
      <div class="lp-price-title">价格和流动性池份额</div>
      <div class="lp-line"></div>
      <div class="lp-price-msg">
        <div class="lp-price-content">
          <div class="lp-price-num">0.00</div>
          <div class="lp-price-text">BOME/BNB</div>
        </div>
        <div class="lp-price-content">
          <div class="lp-price-num">0.00</div>
          <div class="lp-price-text">BNB/BOME</div>
        </div>
        <div class="lp-price-content">
          <div class="lp-price-num">0.00</div>
          <div class="lp-price-text">流动性池中的份额</div>
        </div>
      </div>
    </div>
    <div class="lp-max-point">
      <div>滑点上限</div>
      <div class="point-num">0%</div>
    </div>
    <div class="lp-btn">立即兑换</div>
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
