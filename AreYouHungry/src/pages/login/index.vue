<template>
  <div class="wrap">
    <div class="all">
      <ul class="f_input">
        <li>
          <input placeholder="账号" v-model="value1"/>
        </li>
        <li>
          <input placeholder="密码" v-model="value2"/>
          <div>
            <view class="section section_gap">
              <view class="section__title"></view>
              <switch name="switch"/>
            </view>
          </div>
        </li>
        <li>
          <input placeholder="验证码" v-model="value3"/>
          <div>
            <img :src='img' alt mode='widthFix'/>
            <div class="word" @click="changeImg()">
              <p>看不清</p>
              <p class="cl_blue">换一张</p>
            </div>
          </div>
        </li>
      </ul>
      <p>
        温馨提示：未注册过的账号，登录时将自动注册
      </p>
      <p>
        注册过的用户可凭账号密码登录
      </p>
      <div class="login" @click="login()">登录</div>
      <p class="rest" @click="forget()"><span></span>重置密码?</p>
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
      value3: ''
    }
  },
  async created () {
    this.img = await this.getCodes()
    await this.getInfo()
  },
  mounted(){
    console.log(this.value1)
  },
  methods: {
    ...mapActions({
      Login: 'Login/Login',
      getInfo: 'Login/getInfo',
      getCodes: 'Login/getCodes'
    }),
    async changeImg () {
      this.img = await this.getCodes()
      console.log(this.img)
    },
    login () {
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
       this.Login({
         username: this.value1,
         password: this.value2,
         captcha_code: this.value3
       })
     }
    },
    forget () {
      wx.navigateTo({
        url: '/pages/forget/main'
      })
    }
  }
}
</script>

<style scoped>
.wrap{
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
.rest{
  width: 100%;
  display: flex;
  padding: 20rpx;
  justify-content: space-around;
}
.rest span{
  width: 50%;
}
</style>
