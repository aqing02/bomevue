<template>
  <div class="tabbar-container">
    <div class="tabbar-box" @click.stop="topage(p)" v-for="p in tabbar_arr" :key="p.id">
      <van-image
        width="24"
        height="24"
        :src="getImageUrl(`tabbar/${$route.name == p.url ? p.active : p.icon}.png`)"
      ></van-image>
      <div class="text" :class="{ active: p.id == tabbar_id }">{{ $t(`tabbar_text${p.id}`) }}</div>
    </div>
  </div>
</template>

<script>
export default {
  data() {
    return {
      tabbar_id: 1,
      tabbar_arr: [
        { id: 1, url: 'swap', icon: 'swap', active: 'swap-active' },
        { id: 2, url: 'lp', icon: 'lp', active: 'lp-active' },
        { id: 3, url: 'robt', icon: 'robt', active: '' },
      ],
    };
  },
  created() {
    console.log(this.$route.name);
  },
  methods: {
    topage(p) {
      console.log(p);
      this.$router.push({
        name: p.url,
      });
    },
  },
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
  padding: 8px 0;
  background: #000;
  position: fixed;
  bottom: 0;
  border-radius: 12px 12px 0px 0px;
  z-index: 99;
  display: flex;
  justify-content: space-around;
  align-items: center;
  .tabbar-box {
    display: flex;
    flex-direction: column;
    align-items: center;
    .text {
      font-family: Alibaba;
      font-weight: 400;
      font-size: 12px;
      color: var(--theme-tabbar-text-disable);
      &.active {
        color: var(--theme-tabbar-text-active);
      }
    }
  }
}
</style>
