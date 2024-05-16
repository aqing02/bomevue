<template>
  <div class="home-container">
    <Head></Head>
  </div>
</template>

<script>
export default {
  data() {
    return {};
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
}
</style>
