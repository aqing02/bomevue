import { ethers } from 'ethers';
import { token_abi } from '@/utils/token_abi.js';
import { contract_abi } from './contract_abi';
import store from '@/store/index';
import tool from '@/mixins/index.js';
import vue from 'vue';
let that = new vue();
let tool_fuc = tool.methods;

class ethers_func {
  constructor() {
    // 合约地址
    this.contract_address = import.meta.env.VITE_contract_address;
    // 代币地址
    this.token_address = import.meta.env.VITE_token_address;
  }
  connect_web() {
    return new ethers.providers.Web3Provider(window.ethereum);
  }
  getwallet_address() {
    window.ethereum
      .request({
        method: 'eth_requestAccounts',
      })
      .then((res) => {
        this.getnetwork();
        store.commit('user/setaddress', res[0]);
      });
  }
  async getnetwork() {
    try {
      const signer = this.connect_web().getSigner();
      let chianid = await signer.getChainId();
      if (Number(store.state.user.chianmsg.chainId) !== Number(chianid)) {
        console.log('需要更换网络');
        // store.commit('user/setchecknetwork_status', true);
        await this.checknetwork();
      } else {
        // store.commit('user/setchecknetwork_status', false);
      }
    } catch (error) {
      console.log(error);
    }
  }

  async checknetwork(obj = store.state.user.chianmsg) {
    try {
      const result = await window.ethereum.request({
        method: 'wallet_addEthereumChain', // Metamask的api名称
        params: [
          {
            chainId: `0x${obj.chainId.toString(16)}`, // 网络id，16进制的字符串
            chainName: obj.chainName, // 添加到钱包后显示的网络名称
            rpcUrls: [
              obj.host, // rpc地址
            ],
            blockExplorerUrls: [
              obj.blockExplorerUrl, // 网络对应的区块浏览器
            ],
            nativeCurrency: {
              // 网络主币的信息
              name: obj.symbol,
              symbol: obj.symbol,
              decimals: obj.decimals,
            },
          },
        ],
      });
      console.log(result);
    } catch (error) {
      console.log(error);
    }
  }
  sign_message(msg) {
    const signer = this.connect_web().getSigner();
    return signer.signMessage(msg);
  }
  build_function_contract() {
    return new ethers.Contract(this.contract_address, contractAbi, this.connect_web().getSigner());
  }
  build_token_contract(token_address) {
    return new ethers.Contract(this.token_address, token_abi, this.connect_web().getSigner());
  }

  checksign(sign, randomnum) {
    let sign_status = null;
    const result = ethers.utils.verifyMessage(randomnum, sign);
    if (ethers.utils.getAddress(store.state.user.address) == ethers.utils.getAddress(result)) {
      sign_status = true;
    } else {
      sign_status = false;
    }
    return sign_status;
  }

  /**
   * @description: 查询主链币余额
   * @return {*}
   */
  async get_chain_balance() {
    try {
      const balance = await this.connect_web().getBalance(store.state.user.address);
      store.commit('user/setchian_balance', tool_fuc.toFixed_keep(this.TN(balance), 4));
      return balance;
    } catch (error) {
      console.log(error);
    }
  }
  /**
   * @description: 获取代币余额
   * @return {*}
   */
  async get_token_balance() {
    try {
      const result = await this.build_token_contract().balanceOf(store.state.user.address);
      return result;
    } catch (error) {
      console.log(err);
    }
  }

  async get_token_allowance() {
    try {
      const result = await this.build_token_contract().allowance(store.state.user.address, this.contract_address);
      return result;
    } catch (error) {
      console.log(err);
    }
  }

  /**
   * @description: 授权
   * @param {*} num
   * @return {*}
   */
  async approve_token(num) {
    try {
      // this.TB(String(num))
      let result = await this.build_token_contract().approve(this.contract_address, num);
      return result;
    } catch (e) {
      console.log(e);
      that.$notify.error('Approve Failed');
    }
  }

  /**
   * @description: 充值
   * @return {*}
   */
  async deposit_token(pay_msg) {
    try {
      const result = await this.build_function_contract().deposit(
        this.token_address,
        this.TB(String(pay_msg.payU)),
        pay_msg.code,
        pay_msg.code,
      );
      return result;
    } catch (error) {
      console.log(error);
    }
  }
  /**
   * @description: 检测用户是否注册
   * @return {*}
   */
  async check_user_reg() {
    try {
      const result = await this.build_function_contract().ref(store.state.user.address);
      console.log(result);
      if (ethers.constants.AddressZero == result) {
        store.commit('user/setregisterstatus', false);
      } else {
        store.commit('user/setregisterstatus', true);
      }
    } catch (error) {
      console.log(error);
    }
  }
  TN(bignumber, wei = 18) {
    return ethers.utils.formatUnits(bignumber, wei);
  }
  TB(bignumber, wei = 18) {
    return ethers.utils.parseUnits(bignumber, wei);
  }
}
export default new ethers_func();
