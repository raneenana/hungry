<template>
  <div class="description">
    <header class="description_header">
       <image :src="picSrc+shopDetail.image_path" />
       <div>
         <h2>{{shopDetail.name}}</h2>
         <p class="description_header_info">商家配送 / 分钟送达 / {{shopDetail.piecewise_agent_fee&&shopDetail.piecewise_agent_fee.tips}}</p>
         <p>公告：{{shopDetail.promotion_info}}</p>
       </div>
    </header>
    <nav>
      <div>
        <span class="active">商品</span>
      </div>
      <div>
        <span>评价</span>
      </div>
    </nav>
    <section>
      <div class="tab" ref="tabs">
        <scroll-view scroll-y style="height:100%">
          <li v-for='(item,index) in menuDetail' 
              :class="index===currentIndex ? 'bg' : ''"
              :key="index"
              @click="selectMenu(index)"
          >
            {{item.name}}
          </li>
        </scroll-view>
      </div>
      <div class="right">
        <scroll-view 
          scroll-y 
          style="height:100%"
          :scroll-into-view="contentId"
          scroll-with-animation="true"
        >
          <div class="block" v-for="(item,index) in menuDetail" :key="index" :id="'con_'+index">
            <h2>{{item.name}}<span>{{item.description}}</span></h2>
            <div class="food_info">
              <dl class="small" v-for="(v,i) in item.foods" :key="i">
                <dt>
                  <image :src="picSrc+v.image_path" alt='' />
                </dt>
                <dd>
                  <h4>{{v.name}}</h4>
                  <p>包含：肌肉</p>
                  <p>{{v.tips}} 好评率<b>{{v.satisfy_rate}}%</b></p>
                  <div class="bot">
                    <!-- <div>￥{{v.specfoods[0].price?v.specfoods[0].price:0}}</div> -->
                    <div>￥20</div>
                    <div class="brit">
                      <span>5份起售</span>
                      <div class="cont" style="color:#fff">+</div>
                    </div>
                  </div>
                </dd>
              </dl>
            </div>
          </div>
        </scroll-view>
      </div>
    </section>
    <footer>

    </footer>
  </div>
</template>

<script>
import { mapState, mapActions } from 'vuex'
export default {
  data () {
    return {
      picSrc: 'https://elm.cangdu.org/img/',
      contentId: '', // scroll-into-view滚动到对应的id
      currentIndex: 0
    }
  },
  computed: {
    ...mapState({
      shopDetail: state => state.shopDetail.shopDetail,
      menuDetail: state => state.shopDetail.menuDetail
    })
  },
  methods: {
    ...mapActions({
      getShopDetail: 'shopDetail/getShopDetail',
      getMenuDetail: 'shopDetail/getMenuDetail'
    }),
    selectMenu (index) {
      this.contentId = `con_${index}`
      this.currentIndex = index
    }
  },
  async mounted () {
    let id = this.$root.$mp.query.id
    await this.getShopDetail(id)
    await this.getMenuDetail(id)
    console.log('shopDetail', this.menuDetail)
  }
}
</script>

<style scoped>
.description{
  width: 100%;
  height: 100%;
  display: flex;
  flex-direction: column;
  font-size: 12px;
  overflow: hidden;
  background: #f5f5f5;
}
.description_header{
  height: 90px;
  background: rgba(119,103,137,.43);
  padding: 8px 10px;
  display: flex;
  box-sizing: border-box;
  /* align-items: center; */
}
.description_header image{
  width: 70px;
  height: 70px;
}
.description_header div{
  padding: 0 5px;
}
.description_header div h2{
  font-weight: 700;
  color: #fff;
  font-size: 16px;
  margin-bottom: 8px;
}
.description_header div p{
  color: #fff;
  font-size: 11px;
}
.description_header_info{
  margin-bottom: 8px;
}
nav{
  height: 50px;
  border-bottom: 1px solid #ebebeb;
  display: flex;
  justify-content: space-around;
  align-items: center;
  background: #fff;
}
nav div span{
  font-size: 14px;
  padding: 4px 2px;
  color: #666;
  border-bottom: 3px solid #fff;
}
nav div .active{
  color: #3190e8;
  border-bottom: 3px solid #3190e8;
}
section{
  flex: 1;
  /* width: 100%; */
  display: flex;
  overflow: hidden;
}
.bg {
  background: #fff;
  border-left: solid 3px #3190e8;
}

.tab {
  width: 90px;
  background: #f5f5f5;
  height: 100%;
  flex-shrink: 0;
}
.tab li {
  font-size: 14px;
  color: #666;
  border-bottom: solid 1px #ededed;
  height: 50px;
  line-height: 50px;
  text-align: center;
}

.right {
  flex: 1
}

.block {
  /* width: 100%; */
  height: auto;
}

.block h2 {
  display: flex;
  font-size: 16px;
  height: 40px;
  align-items: center;
  padding-left: 10px;
  box-sizing: border-box;
  background: #f5f5f5
}

.block span {
  font-size: 14px;
  padding-left: 10px;
  box-sizing: border-box;
  color: #666;
  font-weight: 100
}

.small dt {
  width: 100px;
  /* height: 100px; */
}
.small dt image{
  width: 100px;
  height: 100px ;
}
.small {
  display: flex;
  /* width: 100%; */
  justify-content: space-between;
  padding: 10px;
  box-sizing: border-box;
  border-bottom: solid 1px #eee;
  background: #fff;
}

.small dd {
  flex: 1;
  box-sizing: border-box;
  padding: 0 5px;
}

.small dd p {
  font-size: 12px;
  color: #666;
  /* width: 100%; */
  overflow: hidden;
  white-space: nowrap;
  text-overflow: ellipsis;
}

.small h4 {
  font-size: 16px;
  font-weight: 800;
}

.small .bot {
  display: flex;
  justify-content: space-between;
  align-items: center;
}

.bot div:first-child {
  color: rgb(255, 83, 57);
  font-weight: 800;
}

.brit {
  display: flex;
}

.cont {
  /* margin-left: 5px; */
  width: 18px;
  height: 18px;
  font-size: 10px;
  line-height: 18px;
  text-align: center;
  background: #3190e8;
  border-radius: 50%;
}
footer{
  height: 45px;
  background: powderblue;
}
</style>
