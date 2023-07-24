import http from '@/utils/request';
/**
 * @description:登录
 * @return {*}
 */
const login = (
  data,
  config = {
    custom: {
      auth: true,
    },
  },
) => http.post('/api/user/login', data, config);

/**
 * @description:获取全局配置
 * @return {*}
 */
const getconfig = (
  data,
  config = {
    custom: {
      auth: true,
    },
  },
) => http.post('/api/common/getConfig', data, config);

export default {
  login,
  getconfig,
};
