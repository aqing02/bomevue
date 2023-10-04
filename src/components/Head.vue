<template>
  <div class="eob-head">
    <div
      class="eob-menu-icon-back"
      v-if="iconstatus == 1 || iconstatus == 6 || iconstatus == 5"
      @tap.stop="toback"
    ></div>
    <div class="eob-head-title" v-if="!searchstatus">
      {{ title }}
    </div>
    <div class="seach-icon" v-if="iconstatus == 4 || iconstatus == 6" @tap.stop="searchshop"></div>
    <div class="eob-head-title-right" v-if="iconstatus == 5" @tap.stop="goUrl(righturl)">
      {{ righttitle }}
    </div>
    <div class="eob-head-title-right-box" v-if="iconstatus == 9" @tap.stop="Revoke">
      {{ cancelorder_text }}
    </div>
  </div>
</template>

<script>
export default {
  name: 'Head',
  data() {
    return {
      searchstatus: false,
      seachtext: '',
    };
  },
  props: {
    title: {
      type: String,
    },
    iconstatus: {
      type: Number,
      default: 1,
    },
    righttitle: {
      type: String,
    },
    righturl: {
      type: String,
    },
  },
  methods: {
    searchshop() {
      this.$emit('seachshow');
    },
    Revoke() {
      this.$emit('Revoke');
    },
  },
};
</script>

<style scoped lang="scss">
.eob-head {
  width: 100%;
  height: 44px;
  background: #000;
  display: flex;
  align-items: center;
  justify-content: space-around;
  position: relative;

  .eob-menu-icon-text {
    font-size: 18px;
    font-family: PingFang SC-Medium, PingFang SC;
    font-weight: 500;
    color: #000000;
    margin-left: 13px;
  }

  .eob-menu-icon-ering {
    position: absolute;
    right: 16px;
    font-size: 18px;
    font-family: PingFang SC-Medium, PingFang SC;
    font-weight: 500;
    color: #f9b755;
    // margin-right: 16px;
  }

  .head-search {
    flex: 0.6;
    margin: 0 auto;
  }

  .seach-icon {
    position: absolute;
    right: 30px;
    width: 48px;
    height: 48px;
    // background: url('@/static/public/search.png') 100% no-repeat;
    // background-size: 100% 100%;
  }

  .eob-head-title-right {
    position: absolute;
    font-size: 18px;
    font-family: PingFangSC-Regular, PingFang SC;
    font-weight: 400;
    color: #ffffff;
    right: 30px;
  }

  .eob-head-title-right-box {
    position: absolute;
    padding: 10px 25px;
    background: #ff5151;
    border-radius: 8px;

    font-size: 18px;
    font-family: PingFangSC-Semibold, PingFang SC;
    font-weight: 600;
    color: #ffffff;
    right: 30px;
  }

  // .eob-menu-icon {
  // 	width: 48px;
  // 	height: 41px;
  // 	background: url('/static/index/menu.png') 100% no-repeat;
  // 	background-size: 100% 100%;
  // 	margin-left: 34px;
  // }

  .eob-menu-icon-back {
    position: absolute;
    left: 34px;
    width: 48px;
    height: 48px;
    // background: url('/static/public/toback.png') 100% no-repeat;
    // background-size: 100% 100%;
    // margin-left: 34px;
  }

  .eob-menu-icon-back-white {
    width: 48px;
    height: 48px;
    // background: url('/static/public/toback.png') 100% no-repeat;
    // background-size: 100% 100%;
    margin-left: 34px;
  }

  .eob-menu-icon-back-no {
    width: 48px;
    height: 48px;
    margin-left: 34px;
  }

  .eob-menu-icon-logo {
    width: 48px;
    height: 48px;
    // background: url('/static/public/toback.png') 100% no-repeat;
    // background-size: 100% 100%;
    margin-left: 40px;
  }

  .eob-menu-icon-setting {
    width: 48px;
    height: 48px;
    // background: url('/static/public/toback.png') 100% no-repeat;
    // background-size: 100% 100%;
    margin-right: 40px;
  }

  .eob-head-title {
    flex: 1;
    text-align: center;
    font-size: 18px;
    font-family: PingFangSC-Semibold, PingFang SC;
    font-weight: 600;
    color: #ffffff;
  }
}
</style>
