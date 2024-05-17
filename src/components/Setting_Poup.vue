<template>
  <div class="setting-popup">
    <div class="setting-popup-title">
      <div class="title-text">设置</div>
      <img :src="getImageUrl('index/close-icon.png')" @click.stop="close()" class="popup-close" />
    </div>
    <div class="setting-line"></div>
    <div class="swap-title">兑换和流动性</div>
    <div class="swap-point-title">滑点上限</div>
    <div class="swap-point-box">
      <div class="point-box-text choose">0.1%</div>
      <div class="point-box-text">0.5%</div>
      <div class="point-box-text">1%</div>
      <div class="point-box-text active">
        <input type="text" placeholder="请输入" class="point-input" />
        <div>%</div>
      </div>
    </div>
    <div class="transfer-finish-time">
      <div>交易截止时间(分钟)</div>
      <input type="text" class="time-text" placeholder="请输入" />
    </div>
    <div class="transfer-finish-time">
      <div>专家模式</div>
      <input type="checkbox" class="time-check" placeholder="请输入" />
    </div>
    <div class="transfer-finish-time">
      <div>极速模式</div>
      <input type="checkbox" class="time-check" placeholder="请输入" />
    </div>
    <!-- <div class="transfer-finish-time">
      <div>主题颜色</div>
      <input type="checkbox" class="time-check" placeholder="请输入" />
    </div> -->
  </div>
</template>

<script>
export default {
  methods: {
    close() {
      this.$emit('close', false);
    },
  },
};
</script>

<style lang="scss">
@import url('./poup.scss');
</style>
