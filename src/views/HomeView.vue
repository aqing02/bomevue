<template>
  <div class="home-container">
    <Head></Head>
    <div class="home-content-box">
      <div class="swap-head-ad">
        <div class="head-ad-title">欢迎来到BOME</div>
        <div class="head-ad-tips">你的世界从这里开始</div>
      </div>
      <div class="swap-content-box">
        <div class="swap-content-title-box">
          <div class="swap-content-title">兑换</div>
          <div class="swap-content-title-tool">
            <van-image class="tool-icon" width="24" height="24" :src="getImageUrl('index/setting.svg')"></van-image>
            <van-image class="tool-icon" width="24" height="24" :src="getImageUrl('index/time.svg')"></van-image>
            <van-image class="tool-icon" width="24" height="24" :src="getImageUrl('index/exchange.svg')"></van-image>
          </div>
        </div>
        <div class="swap-title-tips">即时交易代币</div>
        <div class="exchange-box-block">
          <div class="exchange-title-box">
            <div class="exchange-title-text">支付</div>
            <div class="exchange-title-balance">余额: <span>0.00</span></div>
          </div>
          <div class="exchange-coin-msg">
            <div class="coin-msg">
              <van-image width="24" height="24" :src="getImageUrl('index/bome-icon.png')"></van-image>
              <div class="coin-name">Bome</div>
              <van-image width="16" height="16" :src="getImageUrl('index/coin-arrows.png')"></van-image>
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
              <van-image width="24" height="24" :src="getImageUrl('index/bome-icon.png')"></van-image>
              <div class="coin-name">Bome</div>
              <van-image width="16" height="16" :src="getImageUrl('index/coin-arrows.png')"></van-image>
            </div>
            <div class="coin-input-box">
              <input type="text" readonly class="coin-input active" v-model="exchange_num" />
            </div>
          </div>
        </div>
        <div class="exchange-detail-box">
          <div class="exchange-detail-tocoin">1 USDT ≈ 0.03BNB</div>
          <div class="exchange-detail-gasfee">
            <van-image width="16" height="16" :src="getImageUrl('index/fee.png')"></van-image>
            <div class="fee-num">0.0003 BNB</div>
            <van-image width="16" height="16" :src="getImageUrl('index/coin-arrows.png')"></van-image>
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
    };
  },
  created() {},
  methods: {
    checktheme(type) {
      this.$store.commit('user/settheme', type);
      window.document.documentElement.setAttribute('class', this.$store.state.user.theme);
    },
  },
};
</script>
<style lang="scss" scoped>
.home-container {
  width: 100%;
  min-height: 100vh;
  background: #191919;
  display: flex;
  flex-direction: column;
  align-items: center;
  padding-bottom: 60px;
  .home-content-box {
    width: 90%;
    margin: 0 auto;
    margin-top: 10px;
    .swap-head-ad {
      width: 100%;
      height: 120px;
      background: url('../assets/index/index-ad.png') 100% no-repeat;
      background-size: 100% 100%;
      display: flex;
      flex-direction: column;
      justify-content: center;
      & > div {
        margin-left: 22px;
      }
      .head-ad-title {
        font-family: Alibaba;
        font-weight: 600;
        font-size: 18px;
        color: #ffce28;
      }
      .head-ad-tips {
        font-family: Alibaba;
        font-weight: 400;
        font-size: 12px;
        color: #ffffff;
        margin-top: 10px;
      }
    }
    .swap-content-box {
      width: 100%;
      border-radius: 0 0 12px 12px;
      background: var(--theme-tabbar);
      padding: 18px 0;
      & > div {
        width: 90%;
        margin: 0 auto;
      }
      .swap-content-title-box {
        display: flex;
        justify-content: space-between;
        align-items: center;
        .swap-content-title {
          font-family: Alibaba;
          font-weight: 500;
          font-size: 20px;
          color: #ffffff;
        }
        .swap-content-title-tool {
          display: flex;
          .tool-icon {
            margin-left: 10px;
          }
        }
      }
      .swap-title-tips {
        font-family: Alibaba;
        font-weight: 400;
        font-size: 12px;
        color: var(--theme-tabbar-text-disable);
        margin-top: 8px;
      }
      .exchange-box-block {
        padding: 16px 0;
        background: var(--theme-background);
        border-radius: 12px;
        margin-top: 16px;
        & > div {
          width: 90%;
          margin: 0 auto;
        }
        .exchange-title-box {
          display: flex;
          justify-content: space-between;
          align-items: center;
          font-family: Alibaba;
          font-weight: 400;
          font-size: 12px;
          color: var(--theme-tabbar-text-disable);
          .exchange-title-balance {
            & > span {
              font-weight: bold;
            }
          }
        }
        .exchange-coin-msg {
          padding: 22px 0;
          background: var(--theme-tabbar);
          border-radius: 12px;
          margin-top: 10px;
          display: flex;
          justify-content: space-between;
          align-items: center;
          .coin-msg {
            display: flex;
            align-items: center;
            margin-left: 11px;
            .coin-name {
              font-family: Alibaba;
              font-weight: bold;
              font-size: 14px;
              color: #ffffff;
              margin: 0 6px;
            }
          }
          .coin-input-box {
            display: flex;
            align-items: center;
            margin-right: 11px;

            .coin-input {
              width: 80%;
              border: none;
              background: transparent;
              outline: none;
              text-align: right;
              font-family: Alibaba;
              font-weight: 500;
              font-size: 18px;
              color: var(--theme-tabbar-text-disable);
              &.active {
                width: 100%;
              }
            }
            .max-btn {
              background: rgba(252, 213, 53, 0.1);
              border-radius: 8px;
              padding: 6px;
              font-family: Alibaba;
              font-weight: bold;
              font-size: 12px;
              color: var(--theme-button);
              margin-left: 5px;
            }
          }
        }
      }
      .swap-icon {
        display: flex;
        justify-content: center;
        margin: 16px auto;
      }
      .exchange-detail-box {
        width: calc(90% - 24px);
        padding: 16px 12px;
        display: flex;
        justify-content: space-between;
        align-items: center;
        background: var(--theme-background);
        border-radius: 12px;
        margin-top: 15px;
        .exchange-detail-tocoin {
          font-family: Alibaba;
          font-weight: 400;
          font-size: 12px;
          color: #ffffff;
        }
        .exchange-detail-gasfee {
          display: flex;
          align-items: center;
          .fee-num {
            font-family: Alibaba;
            font-weight: 400;
            font-size: 12px;
            color: #ffffff;
            margin: 0 5px;
          }
        }
      }
      .exchange-btn {
        margin-top: 10px;
        padding: 15px 0;
        text-align: center;
        background: var(--theme-button);
        border-radius: 12px;
        font-family: Alibaba;
        font-weight: 600;
        font-size: 16px;
        color: var(--theme-text);
      }
    }
  }
}
</style>
