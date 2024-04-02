/* 产引入jsencrypt实现数据RSA加密 */
import JSEncrypt from 'jsencrypt'; // 处理长文本数据时报错 jsencrypt.js Message too long for RSA
/* 产引入encryptlong实现数据RSA加密 */
import Encrypt from 'encryptlong'; // encryptlong是基于jsencrypt扩展的长文本分段加解密功能。
import CryptoJS from 'crypto-js';
// 公钥key
const publicKey =
  'MIGfMA0GCSqGSIb3DQEBAQUAA4GNADCBiQKBgQCWrfjzgDRQ2fXcENfs3O72cGts/X3UfBFRVKz2/MDfOzVSd2qvJZpFFO/lt8+nabJQYN24xHJ/TQnGJcuYSvl1fPNXaZlf3aeCx19iJO36TJS425rZ3ItwF174maAVuSH5CXtoJTpEcmHmLOLRJViCBmAIWbsRSgsmmHZU8kb8NQIDAQAB';
// 私钥key
const privateKey = '';

export default {
  desEncrypt(data, aseKey) {
    if (data == null) return '';
    var srcs = CryptoJS.enc.Utf8.parse(data);
    var key = CryptoJS.enc.Utf8.parse(aseKey);
    var encrypted = CryptoJS.AES.encrypt(srcs, key, {
      mode: CryptoJS.mode.ECB,
      padding: CryptoJS.pad.Pkcs7,
    });
    return encrypted.toString();
  },
  // 获取key
  EncryptKey(data) {
    const sixkey = this.createDesKey(16);
    const key = this.rsaEncrypt(sixkey);
    let cryptdata;
    if (data) {
      // console.log(data.formats ? '有formats' : '无formats');
      if (data.formats) {
        let dataformats = JSON.stringify(data.formats);
        data.formats = dataformats;
      }
      cryptdata = data.formats
        ? this.desEncrypt(JSON.stringify(data), sixkey)
        : this.desEncrypt(this.toJSONString(data), sixkey);
    }
    return {
      sixkey,
      key,
      cryptdata,
    };
  },

  // // 加密data数据
  // EncryptData(data, key) {
  // 	console.log(data);
  // 	return this.desEncrypt(data, key)
  // },
  createDesKey(num) {
    var $chars = 'ABCDEFGHJKMNPQRSTWXYZ0123456789'; /****默认去掉了容易混淆的字符oOLl,9gq,Vv,Uu,I1****/
    var maxPos = $chars.length;
    var pwd = '';

    for (var i = 0; i < num; i++) {
      pwd += $chars.charAt(Math.floor(Math.random() * maxPos));
    }
    return pwd;
  },
  rsaEncrypt(data) {
    //加密
    if (data == null) return '';
    var encrypt = new JSEncrypt();
    encrypt.setPublicKey(publicKey);
    var encryptData = encrypt.encrypt(data);
    return encryptData;
  },
  toJSONString(data) {
    if (data == null) return '{}';
    //拼接请求参数处理
    var newkey = Object.keys(data).sort();
    var jsonData = '{';
    for (var i = 0; i < newkey.length; i++) {
      jsonData += '"' + [newkey[i]] + '":"' + data[newkey[i]] + '",'; //拼接请求参数
    }
    jsonData = jsonData.substring(0, jsonData.length - 1) + '}'; //拼接请求参数
    return jsonData;
  },
  //AES_加密
  encrypt1(data, keyStr) {
    keyStr = keyStr ? keyStr : 'qwerrtyhfgfbvvcfdff';
    var key = CryptoJS.enc.Utf8.parse(keyStr); //Latin1 w8m31+Yy/Nw6thPsMpO5fg==
    var srcs = CryptoJS.enc.Utf8.parse(data);
    var encrypted = CryptoJS.AES.encrypt(srcs, key, {
      mode: CryptoJS.mode.ECB,
      padding: CryptoJS.pad.Pkcs7,
    });
    return encrypted.toString();
  },

  /* 加密 */
  encrypt(data) {
    const PUBLIC_KEY = publicKey;
    var encryptor = new Encrypt();
    encryptor.setPublicKey(PUBLIC_KEY);
    // 如果是对象/数组的话，需要先JSON.stringify转换成字符串
    const result = encryptor.encryptLong(data);
    return result;
  },
  /* 解密 - PRIVATE_KEY - 验证 */
  decrypt(data) {
    const PRIVATE_KEY = privateKey;
    var encryptor = new Encrypt();
    encryptor.setPrivateKey(PRIVATE_KEY);
    // 如果是对象/数组的话，需要先JSON.stringify转换成字符串
    var result = encryptor.decryptLong(data);
    return result;
  },
};
