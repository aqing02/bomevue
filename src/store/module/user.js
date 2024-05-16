export default {
  namespaced: true,
  state: () => ({
    address: '',
    connect_address: '',
    is_connect: false,
    token: '',
    usermsg: {},
    signstatus: true,
    userdetail: {},
    balance: {},
    signtext: '',
    lang: 'en',
    api_lang: 'en',
    config: {},
    chainid: '',
    signmessage: '',
    configmsg: {},
    menukey: 'usermsg',
    devicename: 'pc',
    56: {
      chainId: 56,
      chainName: 'Binance Smart Chain Mainnet',
      host: 'https://bsc-dataseed1.defibit.io',
      blockExplorerUrl: 'https://bscscan.com',
      symbol: 'BNB',
      decimals: 18,
    },
    97: {
      chainId: 97,
      chainName: 'Binance Smart Chain Testnet',
      host: 'https://data-seed-prebsc-2-s1.bnbchain.org:8545',
      blockExplorerUrl: 'https://testnet.bscscan.com',
      symbol: 'tBNB',
      decimals: 18,
    },
    checknetwork_status: false,
    mob_menu_show: false,
    lottie_show: true,
    lottie_status: true,
    theme: 'dark',
    newsmsg: {},
  }),
  mutations: {
    setaddress(state, msg) {
      state.address = msg;
    },
    setconnect_address(state, msg) {
      state.connect_address = msg;
    },
    setusermsg(state, msg) {
      state.usermsg = msg;
    },
    setmenukey(state, msg) {
      state.menukey = msg;
    },
    setconfigmsg(state, msg) {
      state.configmsg = msg;
    },
    setsignstatus(state, status) {
      state.signstatus = status;
    },
    setuserdetail(state, msg) {
      state.userdetail = msg;
    },
    setbalance(state, msg) {
      state.balance = msg;
    },
    removeusermsg(state, status) {
      state.usermsg = {};
      state.userdetail = {};
      state.balance = {};
      state.token = null;
      state.connect_address = '';
    },
    setpid(state, msg) {
      state.usermsg.pid = msg;
    },
    setlang(state, msg) {
      state.lang = msg;
    },
    setconfig(state, msg) {
      state.config = msg;
    },
    setchainid(state, id) {
      state.chainid = id;
    },
    setsignmessage(state, msg) {
      state.signmessage = msg;
    },
    settoken(state, msg) {
      state.token = msg;
    },
    setmenu_status(state, msg) {
      state.menu_status = msg;
    },
    setinvitecode(state, msg) {
      state.invitecode = msg;
    },
    setchecknetwork_status(state, msg) {
      state.setchecknetwork_status = msg;
    },
    setis_connect(state, msg) {
      state.is_connect = msg;
    },
    setconnect_address(state, msg) {
      state.connect_address = msg;
      console.log(msg.includes(state.address));
      state.is_connect = msg.includes(state.address);
    },
    setdevicename(state, msg) {
      state.devicename = msg;
    },
    setmob_menu_show(state, msg) {
      state.mob_menu_show = msg;
    },
    setlottie_show(state, msg) {
      state.lottie_show = msg;
    },
    setlottie_status(state, msg) {
      state.lottie_status = msg;
    },
    setapi_lang(state, msg) {
      state.api_lang = msg;
    },
    setnewsmsg(state, msg) {
      state.newsmsg = msg;
    },
    settheme(state, msg) {
      state.theme = msg;
    },
  },
  actions: {
    // 请求数据函数
  },
};
