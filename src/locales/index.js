import Vue from 'vue';
import VueI18n from 'vue-i18n';
import store from '@/store/index.js';
import localesZh from './zh.json';
import localesEn from './en.json';
Vue.use(VueI18n);
console.log(store.state.user.lang);
const i18n = new VueI18n({
  locale: store.state.user.lang || 'en',
  messages: {
    zh: {
      ...localesZh,
    },
    en: {
      ...localesEn,
    },
  },
});

export default i18n;
