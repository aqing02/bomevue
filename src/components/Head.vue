<template>
  <div class="eob-head-container">
    <van-image width="96" height="33" :src="getImageUrl('index/bome-logo.png')"></van-image>
    <div class="eob-head-right">
      <div class="lang-choose-box" v-if="showlangPopover">
        <div class="lang-choose-title">选择语言</div>
        <div class="lang-choose-msg" @click.stop="chooselang(p)" v-for="p in lang_arr" :key="p.id">
          <van-image round width="24" height="24" :src="getImageUrl(`index/${p.lang}.png`)"></van-image>
          <div class="lang-text">{{ p.content }}</div>
        </div>
      </div>
      <van-image
        @click="showlangPopover = !showlangPopover"
        width="24"
        height="24"
        :src="getImageUrl('index/lang-icon.png')"
      ></van-image>
      <div class="lang-choose-box active" v-if="showNetworkgPopover">
        <div class="lang-choose-title">选择网络</div>
        <div class="lang-choose-msg" @click.stop="choosenetwork(p)" v-for="p in network_arr" :key="p.id">
          <van-image round width="24" height="24" :src="getImageUrl(`index/${p.network}-icon.png`)"></van-image>
          <div class="lang-text">{{ p.content }}</div>
        </div>
      </div>
      <div class="eob-head-network" @click.stop="showNetworkgPopover = !showNetworkgPopover">
        <van-image width="24" height="24" :src="getImageUrl('index/bnb-icon.png')"></van-image>
        <van-image
          width="24"
          class="arrows-icon"
          height="24"
          :src="getImageUrl('index/network-arrows.png')"
        ></van-image>
      </div>
      <div class="eob-wallet-box" @click.stop="connectwallet">
        {{ $store.state.user.address ? textOmit($store.state.user.address, 4, 4) : $t('wallet_text') }}
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: 'Head',
  data() {
    return {
      showlangPopover: false,
      showNetworkgPopover: false,
      lang_arr: [
        { id: 1, content: 'English', lang: 'en' },
        { id: 2, content: '简体中文', lang: 'zh' },
      ],
      network_arr: [
        { id: 1, content: 'Ethereum', network: 'eth' },
        { id: 2, content: 'BNB Smart Chain', network: 'bnb' },
        { id: 3, content: 'Bome', network: 'bome' },
      ],
    };
  },
  props: {
    title: {
      type: String,
    },
  },
  watch: {
    showlangPopover(val) {
      if (val) {
        this.showNetworkgPopover = false;
      }
    },
    showNetworkgPopover(val) {
      if (val) {
        this.showlangPopover = false;
      }
    },
  },
  methods: {
    chooselang(p) {
      this.$i18n.locale = p.lang;
      this.showlangPopover = false;
    },
    choosenetwork(p) {
      this.showNetworkgPopover = false;
    },
    connectwallet() {},
  },
};
</script>

<style scoped lang="scss">
.eob-head-container {
  width: calc(100% - 20px);
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding: 10px;
  display: flex;
  align-items: center;
  .eob-head-right {
    display: flex;
    align-items: center;
    position: relative;
    .lang-choose-box {
      position: absolute;
      z-index: 99;
      top: 40px;
      left: -60px;
      width: 120px;
      padding: 10px;
      background: #2c2c2c;
      border-radius: 8px;
      border: 1px solid #979797;
      &.active {
        width: 160px;
        top: 40px;
        left: 0px;
      }
      & > div {
        width: 90%;
        margin: 0 auto;
      }
      .lang-choose-title {
        font-family: Alibaba;
        font-weight: 500;
        font-size: 12px;
        color: #8c8c8c;
        &::after {
          content: '';
          display: block;
          width: 100%;
          height: 1px;
          background: linear-gradient(
            90deg,
            rgba(238, 238, 238, 0) 0%,
            rgba(234, 234, 234, 0.1) 19%,
            rgba(220, 220, 220, 0.2) 80%,
            rgba(216, 216, 216, 0) 100%
          );
          margin-top: 8px;
        }
      }
      .lang-choose-msg {
        display: flex;
        align-items: center;
        margin-top: 15px;
        .lang-text {
          font-family: Alibaba;
          font-weight: 500;
          font-size: 12px;
          color: #ffffff;
          margin-left: 8px;
        }
      }
    }
    .eob-head-network {
      display: flex;
      align-items: center;
      padding: 4px 8px;
      background: #2c2c2c;
      border-radius: 8px;
      margin-left: 8px;
      .arrows-icon {
        margin-left: 5px;
      }
    }
    .eob-wallet-box {
      padding: 7px 12px;
      background: var(--theme-button);
      border-radius: 8px;
      font-family: Alibaba;
      font-weight: 600;
      font-size: 14px;
      color: var(--theme-text);
      margin-left: 5px;
    }
  }
}
</style>
