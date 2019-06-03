<template>
  <div class="wrap">
    <div class="head">
      <input type="text" v-model="val" placeholder="请输入商家或美食名称">
      <span @click="submit()">提交</span>
    </div>
    <div class="history">
      <div class="title">搜索历史</div>
      <ul>
        <li v-for="(item,index) in historyList" :key="index">
          <span>{{item}}</span>
          <b>X</b>
        </li>
      </ul>
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
      historyList: []
    }
  },
  computed: {
    ...mapState({
      list: state => state.Find.historyList
    })
  },
  created () {
    this.historyList = this.list
    console.log(this.list)
  },

  methods: {
    ...mapActions({
      history: 'Find/getHistory'
    }),
    submit () {
      if (this.val) {
        this.history(this.val)
      }
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
}
.head {
  width: 100%;
  height: 60px;
  background: #fff;
  display: flex;
  justify-content: flex-start;
}
.head input {
  width: 260px;
  height: 36px;
  margin-top: 12px;
  margin-left: 20px;
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

</style>
