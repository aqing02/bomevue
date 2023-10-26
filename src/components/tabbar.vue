<template>
  <div class="tabbar-container">
    <div class="tabbar-box" v-for="p in tabbarmenu" :key="p.id">
      <van-image :src="getImageUrl(p.icon)"></van-image>
      <div class="text" :class="{ active: p.id == tabbar_id }">{{ p.content }}</div>
    </div>
  </div>
</template>

<script>
export default {
  data() {
    return {
      tabbar_id: 1,
    };
  },
  computed: {
    tabbarmenu() {
      return [
        {
          id: 1,
          content: '基金',
          icon: 'rank.svg',
          active_icon: '',
        },
        {
          id: 2,
          content: '基金',
          icon: 'send.svg',
          active_icon: '',
        },
        {
          id: 3,
          content: '基金',
          icon: 'home.svg',
          active_icon: '',
        },
        {
          id: 4,
          content: '我的',
          icon: 'my.svg',
          active_icon: '',
        },
      ];
    },
  },
  methods: {},
};
</script>

<style lang="scss" scoped>
@media screen and (min-width: 480px) {
  .tabbar-container {
    width: 375px !important;
    margin: 0 auto;
  }
}
.tabbar-container {
  width: 100%;
  height: 50px;
  background: #000;
  position: fixed;
  bottom: 0;
  // z-index: 999;
  display: flex;
  justify-content: space-around;
  align-items: center;
  .tabbar-box {
    display: flex;
    flex-direction: column;
    align-items: center;
    .text {
      font-size: 12px;
      font-family: PingFangSC-Medium, PingFang SC;
      font-weight: 500;
      color: #80869d;
      &.active {
        color: #ff4902;
      }
    }
  }
}
</style>
