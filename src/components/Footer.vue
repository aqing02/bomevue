<template>
  <div class="footer-container">
    <van-image width="54" height="22" :src="getImageUrl('index/foot-logo.png')"></van-image>
    <div class="footer-text">关于 / 服务 / 博客</div>
    <div class="footer-icon-box">
      <van-image class="footer-icon" width="24" height="24" :src="getImageUrl('index/tg.png')"></van-image>
      <van-image class="footer-icon" width="24" height="24" :src="getImageUrl('index/x.png')"></van-image>
      <van-image class="footer-icon" width="24" height="24" :src="getImageUrl('index/face.png')"></van-image>
      <van-image class="footer-icon" width="24" height="24" :src="getImageUrl('index/youtube.png')"></van-image>
    </div>
  </div>
</template>

<script>
export default {};
</script>

<style lang="scss" scoped>
.footer-container {
  display: flex;
  flex-direction: column;
  align-items: center;
  margin: 22px auto;
  .footer-text {
    font-family: Alibaba;
    font-weight: 400;
    font-size: 12px;
    color: var(--theme-tabbar-text-disable);
    margin: 24px auto;
  }
  .footer-icon-box {
    display: flex;
    .footer-icon {
      margin-right: 25px;
    }
  }
}
</style>
