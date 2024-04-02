import axios from 'axios';
import store from '../store/index';
import router from '@/router/index';
import vue from 'vue';
import crypt from '@/utils/crypt.js';
import i18n from '@/locales';
// const cancelToken = axios.CancelToken;
// const source = cancelToken.source();

let that = new vue();
// 创建axios实例
const instance = axios.create({
  // baseURL: import.meta.env.VITE_BASE_URL, // 设置基础URL
  baseURL: '/api', // 设置基础URL
  timeout: 60000, // 设置请求超时时间
  headers: {
    'Content-Type': 'application/json',
    // 'Cache-Control': 'no-store',
  },
  custom: {
    auth: false,
  },
});

// 请求拦截器
instance.interceptors.request.use(
  (config) => {
    // if (config.url === "/api/xms/checkAddress") {
    //   config.custom.auth = true;
    // }
    // config.cancelToken = source.token;
    // 在发送请求之前，可以对请求进行自定义处理，例如添加token
    let cryptmsg = crypt.EncryptKey(config.data);
    config.data = cryptmsg.cryptdata || '';
    const token = store.state.user.token;
    if (!config?.custom?.auth) {
      // 可以在此通过vm引用vuex中的变量，具体值在vm.$store.state中
      // config.header.Authorization = vm.$store.state.user.token
      // config.header.lang = vm.$store.state.user.systemlang
      config.headers.Authorization = token;
      cryptmsg.key ? (config.headers.key = cryptmsg.key) : '';
    } else {
      cryptmsg.key ? (config.headers.key = cryptmsg.key) : '';
      // router.push({
      //   name: 'index',
      // });
    }
    return config;
  },
  (error) => {
    // 请求错误处理
    return Promise.reject(error);
  },
);

// 响应拦截器
instance.interceptors.response.use(
  (response) => {
    // 对响应数据进行处理，例如统一处理错误信息
    if (response.data.errorCode !== 200) {
      that.$notify.warning(i18n.tc(`error_code${response.data.errorCode}`));
      if (response.data.errorCode == 1004 || response.data.errorCode == 1012) {
        store.commit('user/removemsg', true);
        // source.cancel('登录信息已过期');
        router.push({
          name: 'index',
        });
        // window.location.reload();
      }
      console.error('请求出错：', response.data.msg);
      return Promise.reject(response.data.msg);
    }
    return response.data;
  },
  (error) => {
    // 对响应错误进行处理，例如根据不同的HTTP状态码给出提示
    if (error.response) {
      const status = error.code;
      console.log(status);
      switch (status) {
        case 401:
          console.error('未授权，请登录');
          break;
        case 403:
          console.error('拒绝访问');
          break;
        case 404:
          console.error('请求地址出错');
          break;
        case 500:
          console.error('服务器内部错误');
          break;
        case 1004:
          console.error('未授权，请登录');
          store.commit('user/removeusermsg', true);
          router.push({
            name: 'first',
          });
          break;
        default:
          console.error(error.msg);
      }
    } else {
      console.error(error.msg);
    }
    // if (axios.isCancel(error)) {
    //   // 取消请求的情况下，终端Promise调用链
    //   return new Promise(() => {});
    // } else {
    return Promise.reject(error);
    // }
  },
);

export default instance;
