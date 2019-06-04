<template>
  <div class="wrap">
    <head>
      <div class="con">
        <header class="con_header">
          <span>当前积分</span>
          <span @click="goShuoming()">
            <img src="/static/images/question.png" alt="">
            积分说明
          </span>
        </header>
        <p class="con_points"><span>{{num}}</span>分</p>
        <div class="con_convert" @click="exchange()">积分兑换商品</div>
      </div>
    </head>
    <p class="title">最近三十天的记录</p>
    <div class="main_record">
      <img src="/static/images/record_0.png" alt="">
      <p>最近30天无积分提交记录</p>
      <p>快去下单赚取大量积分吧</p>
    </div>
  </div>
</template>

<script>
export default {
  data () {
    return {
      num: 0
    }
  },
  created () {},
  methods: {
    exchange () {
      console.log('显示蒙层')
      if (!this.num) {
        wx.showModal({
        title: '快去下单赚取大量的积分吧',
        showCancel: false,
        confirmText: '确认',
        confirmColor: '#4cd964',
        success (res) {
          if (res.confirm) {
            console.log('用户点击确定')
          } else if (res.cancel) {
            console.log('用户点击取消')
          }
        }
      })
      }
    },
    goShuoming () {
      wx.navigateTo({
        url: '/pages/pointDetail/main'
      })
    }
  }
}
</script>

<style scoped>
.wrap {
  width: 100%;
  height: 100%;
  background: #eee;
  /* display: flex;
  flex-direction: column; */
  font-size: 12px;
}
.wrap head {
  width: 100%;
  height: 170px;
  background: #3190e8;
  overflow: hidden;
}
.wrap head .con {
  width: 96%;
  height: 150px;
  margin: 10px 2%;
  border-radius: 5px;
  box-sizing: border-box;
  padding: 10px;
  background: #fff;
}
.con_header {
  width: 100%;
  height: 30px;
  line-height: 30px;
  display: flex;
  justify-content: space-between;
}
.con_header span img {
  display: inline-block;
  width: 14px;
  height: 14px;
  margin: 0 5px;
  line-height: 30px;
}

.con_points {
  width: 100%;
  height: 50px;
}
.con_points span{
  font-size: 30px;
  padding-right: 10px;
}
.con_convert {
  width: 100%;
  height: 40px;
  margin-top: 10px;
  background: #fe6d47;
  border-radius: 5px;
  color: #ffffff;
  font-size: 20px;
  text-align: center;
  line-height: 40px;
}
.title {
  width: 100%;
  height: 46px;
  line-height: 46px;
  box-sizing: border-box;
  padding-left: 20px;
  color: #999;
}
.main_record {
  width: 100%;
}
.main_record img {
  width: 100%;
}
.main_record p {
  width: 100%;
  height: 30px;
  text-align: center;
  line-height: 30px;
  color: #999;
}
.main_record p:first-of-type {
  font-size: 16px;
  color: #666;
}
</style>
