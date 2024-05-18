<template>
  <div class="home-container">
    <Head></Head>
    <Popup :visible="setting_popup">
      <SetPoup @close="close"></SetPoup>
    </Popup>
    <Popup :visible="coin_popup">
      <Coin_Poup @close="closecoin"></Coin_Poup>
    </Popup>
    <Home @showcoin="showcoin" @showsetting="showsetting"></Home>
    <!-- <Footer></Footer> -->
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
    showcoin(e) {
      this.coin_popup = e;
    },
    showsetting(e) {
      this.setting_popup = e;
    },
  },
};
</script>
<style lang="scss" scoped>
@import url('../styles/home.scss');
</style>
