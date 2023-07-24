import { ethers } from "ethers";
import { token_abi } from "@/utils/token_abi.js";
import { contract_abi } from "@/utils/contract_abi.js";
import store from "@/store/index";
import tool from "@/mixins/index.js";
let tool_fuc = tool.methods;
class ethers_func {
  constructor() {
    // 合约地址
    this.contract_address = "0xA07B8B161Cb8A1A54488024b61A1B6Ed023a0d3C";
    this.contract_address1 = "0x7C90671EC12Cf8e9c9153C9edb0aa342fCF0C17b";
    // 代币地址
    this.token_address = "0xbBE8929988eeeFF501b4706669844A5E9A2D20b3";
    this.token_address1 = "0x9C67792dc2a5282704e20F2779eaFB13e1618d0F";
    this.contract_arr = [
      this.build_functional_contract(),
      this.build_token_contract(),
    ];
  }
  connect_web() {
    return new ethers.providers.Web3Provider(window.ethereum);
  }
  getwallet_address() {
    window.ethereum
      .request({
        method: "eth_requestAccounts",
      })
      .then((res) => {
        console.log(res[0]);
        this.getnetwork();
        store.commit("user/setaddress", res[0]);
      });
  }
  getnetwork() {
    console.log(store.state.user.chianmsg.chainId);
    console.log(window.ethereum.networkVersion);
    if (
      Number(store.state.user.chianmsg.chainId) !==
      Number(window.ethereum.networkVersion)
    ) {
      console.log("需要更换网络");
      store.commit("user/setchecknetwork_status", true);
    } else {
      store.commit("user/setchecknetwork_status", false);
    }
  }
  checknetwork(obj) {
    ethereum.request({
      method: "wallet_addEthereumChain", // Metamask的api名称
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
  }
  sign_message(msg) {
    const signer = this.connect_network().getSigner();
    return signer.signMessage(msg);
  }
  build_functional_contract() {
    return new ethers.Contract(
      this.contract_address1,
      contract_abi,
      this.connect_web().getSigner()
    );
  }
  build_token_contract() {
    return new ethers.Contract(
      this.token_address1,
      token_abi,
      this.connect_web().getSigner()
    );
  }
  /**
   * @description:
   * @param {*} func_msg 所需要的参数
   * @param {*} func_name 所需调用的方法名
   * @param {*} functional_contract_name 合约实例名称
   * @param {*} token_contract_name 代币实例名称
   * @return {*}
   */
  async get_token_allowance(
    func_msg,
    func_name,
    functional_contract_name,
    token_contract_name
  ) {
    try {
      let allowance_num = "";
      allowance_num = await this.build_token_contract().allowance(
        store.state.user.address,
        this.contract_address1
      );
      if (allowance_num.lt(this.num_toparseEther(func_msg))) {
        // tool_fuc.toast('额度不足', 'info')
        return this.approve_token(func_msg, func_name);
      } else {
        return this.deposit_token(func_msg, func_name);
      }
    } catch (e) {
      console.log(e);
      //TODO handle the exception
    }
  }
  async approve_token(
    func_msg,
    func_name,
    functional_contract_name,
    token_contract_name
  ) {
    try {
      let { hash } = await this.build_token_contract().approve(
        this.contract_address1,
        ethers.constants.MaxUint256
      );
      if (hash) {
        this.connect_web()
          .waitForTransaction(hash)
          .then((res) => {
            this.deposit_token(func_msg, func_name);
            return hash;
          });
      }
    } catch (e) {
      console.log(e);
      uni.hideLoading();
      tool_fuc.toast("授权失败", "error");
      return e;
      //TODO handle the exception
    }
  }
  async deposit_token(func_msg, func_name) {
    try {
      console.log(func_msg);
      console.log(func_name);
      const gasPrice = ethers.utils.parseUnits("10", "gwei");
      const gasLimit = 550000;
      const gasMsg = {
        gasPrice: gasPrice,
        gasLimit: gasLimit,
      };
      console.log(this.num_toparseEther("100"));
      return new Promise((resolve, reject) => {
        this.build_functional_contract()
          [func_name](
            this.token_address1,
            this.num_toparseEther("100"),
            "202307198803",
            "1",
            gasMsg
          )
          .then((res) => {
            console.log(res);
            resolve(res);
            uni.hideLoading();
          })
          .catch((err) => {
            console.log(err);
            uni.hideLoading();
            tool_fuc.toast("交易失败", "error");
          });
      });
    } catch (e) {
      uni.hideLoading();
      console.log(e);
      tool_fuc.toast("交易失败", "error");
      //TODO handle the exception
    }
  }
  num_toformatEther(bignumber, wei = 18) {
    return ethers.utils.formatUnits(bignumber, wei);
  }
  num_toparseEther(bignumber, wei = 18) {
    return ethers.utils.parseUnits(bignumber, wei);
  }
}
export default new ethers_func();
