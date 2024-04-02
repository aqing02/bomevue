<script>
import tp from 'tp-js-sdk';
// import translate from 'i18n-jsautotranslate';
export default {
  data() {
    return {
      transitionName: 'fade',
    };
  },
  mounted() {},
  methods: {},
  async created() {
    if (tp.isConnected()) {
      const { data } = await tp.getCurrentWallet();
      if (
        this.$store.state.user.loginaddress &&
        data.address.toLowerCase() !== this.$store.state.user.loginaddress.toLowerCase()
      ) {
        this.$store.commit('user/removemsg');
        this.$router.replace({ name: 'index' });
      }
    }
    if (window.ethereum) {
      this.$ethers.getwallet_address();
      ethereum.on('accountsChanged', async (accounts) => {
        console.log('removemsg', accounts[0]);
        this.$store.commit('user/setaddress', accounts[0]);
        this.$store.commit('user/removemsg');
        this.$router.replace({ name: 'index' });
        window.location.reload();
      });
      ethereum.on('networkChanged', (networkIDstring) => {
        //一旦切换网络这里就会执行
        console.log(networkIDstring);
        this.$ethers.getwallet_address();
        window.location.reload();
      });
    } else {
      this.$notify.error('未检测到Web3环境');
    }
    console.log(window.ethereum.isConnected());
  },
};
</script>

<template>
  <div id="app">
    <!-- <transition :name="transitionName" mode="out-in"> -->
    <router-view></router-view>
    <!-- </transition> -->
  </div>
</template>

<style>
body,
html {
  overflow-x: auto;
}

@font-face {
  font-family: AnekBangla;
  src: url('./assets/fonts/AnekBangla.ttf');
}

::-webkit-scrollbar-track {
  background: rgb(0 0 0 / 10%);
  border-radius: 0;
}

::-webkit-scrollbar {
  width: 6px;
  height: 6px;
  appearance: none;
}

::-webkit-scrollbar-thumb {
  cursor: pointer;
  background: rgb(0 0 0 / 15%);
  border-radius: 5px;
  transition: color 0.2s ease;
}

.fade-enter-active,
.fade-leave-active {
  transition: opacity 0.2s ease-in;
}

.fade-enter-from,
.fade-leave-to {
  opacity: 0;
}
</style>
