<!--
 * @Author: aqing 1134575174@qq.com
 * @Date: 2023-07-19 16:22:27
 * @LastEditors: aqing 1134575174@qq.com
 * @LastEditTime: 2023-07-24 18:25:59
 * @FilePath: \vue2_vite_ethers\src\components\WelcomeItem.vue
 * @Description: 这是默认设置,请设置`customMade`, 打开koroFileHeader查看配置 进行设置: https://github.com/OBKoro1/koro1FileHeader/wiki/%E9%85%8D%E7%BD%AE
-->
<template>
  <div class="item"></div>
</template>

<style scoped>
.item {
  display: flex;
  margin-top: 2rem;
}

.details {
  flex: 1;
  margin-left: 1rem;
}

i {
  display: flex;
  place-content: center;
  place-items: center;
  width: 32px;
  height: 32px;
  color: var(--color-text);
}

h3 {
  margin-bottom: 0.4rem;
  font-size: 1.2rem;
  font-weight: 500;
  color: var(--color-heading);
}

@media (min-width: 1024px) {
  .item {
    padding: 0.4rem 0 1rem calc(var(--section-gap) / 2);
    margin-top: 0;
  }

  i {
    position: absolute;
    top: calc(50% - 25px);
    left: -26px;
    width: 50px;
    height: 50px;
    background: var(--color-background);
    border: 1px solid var(--color-border);
    border-radius: 8px;
  }

  .item::before {
    position: absolute;
    bottom: calc(50% + 25px);
    left: 0;
    height: calc(50% - 25px);
    content: ' ';
    border-left: 1px solid var(--color-border);
  }

  .item::after {
    position: absolute;
    top: calc(50% + 25px);
    left: 0;
    height: calc(50% - 25px);
    content: ' ';
    border-left: 1px solid var(--color-border);
  }

  .item:first-of-type::before {
    display: none;
  }

  .item:last-of-type::after {
    display: none;
  }
}
</style>
