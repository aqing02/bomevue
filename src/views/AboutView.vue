<template>
  <div class="about">
    <h1>This is an about page</h1>
  </div>
</template>

<script>
import User from '@/api/user';

export default {
  data() {
    return {
      username: '',
      password: '',
    };
  },
  computed: {},
  created() {
    this.config();
    console.log(' import.meta.env.MODE: ', import.meta.env.MODE);
    console.log(' import.meta.env.BASE_URL: ', import.meta.env.VITE_BASE_URL);
    console.log(' import.meta.env.PROD: ', import.meta.env.PROD);
    console.log(' import.meta.env.DEV: ', import.meta.env.DEV);
    console.log(' import.meta.env.SSR: ', import.meta.env.SSR);
  },
  methods: {
    async login() {
      const res = await User.login(this.username, this.password);
      console.log(res);
    },
    async config() {
      const result = await this.$api.config();
      console.log(result);
    },
  },
};
</script>

<style lang="less">
@media (min-width: 1024px) {
  .about {
    display: flex;
    align-items: center;
    min-height: 100vh;

    h1 {
      color: red;
    }
  }
}
</style>
