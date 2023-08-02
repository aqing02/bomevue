<!--
 * @Author: aqing 1134575174@qq.com
 * @Date: 2023-07-19 16:22:27
 * @LastEditors: aqing 1134575174@qq.com
 * @LastEditTime: 2023-07-26 18:58:27
 * @FilePath: \vue2_vite_ethers\src\App.vue
 * @Description: 这是默认设置,请设置`customMade`, 打开koroFileHeader查看配置 进行设置: https://github.com/OBKoro1/koro1FileHeader/wiki/%E9%85%8D%E7%BD%AE
-->
<script>
export default {
  data() {
    return {};
  },
  created() {
    // if (!this.$store.state.user.address) {
    this.$ethers.getwallet_address();
    // }
    console.log(window.ethereum.isConnected());
  },
};
</script>

<template>
  <div id="app">
    <!-- <header>
      <img alt="Vue logo" class="logo" src="@/assets/logo.svg" width="125" height="125" />

      <div class="wrapper">
        <HelloWorld msg="You did it!" />

        <nav>
          <router-link to="/">Home</router-link>
          <router-link to="/about">About</router-link>
          <router-link to="/time">Time</router-link>
        </nav>
      </div>
    </header> -->

    <router-view />
  </div>
</template>

<style>
::-webkit-scrollbar-track {
  background: rgb(0 0 0 / 10%);
  border-radius: 0;
}

::-webkit-scrollbar {
  width: 6px;
  height: 6px;
  appearance: none;
}

::-webkit-scrollbar-thumb {
  cursor: pointer;
  background: rgb(0 0 0 / 15%);
  border-radius: 5px;
  transition: color 0.2s ease;
}

header {
  max-height: 100vh;
  line-height: 1.5;
}

.logo {
  display: block;
  margin: 0 auto 2rem;
}

nav {
  width: 100%;
  margin-top: 2rem;
  font-size: 12px;
  text-align: center;
}

nav a.router-link-exact-active {
  color: var(--color-text);
}

nav a.router-link-exact-active:hover {
  background-color: transparent;
}

nav a {
  display: inline-block;
  padding: 0 1rem;
  border-left: 1px solid var(--color-border);
}

nav a:first-of-type {
  border: 0;
}

@media (min-width: 1024px) {
  header {
    display: flex;
    place-items: center;
    padding-right: calc(var(--section-gap) / 2);
  }

  .logo {
    margin: 0 2rem 0 0;
  }

  header .wrapper {
    display: flex;
    flex-wrap: wrap;
    place-items: flex-start;
  }

  nav {
    padding: 1rem 0;
    margin-top: 1rem;
    margin-left: -1rem;
    font-size: 1rem;
    text-align: left;
  }
}
</style>
