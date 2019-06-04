<template>
  <div class="wrap">
    <div class="head">
      <div class="head_content" @click="handleLogin()">
        <div class="use_info">
          <img src="/static/images/上传头像.png" alt mode="widthFix" />
          <div class="info">
            <div class="right">
              <p>登录/注册</p>
              <p>
                <span>
                  <img src="/static/images/shouji.png" alt mode="widthFix" />
                暂无绑定手机号</span>
              </p>
            </div>
          </div>
        </div>
        <p>
          <img src="/static/images/jiantou.png" alt mode="widthFix" />
        </p>
      </div>
    </div>
    <div class="second">
      <ul>
        <li>
          <p>
            <span>0.00</span>元
          </p>
          <p>我的余额</p>
        </li>
        <li>
          <p>
            <span>0</span>个
          </p>
          <p>我的优惠</p>
        </li>
        <li>
          <p>
            <span>0</span>分
          </p>
          <p>我的积分</p>
        </li>
      </ul>
    </div>
    <div class="order">
      <ul>
        <li v-for='(item, index) in orderList' :key="index"  @click="handleOrder(index)">
          <div class="left">
            <img :src="item.img" alt mode="widthFix"/>
            <p>{{item.content}}</p>
          </div>
          <div class="rt">
             <img src="/static/images/jiantouh.png" alt mode="widthFix" />
          </div>
        </li>
      </ul>
    </div>
    <div class="server">
      <ul>
        <li v-for='(item, index) in serList' :key="index">
          <div class="left">
            <img :src="item.img" alt mode="widthFix"/>
            <p>{{item.content}}</p>
          </div>
          <div class="rt">
             <img src="/static/images/jiantouh.png" alt mode="widthFix" />
          </div>
        </li>
      </ul>
    </div>
  </div>
</template>

<script>

export default {
  data () {
    return {
      orderList: [{
        img: '/static/images/我的订单.png',
        content: '我的订单'
      }, {
        img: '/static/images/积分商城.png',
        content: '积分商城'
      }, {
        img: '/static/images/皇冠.png',
        content: '饿了么会员卡'
      }],
      serList: [{
        img: '/static/images/蓝色.png',
        content: '服务中心'
      }, {
        img: '/static/images/饿了么.png',
        content: '下载饿了么App'
      }]
    }
  },
  methods: {
    handleLogin () {
      wx.navigateTo({
        url: '/pages/login/main'
      })
    },
    handleOrder (index) {
      if (index === 0) {
        wx.switchTab({
          url: '/pages/order/main'
        })
      }
    }
  },
  created () {
    // let app = getApp()
  }
}
</script>
<style scoped>
.wrap{
  width:100%;
  height:100%;
  background: #f5f5f5;
}
.head{
  width:100%;
  height:100rpx;
}
.head_content{
  width:100%;
  display: flex;
  justify-content: space-around;
  align-items: center;
  background: #3190e8;
  padding: 20rpx 5rpx 40rpx 10rpx;
}
.head_content>p{
  width:10%;
}
.head_content>p img{
  width:30rpx;
}
.use_info{
  width:80%;
  display: flex;
  align-items: center;
}
.use_info>img{
  width: 130rpx;
  margin-left: 35rpx;
  box-sizing: border-box;
}
.info{
  margin-left: 20rpx;
  color: #fff;
}
.info>img{
  width: 40rpx;
}
.right p:first-child{
  font-size: 44rpx;
}
.right p span img{
  width:40rpx;
}

.second {
  width:100%;
  margin-top: 80rpx;
  background: #fff;
}
.second ul{
  width:100%;
  display: flex;
}
.second ul li{
  flex: 1;
  text-align: center;
  border-right:1px solid #f5f5f5;
}
.second ul li:last-child{
  border: none;
}
.second ul li p:first-child{
  width: 100%;
  padding: 30rpx 0;
}
.second ul li p:last-child{
  font-size: 30rpx;
  padding-bottom: 20rpx;
}
.second ul li p:first-child span{
  font-size: 50rpx;
}
.second ul li:first-child p:first-child span{
  color: orange;
}
.second ul li:nth-child(2) p:first-child span{
  color: red;
}
.second ul li:nth-child(3) p:first-child span{
  color: green;
}

.order{
  width:100%;
  display: flex;
  margin-top: 20rpx;
  flex-direction: column;
  background: #fff;
}
.order ul{
  width: 100%;
  display: flex;
  flex-direction: column;
}
.order ul li{
  width: 100%;
  display: flex;
  justify-content: space-between;
  padding: 25rpx;
  align-items: center;
  border-bottom: 1px solid #f5f5f5;
}
.order ul li .left{
  width: 90%;
  display: flex;
}
.order ul li .left img{
  width: 30rpx;
  margin: 15rpx 10rpx 0 0;
}
.order ul li .rt{
  width: 10%;
}
.order ul li .rt img{
  width: 30rpx;
}

.server{
  width:100%;
  display: flex;
  margin-top: 20rpx;
  flex-direction: column;
  background: #fff;
}
.server ul{
  width: 100%;
  display: flex;
  flex-direction: column;
}
.server ul li{
  width: 100%;
  display: flex;
  justify-content: space-between;
  padding: 25rpx;
  align-items: center;
  border-bottom: 1px solid #f5f5f5;
}
.server ul li .left{
  width: 90%;
  display: flex;
}
.server ul li .left img{
  width: 30rpx;
  margin: 15rpx 10rpx 0 0;
}
.server ul li .rt{
  width: 10%;
}
.server ul li .rt img{
  width: 30rpx;
}
</style>
