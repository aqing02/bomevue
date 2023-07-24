/*
 * @Author: aqing 1134575174@qq.com
 * @Date: 2023-06-21 17:30:20
 * @LastEditors: aqing 1134575174@qq.com
 * @LastEditTime: 2023-07-24 17:33:58
 * @FilePath: \btgl\src\config\request.js
 * @Description: 这是默认设置,请设置`customMade`, 打开koroFileHeader查看配置 进行设置: https://github.com/OBKoro1/koro1FileHeader/wiki/%E9%85%8D%E7%BD%AE
 */
import axios from 'axios';
import store from '../store/index';
import mixins from '../mixins';
import router from '@/router/index';
const mixinsfunc = mixins.methods;
// 创建axios实例
const instance = axios.create({
  baseURL: import.meta.env.VITE_BASE_URL, // 设置基础URL
  timeout: 10000, // 设置请求超时时间
  headers: {
    'Content-Type': 'application/json',
    'Cache-Control': 'no-store',
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
    // 在发送请求之前，可以对请求进行自定义处理，例如添加token
    const token = store.state.user.token;
    if (token) {
      config.headers.Authorization = `Bearer ${token}`;
    }
    if (!config?.custom?.auth) {
      // 可以在此通过vm引用vuex中的变量，具体值在vm.$store.state中
      // config.header.Authorization = vm.$store.state.user.token
      // config.header.lang = vm.$store.state.user.systemlang
      config.headers.Authorization = `Bearer ${token}`;
    } else {
      router.push({
        name: 'index',
      });
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
    if (response.data.code !== 0) {
      mixinsfunc.showtoast(response.data.msg, 'error');
      if (response.data.code == 10004) {
        store.commit('user/removeusermsg', true);
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
        case 10004:
          console.error('未授权，请登录');
          store.commit('user/removeusermsg', true);
          router.push({
            name: 'index',
          });
          break;
        default:
          console.error('请求出错：', error.msg);
      }
    } else {
      console.error('请求出错：', error.msg);
    }
    return Promise.reject(error);
  },
);

export default instance;
