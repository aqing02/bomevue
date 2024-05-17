<template>
  <div class="home-container">
    <Head></Head>
    <Popup :visible="setting_popup">
      <SetPoup @close="close"></SetPoup>
    </Popup>
    <Popup :visible="coin_popup">
      <Coin_Poup @close="closecoin"></Coin_Poup>
    </Popup>
    <div class="home-content-box">
      <div class="swap-head-ad">
        <div class="head-ad-title">欢迎来到BOME</div>
        <div class="head-ad-tips">你的世界从这里开始</div>
      </div>
      <div class="swap-content-box">
        <div class="swap-content-title-box">
          <div class="swap-content-title">兑换</div>
          <div class="swap-content-title-tool">
            <img
              class="tool-icon"
              width="24"
              @click.stop="setting_popup = true"
              height="24"
              :src="getImageUrl('index/setting.svg')"
            />
            <img class="tool-icon" width="24" height="24" :src="getImageUrl('index/time.svg')" />
            <img class="tool-icon" width="24" height="24" :src="getImageUrl('index/exchange.svg')" />
          </div>
        </div>
        <div class="swap-title-tips">即时交易代币</div>
        <div class="exchange-box-block">
          <div class="exchange-title-box">
            <div class="exchange-title-text">支付</div>
            <div class="exchange-title-balance">余额: <span>0.00</span></div>
          </div>
          <div class="exchange-coin-msg">
            <div class="coin-msg" @click.stop="coin_popup = !coin_popup">
              <img class="tool-icon" width="24" height="24" :src="getImageUrl('index/bome-icon.png')" />
              <div class="coin-name">Bome</div>
              <img class="tool-icon" width="24" height="24" :src="getImageUrl('index/coin-arrows.png')" />
            </div>
            <div class="coin-input-box">
              <input type="text" class="coin-input" v-model="exchange_num" />
              <div class="max-btn">Max</div>
            </div>
          </div>
        </div>
        <div class="swap-icon">
          <van-image width="36" height="36" :src="getImageUrl('index/swap-icon.png')"></van-image>
        </div>
        <div class="exchange-box-block">
          <div class="exchange-title-box">
            <div class="exchange-title-text">接收</div>
            <div class="exchange-title-balance">余额: <span>0.00</span></div>
          </div>
          <div class="exchange-coin-msg">
            <div class="coin-msg">
              <img class="tool-icon" width="24" height="24" :src="getImageUrl('index/bome-icon.png')" />
              <div class="coin-name">Bome</div>
              <img class="tool-icon" width="24" height="24" :src="getImageUrl('index/coin-arrows.png')" />
            </div>
            <div class="coin-input-box">
              <input type="text" readonly class="coin-input active" v-model="exchange_num" />
            </div>
          </div>
        </div>
        <div class="exchange-detail-box">
          <div class="exchange-detail-gasfee">
            <div class="exchange-detail-tocoin">1 USDT ≈ 0.03BNB</div>
            <div class="exchange-detail-gasfee-num" @click.stop="swap_show = !swap_show">
              <van-image width="16" height="16" :src="getImageUrl('index/fee.png')"></van-image>
              <div class="fee-num">0.0003 BNB</div>
              <van-image width="16" height="16" :src="getImageUrl('index/coin-arrows.png')"></van-image>
            </div>
          </div>
          <div class="exchange-detail-msg" v-show="swap_show">
            <div class="exchange-msg-box">
              <div class="exchange-msg-text">路由</div>
              <div class="exchange-msg-content">V2</div>
            </div>
            <div class="exchange-msg-box">
              <div class="exchange-msg-text">预估网络费</div>
              <div class="exchange-msg-content">0.0003 BNB</div>
            </div>
            <div class="exchange-msg-box">
              <div class="exchange-msg-text">滑点</div>
              <div class="exchange-msg-content">0.5%</div>
            </div>
            <div class="exchange-msg-box">
              <div class="exchange-msg-text">税前最低收到</div>
              <div class="exchange-msg-content">0.5 USDT</div>
            </div>
            <div class="exchange-msg-box">
              <div class="exchange-msg-text">税率</div>
              <div class="exchange-msg-content">5%</div>
            </div>
            <div class="exchange-msg-box">
              <div class="exchange-msg-text">价格影响</div>
              <div class="exchange-msg-content">0.00%</div>
            </div>
          </div>
        </div>
        <div class="exchange-btn">立即兑换</div>
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
      exchange_num: 0,
      setting_popup: false,
      swap_show: false,
      coin_popup: false,
    };
  },
  created() {},
  methods: {
    checktheme(type) {
      this.$store.commit('user/settheme', type);
      window.document.documentElement.setAttribute('class', this.$store.state.user.theme);
    },
    close(e) {
      this.setting_popup = e;
    },
    closecoin(e) {
      this.coin_popup = e;
    },
  },
};
</script>
<style lang="scss" scoped>
@import url('../styles/home.scss');
</style>
