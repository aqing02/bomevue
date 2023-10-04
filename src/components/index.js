import Head from '@/components/Head.vue';
export default {
  install: function (Vue) {
    // console.log('自定义的插件~');
    // 在自定义的插件中注册为全局组件
    Vue.component('Head', Head);
    // 也可以往Vue的原型对上添加属性或者方法，名字可以自定义
    // 在其他.vue结尾的文件中，可以通过this，访问自己添加的属性和方法象
    // Vue.prototype.num = 10;
    // Vue.prototype.$sayHi = () => {
    //   alert('Hi~');
    // };
  },
};