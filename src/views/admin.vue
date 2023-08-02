<template>
  <div class="admin-container" :class="{ login: !message }">
    <!-- <li>Merge</li>
    <li>Merge</li>
    <li>Merge</li>
    <li>Merge</li>
    <li>Merge</li>
    <li>Merge</li>
    <li>Merge</li>
    <li>Merge</li>
    <li>Merge</li>
    <li>Merge</li> -->
    <div v-if="!message" class="admin-login-btn" @click.stop="adminlogin">管理员登录</div>
    <div v-else>
      <div class="admin-head-box">
        <el-card shadow="hover" class="admin-head-card">
          <div class="total-title">全网总业绩</div>
          <countTo class="total-text" :startVal="0" :decimals="2" :endVal="total_num" :duration="3000"></countTo>
        </el-card>
      </div>
      <div class="admin-input-box">
        <div class="admin-input-box-title">最小下单金额</div>
        <el-input v-model="buymin_price" size="mini" placeholder="请输入最小下单金额"></el-input>
      </div>
      <div class="admin-input-box">
        <div class="admin-input-box-title">单次下单最大金额上限</div>
        <el-input v-model="buymax_price" size="mini" placeholder="请输入金额上限"></el-input>
      </div>
      <div class="admin-input-box">
        <div class="admin-input-box-title">当前下单获取贡献值倍数</div>
        <el-input v-model="contribution_multiple" size="mini" placeholder="请输入贡献值倍数">
          <template slot="append">倍</template></el-input
        >
      </div>
      <div class="admin-input-box">
        <div class="admin-input-box-title">当前静态奖金计算倍数</div>
        <el-input v-model="bonus_multiple" size="mini" placeholder="请输入静态奖金计算倍数">
          <template slot="append">倍</template>
        </el-input>
      </div>
      <div class="admin-center-title">级别奖参数设置</div>
      <div class="admin-input-box">
        <div class="admin-input-box-title">下单入池比例</div>
        <el-input v-model="buy_proportion" size="mini" placeholder="请输入比例">
          <template slot="append">%</template>
        </el-input>
      </div>
      <div class="performance-setting-box" v-for="p in performance_arr" :key="p.id">
        <div class="performance-box">
          <div class="performance-box-text" style="width: auto">M{{ p.id }}:</div>
          <el-input v-model="p.level_percent" value="1" size="mini" placeholder="请输入比例">
            <template slot="append">%</template>
          </el-input>
        </div>
        <div class="performance-box">
          <div class="performance-box-text">大区业绩:</div>
          <el-input v-model="p.big_performance" value="1" size="mini" placeholder="请输入大区业绩"> </el-input>
        </div>
        <div class="performance-box">
          <div class="performance-box-text">小区业绩:</div>
          <el-input v-model="p.small_performance" value="1" size="mini" placeholder="请输入小区业绩"> </el-input>
        </div>
      </div>
      <div class="admin-center-title">节点地址设置</div>
      <div class="nodeaddress-setting-box">
        <div class="nodeaddress-box" v-for="p in nodeaddress_arr" :key="p.id">
          <el-input class="nodeaddress-box-input" v-model="p.address" size="mini" placeholder="请输入地址"> </el-input>
          <el-tag size="medium" v-if="p.level" style="margin: 0 10px">{{ p.level }}</el-tag>
          <el-tag size="medium" v-if="p.status" type="danger">{{ p.status }}</el-tag>
          <div
            @click="removenodeaddress(p)"
            class="el-icon-circle-close"
            style="margin-left: 5px; font-size: 30px; color: #fff"
          ></div>
        </div>
        <div
          class="el-icon-circle-plus-outline"
          @click="addnodeaddress"
          style="margin: 15px auto; font-size: 30px; color: #fff"
        ></div>
        <div class="admin-submit-btn" @click="settingsubmit">设置提交</div>
      </div>
    </div>
  </div>
</template>

<script>
import countTo from 'vue-count-to';
export default {
  data() {
    return {
      message: '',
      total_num: 1000,
      buymin_price: '',
      buymax_price: '',
      contribution_multiple: '',
      bonus_multiple: '',
      buy_proportion: '',
      address: '',
      performance_arr: [
        { id: 1, level_percent: '10', big_performance: '300', small_performance: '100' },
        { id: 2, level_percent: '10', big_performance: '300', small_performance: '100' },
        { id: 3, level_percent: '10', big_performance: '300', small_performance: '100' },
        { id: 4, level_percent: '10', big_performance: '300', small_performance: '100' },
        { id: 5, level_percent: '10', big_performance: '300', small_performance: '100' },
        { id: 6, level_percent: '10', big_performance: '300', small_performance: '100' },
        { id: 7, level_percent: '10', big_performance: '300', small_performance: '100' },
      ],
      nodeaddress_arr: [{ id: 1, address: '0xxx', status: '未失效', level: 'V1' }],
    };
  },
  components: {
    countTo,
  },
  created() {
    // this.$ethers.getwallet_address();
  },
  methods: {
    async adminlogin() {
      const message = await this.$ethers.sign_message('1111');
      console.log(message);
      this.message = message;
    },
    removenodeaddress(p) {
      console.log('删除', p);
      this.nodeaddress_arr.splice(
        this.nodeaddress_arr.findIndex((item) => item.id === p.id),
        1,
      );
    },
    addnodeaddress() {
      console.log('新增');
      if (this.nodeaddress_arr.length <= 0) {
        this.nodeaddress_arr.push({ id: 1, address: '', status: '', level: '' });
      } else {
        let id = this.nodeaddress_arr[this.nodeaddress_arr.length - 1].id;
        console.log(id);
        this.nodeaddress_arr.push({ id: id + 1, address: '', status: '', level: '' });
      }
    },
    settingsubmit() {
      console.log('设置提交 ');
    },
  },
};
</script>

<style lang="scss" scoped>
.admin-container {
  width: 100%;
  // height: 100vh;
  padding-bottom: 30px;
  background-image: linear-gradient(270deg, #8146b4, #6990f6);
  position: relative;

  overflow: hidden;
  &.login {
    height: 100vh;
    padding-bottom: 0;
    display: flex;
    justify-content: center;
    flex-direction: column;
    align-items: center;
  }
  // li {
  //   display: flex;
  //   position: absolute;
  //   bottom: -200px;
  //   justify-content: center;
  //   align-items: center;
  //   border-radius: 10px;
  //   width: 50px;
  //   height: 50px;
  //   border-radius: 50%;
  //   background-color: rgba(#fff, 0.15);
  //   color: #ccc;
  //   animation: bubble 15s infinite;
  //   &:nth-child(1) {
  //     left: 10%;
  //   }
  //   &:nth-child(2) {
  //     left: 20%;
  //     width: 90px;
  //     height: 90px;
  //     animation-duration: 7s;
  //     animation-delay: 2s;
  //   }
  //   &:nth-child(3) {
  //     left: 25%;
  //     animation-delay: 4s;
  //   }
  //   &:nth-child(4) {
  //     left: 40%;
  //     width: 60px;
  //     height: 60px;
  //     background-color: rgba(#fff, 0.3);
  //     animation-duration: 8s;
  //   }
  //   &:nth-child(5) {
  //     left: 70%;
  //   }
  //   &:nth-child(6) {
  //     left: 80%;
  //     width: 120px;
  //     height: 120px;
  //     background-color: rgba(#fff, 0.2);
  //     animation-delay: 3s;
  //   }
  //   &:nth-child(7) {
  //     left: 32%;
  //     width: 160px;
  //     height: 160px;
  //     animation-delay: 2s;
  //   }
  //   &:nth-child(8) {
  //     left: 55%;
  //     width: 40px;
  //     height: 40px;
  //     font-size: 12px;
  //     animation-duration: 15s;
  //     animation-delay: 4s;
  //   }
  //   &:nth-child(9) {
  //     left: 25%;
  //     width: 40px;
  //     height: 40px;
  //     background-color: rgba(#fff, 0.3);
  //     font-size: 12px;
  //     animation-duration: 12s;
  //     animation-delay: 2s;
  //   }
  //   &:nth-child(10) {
  //     left: 85%;
  //     width: 160px;
  //     height: 160px;
  //     animation-delay: 5s;
  //   }
  // }
  // @keyframes bubble {
  //   0% {
  //     opacity: 0.5;
  //     transform: translateY(0) rotate(45deg);
  //   }
  //   25% {
  //     opacity: 0.75;
  //     transform: translateY(-400px) rotate(90deg);
  //   }
  //   50% {
  //     opacity: 1;
  //     transform: translateY(-600px) rotate(135deg);
  //   }
  //   100% {
  //     opacity: 0;
  //     transform: translateY(-1000px) rotate(180deg);
  //   }
  // }
  .admin-login-btn {
    padding: 10px 30px;
    // background-color: #409eff;
    color: #fff;
    border-radius: 15px;
    font-size: 15px;
    cursor: pointer;
    background: rgba(255, 255, 255, 0.2);
    -webkit-backdrop-filter: blur(8px);
    backdrop-filter: blur(8px);
    border-radius: 25px;
    box-shadow: inset 0 0 6px rgba(255, 255, 255, 0.2);
  }
  .admin-submit-btn {
    width: 20%;
    padding: 5px 0;
    margin: 0 auto;
    color: #fff;
    border-radius: 15px;
    font-size: 12px;
    cursor: pointer;
    text-align: center;
    background: rgba(255, 255, 255, 0.2);
    -webkit-backdrop-filter: blur(8px);
    backdrop-filter: blur(8px);
    border-radius: 25px;
    box-shadow: inset 0 0 6px rgba(255, 255, 255, 0.2);
  }
  .admin-head-box {
    width: 30%;
    margin: 0 auto;
    margin-top: 15px;
    .admin-head-card {
      width: 100%;
      display: flex;
      justify-content: center;
      flex-direction: column;
      align-items: center;
      .total-title {
        font-size: 20px;
        font-weight: 500;
        text-align: center;
        margin-bottom: 5px;
      }
      .total-text {
        font-size: 20px;
        font-weight: 500;
        text-align: center;
      }
    }
  }
  .admin-input-box {
    width: 30%;
    margin: 15px auto;
    display: flex;
    align-items: center;
    .admin-input-box-title {
      width: 70%;
      font-size: 12px;
      color: #000;
    }
  }
  .admin-center-title {
    width: 50%;
    margin: 0 auto;
    text-align: center;
    font-size: 15px;
    color: #000;
    margin-bottom: 15px;
  }
  .performance-setting-box {
    width: 70%;
    margin: 10px auto;
    display: flex;
    justify-content: space-between;
    align-items: center;

    .performance-box {
      display: flex;
      align-items: center;
      .performance-box-text {
        font-size: 12px;
        margin-right: 5px;
        width: 30%;
      }
    }
  }
  .nodeaddress-setting-box {
    width: 30%;
    margin: 0 auto;
    display: flex;
    flex-direction: column;
    justify-content: center;
    .nodeaddress-box {
      display: flex;
      align-items: center;
      margin: 5px 0;
      .nodeaddress-box-input {
        width: 50%;
      }
    }
  }
}
</style>
