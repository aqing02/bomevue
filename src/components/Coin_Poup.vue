<template>
  <div class="setting-popup">
    <div class="setting-popup-title">
      <div class="title-text">选择代币</div>
      <img :src="getImageUrl('index/close-icon.png')" @click.stop="close()" class="popup-close" />
    </div>
    <div class="setting-line"></div>
    <input placeholder="搜索名称或代币地址" type="text" class="search-input" />
    <div class="canuse-coin-box">
      <div class="canuse-coin-msg" v-for="p in coin_arr" :key="p.id">
        <img :src="getImageUrl(`index/${p.content}-icon.png`)" class="icon-img" />
        <div class="coin-name">{{ p.content.toUpperCase() }}</div>
      </div>
    </div>
    <div class="coin-list-arr">
      <div class="coin-list-msg" v-for="p in coin_list" :key="p.id">
        <div class="coin-list-left">
          <img :src="getImageUrl(`index/${p.content}-icon.png`)" class="icon-img" />
          <div class="coin-name">
            <div class="coin-name-text">{{ p.content.toUpperCase() }}</div>
            <div class="coin-name-tips">{{ p.content.toUpperCase() }}</div>
          </div>
        </div>
        <div class="delete-btn" v-if="p.id == 4">删除</div>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  data() {
    return {
      coin_arr: [
        { id: 1, content: 'usdt' },
        { id: 2, content: 'bnb' },
        { id: 3, content: 'eth' },
        { id: 5, content: 'bnb' },
        { id: 4, content: 'usdt' },
        { id: 6, content: 'eth' },
      ],
      coin_list: [
        { id: 1, content: 'usdt' },
        { id: 2, content: 'bnb' },
        { id: 3, content: 'eth' },
        { id: 4, content: 'bome' },
      ],
    };
  },
  methods: {
    close() {
      this.$emit('close', false);
    },
  },
};
</script>

<style lang="scss" scoped>
@import url('./poup.scss');
</style>
