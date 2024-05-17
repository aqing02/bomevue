<template>
  <div class="lp-container">
    <Head></Head>
    <div class="lp-content-box">
      <div class="lp-content-title-box">
        <div class="lp-content-title">您的流动性</div>
        <div class="lp-content-tool">
          <img
            class="tool-icon"
            width="24"
            @click.stop="setting_popup = true"
            height="24"
            :src="getImageUrl('index/setting.svg')"
          />
          <img class="tool-icon" width="24" height="24" :src="getImageUrl('index/time.svg')" />
        </div>
      </div>
      <div class="lp-content-tips">移除流动性以收回代币</div>
      <div class="lp-content-change">
        <div>{{ $store.state.user.address ? '找不到流动性' : '连接钱包以查看您的流动性。' }}</div>
        <div class="lp-content-add" v-if="$store.state.user.address">
          <div>未看到您加入的流动性池</div>
          <div class="add-btn">查找其他LP代币</div>
        </div>
      </div>
      <div class="add-lp-btn">增加流动性</div>
    </div>
    <Footer></Footer>
    <tabbar></tabbar>
  </div>
</template>

<script>
export default {};
</script>
<style lang="scss" scoped>
@import url('../styles/lp.scss');
</style>
