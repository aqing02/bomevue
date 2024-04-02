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

export default {
  login,
};
