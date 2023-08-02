<!--
 * @Author: aqing 1134575174@qq.com
 * @Date: 2023-07-25 17:56:17
 * @LastEditors: aqing 1134575174@qq.com
 * @LastEditTime: 2023-07-25 18:01:03
 * @FilePath: \vue2_vite_ethers\src\views\timeout.vue
 * @Description: 这是默认设置,请设置`customMade`, 打开koroFileHeader查看配置 进行设置: https://github.com/OBKoro1/koro1FileHeader/wiki/%E9%85%8D%E7%BD%AE
-->
<template>
  <div>
    <timedonw :time="countDownTime" v-slot="timeObj">
      <div class="count-down">
        <div class="icon"></div>
        {{ timeObj.d }}天{{ timeObj.hh }}小时{{ timeObj.mm }}分钟{{ timeObj.ss }}秒
      </div>
    </timedonw>
  </div>
</template>

<script>
import timedonw from '@/components/timedown.vue';
export default {
  data() {
    return {
      countDownTime: 2 * 24 * 60 * 60,
    };
  },
  components: {
    timedonw,
  },
  methods: {},
};
</script>

<style lang="scss" scoped>
#app {
  color: black;
  font-size: 18px;
  font-weight: 600;
}
</style>
