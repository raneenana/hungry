<template>
  <div class="wrap_forget">
    <div class="all">
      <ul class="f_input">
        <li>
          <input placeholder="账号" v-model="value1"/>
        </li>
        <li>
          <input placeholder="旧密码" v-model="value2"/>
        </li>
        <li>
          <input placeholder="请输入新密码" v-model="value3"/>
        </li>
        <li>
          <input placeholder="请确认密码" v-model="value4"/>
        </li>
        <li>
          <input placeholder="验证码" v-model="value5"/>
          <div>
            <img :src='img' alt mode='widthFix'/>
            <div class="word" @click="changeImg()">
              <p>看不清</p>
              <p class="cl_blue">换一张</p>
            </div>
          </div>
        </li>
      </ul>
      <div class="login" @click="sure()">确认修改</div>
    </div>
  </div>
</template>

<script>
import { mapActions } from 'vuex'
export default {
  data () {
    return {
      img: '',
      value1: '',
      value2: '',
      value3: '',
      value4: '',
      value5: ''
    }
  },
  async created () {
    this.img = await this.getCodes()
  },
  methods:{
    ...mapActions({
      // Login: 'Login/Login',
      // getInfo: 'Login/getInfo',
      getCodes: 'Login/getCodes',
      updataPassword: 'Login/updataPassword'
    }),
    async changeImg () {
      this.img = await this.getCodes()
      console.log(this.img)
    },
    sure () {
      if (this.value1 === ''&& this.value2 === ''&& this.value3 === '') {
       wx.showModal({
        title: '提示',
        content: '请输入手机号/邮箱/用户名',
        success (res) {
          if (res.confirm) {
            
          } else if (res.cancel) {
            
          }
        }
      })
     } else {
        this.updataPassword({
          username: this.value1,
          oldpassWord: this.value2,
          newpassword: this.value3,
          confirmpassword: this.value4,
          captcha_code: this.value5
        })
      }
    }
  }
}
</script>

<style scoped>
.wrap_forget{
  width: 100%;
  height: 100%;
  background: #f5f5f5;
  overflow: hidden;
}
.all{
  width: 100%;
}
.f_input{
  width: 100%;
  margin-top: 30rpx;
  box-sizing: border-box;
}
.f_input li{
  display: flex;
  padding: 25rpx;
  background: #fff;
  justify-content: space-between;
  box-sizing: border-box;
  border-bottom: 1px solid #f5f5f5;
}
.f_input li switch{
  height: 10rpx;
}
.f_input li div{
  display: flex;
  justify-content: space-between;
}
.f_input li div img{
  width: 200rpx;
}
.all>p{
  color: red;
  padding: 20rpx;
  font-size: 30rpx;
}
.all>p:last-child{
  margin-right: 100rpx; 
  color: #3b95e9;
}
.login{
  width: 95%;
  color: #fff;
  background: #4cd964;
  margin: 0 auto;
  text-align: center;
  padding: 20rpx;
  border-radius: 10rpx;
  box-sizing: border-box;
}
.word{
  display: flex;
  flex-direction: column;
  font-size: 25rpx;
}
.cl_blue{
  color: #3b95e9;
}
</style>
