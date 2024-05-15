<template>
  <div class="eob-head-container">
    <van-image width="96" height="33" :src="getImageUrl('index/bome-logo.png')"></van-image>
    <div class="eob-head-right">
      <div class="eob-head-right"></div>
    </div>
  </div>
</template>

<script>
export default {
  name: 'Head',
  data() {
    return {};
  },
  props: {
    title: {
      type: String,
    },
  },
  methods: {},
};
</script>

<style scoped lang="scss">
.eob-head-container {
  width: 100%;
  display: flex;
  align-items: center;
}
</style>
