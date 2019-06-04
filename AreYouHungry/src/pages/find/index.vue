<template>
  <div class="wrap">
    <div class="head">
      <input type="text" @input="changeVal($e)" v-model="val" placeholder="请输入商家或美食名称">
      <span @click="submit()">提交</span>
    </div>
    <div class="history">
      <div class="title">搜索历史</div>
      <ul>
        <li @click="submit(item)" v-for="(item,index) in historyList" :key="index">
          <span>{{item}}</span>
          <b @click="del(index)">X</b>
        </li>
      </ul>
      <div v-if="flag" class="section">
        <p :class=" data.length ? 'active' : ''">很抱歉，没有搜索结果</p>
        <div :class=" data.length ? 'main_list' : 'active_main'">
          <h4>商家</h4>
          <ul class="list">
            <li v-for="(item,index) in data" @click="herfPage(item.id)" :key="index">
              <div class="left">
                <img :src="'https://elm.cangdu.org/img/'+item.image_path" alt="">
              </div>
              <div class="right">
                <p>{{item.name}}</p>
                <p>月售{{item.recent_order_num}}单</p>
                <p>{{item.float_minimum_order_amount}}起送/距离{{item.distance}}</p>
              </div>
            </li>
          </ul>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import { mapState, mapActions } from 'vuex'
export default {
  data () {
    return {
      flag: false,
      val: '',
      historyList: [],
      num: 0
    }
  },
  computed: {
    ...mapState({
      list: state => state.Find.historyList,
      data: state => state.Find.findList
    })
  },
  created () {
    this.historyList = this.list
  },

  methods: {
    ...mapActions({
      history: 'Find/getHistory'
      // dele: 'Find/delete',
    }),
    async submit (item) {
      if (!item) {
        if (this.val) {
          await this.history(this.val)
          this.dataList = this.data
        }
      } else {
        await this.history(item)
        this.dataList = this.data
      }
      this.flag = true
    },
    changeVal (e) {
      if (!this.val) {
        this.flag = false
      }
    },
    del (key) {
      this.historyList.splice(key, 1)
    },
    herfPage (id) {
      console.log(id)
      wx.navigateTo({
        url: '/pages/index/main'
      })
    }
  }
}
</script>
<style scoped>
.wrap {
  width: 100%;
  height: 100%;
  background: #f5f5f5;
  overflow-y: scroll;
  font-size: 12px;
  display: flex;
  flex-direction: column;
}
.head {
  width: 100%;
  height: 60px;
  background: #fff;
  display: flex;
  justify-content: flex-start;
}
.head input {
  width: 250px;
  height: 36px;
  padding: 0 5px;
  margin-top: 12px;
  margin-left: 10px;
  margin-right: 5px;
  background: #f5f5f5;
  border-radius: 5px;
  border: 1px solid #ccc;
}
.head span{
  width: 80px;
  height: 36px;
  margin: 13px 0 10px;
  border-radius: 5px;
  background: #3190e8;
  color:#fff;
  text-align: center;
  line-height: 36px;
}
.history{
  width: 100%;
  flex: 1;
  position: relative;
}
.history .title{
  width: 100%;
  height: 46px;
  font-size: 16px;
  line-height: 46px;
  padding-left: 20px;
  box-sizing: border-box;
}
.history ul{
  width: 100%;
  background: #fff;
}
ul li {
  width: 100%;
  height: 40px;
  line-height: 40px;
  border-bottom: 1px solid #ccc;
  display: flex;
  justify-content: space-between;
}
li span,b{
  padding: 0 15px;
}
.section {
  width: 100%;
  height: 100%;
  /* flex: 1; */
  position: absolute;
  left: 0;
  top: 0;
  overflow: hidden;
  background: #f5f5f5;
}
.section>p {
  width: 100%;
  height: 30px;
  display: block;
  text-align: center;
  line-height: 30px;
  background: #fff;
  margin-top: 5px;
}
.section .active {
  display: none;
}
.main_list {
  width: 100%;
  height: 100%;
  background: #f5f5f5;
  overflow-y: scroll
}
.main_list h4 {
  font-size: 16px;
  line-height: 40px;
  text-indent: 10px;
  font-weight: 700;
  color: #666;
}
.main_list .list {
  width: 100%;
}
.main_list .list li {
  width: 100%;
  height: 70px;
  padding: 10px;
  background: #fff;
  display: flex;
  border-bottom: 1px solid #ccc;
}
.main_list .list li .left{
  width: 40px;
  height: 100%;
}
.main_list .list li .left img{
  width: 40px;
  height: 40px;
}
.main_list .list li .right{
  flex: 1;
  height: 100%;
}
.main_list .list li .right p{
  width: 100%;
  height: 20px;
  line-height: 20px;
  box-sizing: border-box;
  padding-left: 10px;
}
.main_list .list li .right p:last-child {
  border-bottom: 1px solid #ccc;
}
.active_main {
  display: none;
}
</style>
