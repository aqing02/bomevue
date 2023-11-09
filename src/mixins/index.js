import vue from 'vue';
let that = new vue();

export default {
  methods: {
    // 返回上一页
    toback() {
      this.$router.go(-1);
    },
    removeUtmParamsFromUrl(url) {
      // 创建URL对象
      var urlObject = new URL(url);

      // 获取查询参数
      var searchParams = urlObject.searchParams;
      // 遍历所有参数，删除以"utm_"开头的参数
      for (var key of searchParams.keys()) {
        if (key.startsWith('utm_')) {
          searchParams.delete(key);
        }
      }

      // 重新构建URL，并返回
      return urlObject.toString();
    },
    getImageUrl(url) {
      return new URL(`../assets/${url}`, import.meta.url).href;
    },
    getParam(url) {
      let routes = getCurrentPages(); // 获取当前打开过的页面路由数组
      console.log(routes);
      console.log(url);
      let curRoute = url[url.length - 1].route; //获取当前页面路由
      let curParam = url[url.length - 1].options; //获取路由参数
      console.log(curRoute);
      // 拼接参数
      let param = '';
      for (let key in curParam) {
        param += '&' + key + '=' + curParam[key];
      }

      // 把参数保存为对像
      let obj = {};
      for (let key in curParam) {
        obj[key] = curParam[key];
      }
      console.log('obj>>>>', obj);
      return obj;
    },
    copytext(text) {
      uni.setClipboardData({
        data: text,
        showToast: false,
        success: () => {
          console.log('success');
          uni.showToast({
            icon: 'success',
            title: this.$t('copy_success'),
          });
        },
      });
    },

    /**
     * @description: 保留几位小数但不四舍五入
     * @param {*} num
     * @param {*} len
     * @return {*}
     */
    fixednokeep(num, len) {
      return Number(parseFloat(num).toFixed(len).slice(0, -1));
    },
    // 获取10位时间戳
    timest() {
      let tmp = Date.parse(new Date()).toString();
      tmp = tmp.substr(0, 10);
      return tmp;
    },
    toast(msg, type = 'success') {
      that.$toast({
        message: msg,
        type: type,
        // icon: 'https://img01.yzcdn.cn/vant/logo.png',
      });
    },
    loading_modal() {
      that.$toast.loading({
        message: '加载中...',
        forbidClick: true,
        loadingType: 'spinner',
        icon: 'https://i.postimg.cc/V6k3xDjS/loading.gif',
        overlay: true,
      });
    },
    clearloading() {
      that.$toast.clear();
    },
    goredirectUrl(url, second = 0) {
      setTimeout(() => {
        uni.redirectTo({
          url,
          animationType: 'zoom-fade-out',
          fail() {
            console.log('跳转失败,尝试Tab跳转,url: ' + url);
            uni.switchTab({
              url,
              fail() {
                console.log('Tab跳转失败,url: ' + url);
              },
            });
          },
        });
      }, second * 1000);
    },
    // 跳转页面
    goUrl(url, second = 0) {
      setTimeout(() => {
        uni.navigateTo({
          url,
          animationType: 'zoom-fade-out',
          fail() {
            console.log('跳转失败,尝试Tab跳转,url: ' + url);
            uni.switchTab({
              url,
              fail() {
                console.log('Tab跳转失败,url: ' + url);
              },
            });
          },
        });
      }, second * 1000);
    },

    /**
     * 实现功能
     * 将地址缩短 使用 ... 进行拼接
     * 如下效果
     * 0x0171...fB15d680
     */
    textOmit(textValue, to, from) {
      textValue = textValue.replace(/^0x/, 'b');
      let a = textValue.substring(0, to);
      let a2 = textValue.substring(textValue.length - from, textValue.length);
      return `${a}...${a2}`;
    },
    /**
     * 使用test方法实现模糊查询
     * @param  {Array}  list     原数组
     * @param  {String} keyWord  查询的关键词
     * @return {Array}           查询的结果
     */
    fuzzyQuery(exchangearr, keyWord) {
      if (keyWord !== '') {
        // let reg = new RegExp(keyWord);
        // console.log(reg);
        const results = exchangearr.filter((item) => {
          if (item.name) {
            return item.name.includes(keyWord);
          } else {
            return item.address.includes(keyWord);
          }
        });
        return results;
        // let arr = [];
        // for (var i = 0; i < exchangearr.length; i++) {
        //   if (reg.test(exchangearr[i].name || exchangearr[i].address)) {
        //     arr.push(exchangearr[i]);
        //     exchangearr = arr;
        //   }
        // }
        // console.log(arr);
        // return arr;
      } else {
        return exchangearr;
      }
    },
    // 获取日期
    getDate() {
      const date = new Date();
      const seperator1 = '-';
      const year = date.getFullYear();
      let month = date.getMonth() + 1;
      let strDate = date.getDate();
      if (month >= 1 && month <= 9) {
        month = `0${month}`;
      }
      if (strDate >= 0 && strDate <= 9) {
        strDate = `0${strDate}`;
      }
      const currentdate = year + month + strDate;
      return currentdate;
    },
    // 获取参数
    getQueryString(url, name) {
      const reg = new RegExp(`(^|&)${name}=([^&]*)(&|$)`, 'i');
      if (url.split('?').length > 1) {
        const r = url.split('?')[1].match(reg);
        if (r != null) {
          return unescape(r[2].split('#')[0]);
        } else {
          const res = {};
          let search = url;
          if (search.includes('?')) {
            search = search.match(/\?(\S*)/)[0];
            console.log(search);
            // search = search.match(/\?(.*)/)[1]; //取 ?data=后面所有字符串
            search.split('?').forEach((item) => {
              const arr = item.split('=');
              const key = arr[0];
              const val = arr[1];
              res[key] = val;
            });
            console.log(res);
            // 获取邀请码
            if (res['invitecode']) {
              return res['invitecode'];
            }
          }
        }
        // return null
      }
      return '';
    },
    // 获取年月日
    getTime(data, type) {
      let time = new Date(Number(data) * 1000);
      let Y = time.getFullYear();
      let Mon = time.getMonth() + 1;
      let Day = time.getDate();
      let H = time.getHours();
      let Min = time.getMinutes();
      let S = time.getSeconds();
      if (Mon >= 1 && Mon <= 9) {
        Mon = `0${Mon}`;
      }
      if (Day >= 0 && Day <= 9) {
        Day = `0${Day}`;
      }
      if (Min >= 0 && Min <= 9) {
        Min = `0${Min}`;
      }
      if (S >= 0 && S <= 9) {
        S = `0${S}`;
      }
      //自定义选择想要返回的类型
      if (type === 'Y') {
        //返回年月日2020-10-10
        return `${Y}.${Mon}.${Day} ${H}:${Min}`;
      } else if (type === 'H') {
        //返回时分秒20：10：10
        return `${H}:${Min}:${S}`;
      } else if (type === 'P') {
        // data = String(data).replace(/-/g, "/");
        let Y = data.getFullYear();
        let Mon = data.getMonth() + 1;
        let Day = data.getDate();
        let H = data.getHours();
        let Min = data.getMinutes();
        let S = data.getSeconds();
        //返回时分秒20：10：10
        if (Mon >= 1 && Mon <= 9) {
          Mon = `0${Mon}`;
        }
        if (Day >= 0 && Day <= 9) {
          Day = `0${Day}`;
        }
        if (Min >= 0 && Min <= 9) {
          Min = `0${Min}`;
        }
        if (S >= 0 && S <= 9) {
          S = `0${S}`;
        }
        return `${Y}-${Mon}-${Day} ${H}:${Min}:${S}`;
      } else {
        //返回年月日时分秒2020-10-10 10:26:38
        return `${Y}-${Mon}-${Day} ${H}:${Min}:${S}`;
      }
    },
    // 保留小数
    toFixed(str, len) {
      let n = Number(str).toFixed(len + 5);
      let b = n.slice(0, n.length - 5);
      return Number(b);
    },
    /**
     * @description:转换获取以数字形式传过来的大数字
     * @param {*} de 精度
     * @param {*} num 数量
     * @return {*}
     */
    get_Decimal(de, num) {
      var sb = 1;
      for (let i = 0; i < de; i++) {
        sb += '0';
      }
      return this.twopoints(num / sb, 4);
    },
    /**
     * @description: 保留多少位小数但不四舍五入
     * @param {*} mul 数量
     * @param {*} len 保留小数位数
     * @return {*}
     */
    toFixed_keep(mul, len = 2) {
      if (String(mul).indexOf('.') != -1) {
        const sp = String(mul).split('.');
        const back = sp[1].substring(0, len);
        if (len > 0) {
          return sp[0] + '.' + back;
        } else {
          return sp[0];
        }
      } else {
        return mul;
      }
    },
    // 获取系统栏高度
    getSysteminfo() {
      let statusBarHeight = '';
      uni.getSystemInfo({
        success: (res) => {
          statusBarHeight = res.statusBarHeight;
        },
      });
      return statusBarHeight;
    },
    getFullNum(num) {
      //处理非数字
      if (isNaN(num)) {
        return num;
      }
      //处理不需要转换的数字
      var str = '' + num;
      if (!/e/i.test(str)) {
        return num;
      }
      //先获取到精确的小数位
      var fixed = ('' + num).match(/\d+$/)[0];
      //拿到保留指定的小数
      return new Number(num).toFixed(fixed);
    },
    // 检查输入框
    checkInput(num) {
      let str = num.toString();
      str = str.replace(/-/g, '');
      var len1 = str.substr(0, 1);
      var len2 = str.substr(1, 1);
      //如果第一位是0，第二位不是点，就用数字把点替换掉
      if (str.length > 1 && len1 == 0 && len2 != '.') {
        str = str.substr(1, 1);
      }
      //第一位不能是.
      if (len1 == '.') {
        str = '';
      }
      //限制只能输入一个小数点
      if (str.indexOf('.') != -1) {
        var str_ = str.substr(str.indexOf('.') + 1);
        if (str_.indexOf('.') != -1) {
          str = str.substr(0, str.indexOf('.') + str_.indexOf('.') + 1);
        }
        if (str_.length > 3) {
          let str_msg = str.substr(0, str.indexOf('.') + str_.indexOf('.') + 6);
          return (str = str_msg);
          // this.input_disable = true
        }
      }
      //正则替换
      str = str.replace(/[^\d^\.]+/g, ''); // 保留数字和小数点
      return str;
    },
    /**
     * @description: 输入框正整数输入
     * @param {*} num
     * @return {*}
     */
    checkInput_NOdig(num) {
      let str = num.toString();
      str = str.replace(/^(0+)|[^\d]+/g, '');
      return str;
    },
    // 通知
    notify(text, time = 2000, data) {
      let wrap = document.createElement('div');
      let body = document.querySelector('body');
      let style = {
        width: '100%',
        height: '40px',
        display: 'flex',
        justifyContent: 'center',
        alignItems: 'center',
        background: '#5ac725',
        color: '#ffffff',
        fontSize: '14px',
        position: 'fixed',
        top: 0,
        left: 0,
        zIndex: 9999,
        transition: 'all .3s',
        ...data,
      };
      // 循环设置样式
      for (let key in style) {
        wrap.style[key] = style[key];
      }
      wrap.innerText = text;
      body.appendChild(wrap);
      // 到设定时间销毁
      setTimeout(() => {
        body.removeChild(wrap);
      }, time);
      // 使用Promise达到分步动画
      function moveTo(fn, time) {
        return new Promise((resolve, reject) => {
          fn();
          setTimeout(resolve, time);
        });
      }
      moveTo(() => {
        wrap.style.transform = 'translate(0, -100%)';
      }, 300)
        .then(() => {
          return moveTo(() => {
            wrap.style.transform = 'translate(0, 0)';
          }, time - 300 * 2);
        })
        .then(() => {
          return moveTo(() => {
            wrap.style.transform = 'translate(0, -100%)';
          }, 300);
        });
    },
  },
};
