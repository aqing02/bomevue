export default {
  namespaced: true,
  state: () => ({
    address: '',
    token: '',
    usermsg: {},
    signstatus: true,
    userdetail: {},
    balance: {},
    signtext: '',
    lang: 'en',
    config: {},
    chainid: '',
    coinlog: '',
    systemlang: 'zh_CN',
    rank: '',
    signmessage: '',
    configmsg: {},
    menukey: 'usermsg',
    chianmsg: {
      chainId: 56,
      chainName: 'Binance Smart Chain Mainnet',
      host: 'https://bsc-dataseed1.defibit.io',
      blockExplorerUrl: 'https://bscscan.com',
      symbol: 'BNB',
      decimals: 18,
    },
    checknetwork_status: false,
  }),
  mutations: {
    setaddress(state, msg) {
      state.address = msg;
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
    setcoinlog(state, msg) {
      state.coinlog = msg;
    },
    rankset(state, msg) {
      state.rank = msg;
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
    setticket_hash(state, msg) {
      console.log(msg);
      state.ticket_hash = msg;
    },
    setorder_hash(state, msg) {
      state.order_hash = msg;
    },
    setchecknetwork_status(state, msg) {
      state.setchecknetwork_status = msg;
    },
  },
  actions: {
    // 请求数据函数
  },
};
