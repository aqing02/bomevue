<!--
 * @Author: aqing 1134575174@qq.com
 * @Date: 2023-07-19 16:22:27
 * @LastEditors: aqing 1134575174@qq.com
 * @LastEditTime: 2023-07-25 11:08:45
 * @FilePath: \vue2_vite_ethers\src\views\HomeView.vue
 * @Description: 这是默认设置,请设置`customMade`, 打开koroFileHeader查看配置 进行设置: https://github.com/OBKoro1/koro1FileHeader/wiki/%E9%85%8D%E7%BD%AE
-->
<template>
  <main>
    <van-button @click="showloading" type="primary">主要按钮</van-button>
  </main>
</template>

<script>
export default {
  data() {
    return {};
  },
  methods: {
    showloading() {
      // this.toast('点击成功');
      this.loading('');
      setTimeout(() => {
        this.clearloading();
      }, 3000);
    },
  },
};
</script>
