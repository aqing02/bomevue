import Head from '@/components/Head.vue';
import tabbar from '@/components/tabbar.vue';
import footer from '@/components/Footer.vue';
import Popup from '@/components/Popup.vue';
import Setting_Poup from '@/components/Setting_Poup.vue';
import Coin_Poup from '@/components/Coin_Poup.vue';
import Lp_home from '@/components/Lp_home.vue';
import Lp_add from '@/components/Lp_add.vue';
import Lp_change from '@/components/Lp_change.vue';
import Home from '@/components/Home.vue';
export default {
  install: function (Vue) {
    // console.log('自定义的插件~');
    // 在自定义的插件中注册为全局组件
    Vue.component('Head', Head);
    Vue.component('tabbar', tabbar);
    Vue.component('Footer', footer);
    Vue.component('Popup', Popup);
    Vue.component('SetPoup', Setting_Poup);
    Vue.component('Coin_Poup', Coin_Poup);
    Vue.component('Lp_home', Lp_home);
    Vue.component('Lp_add', Lp_add);
    Vue.component('Lp_change', Lp_change);
    Vue.component('Home', Home);

    // 也可以往Vue的原型对上添加属性或者方法，名字可以自定义
    // 在其他.vue结尾的文件中，可以通过this，访问自己添加的属性和方法象
    // Vue.prototype.num = 10;
    // Vue.prototype.$sayHi = () => {
    //   alert('Hi~');
    // };
  },
};
