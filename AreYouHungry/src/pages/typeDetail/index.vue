<template>
  <div>
    <div class="shoplist">
      <h5 class="shoplist_title">附近商家</h5>
      <ul>
        <li class="shop_li" v-for="(item,index) in shopList" :key='index' @click='goListDetail(item.id)'>
          <div class="pic">
            <image :src="picSrc+item.image_path" />
          </div>
          <div class="content">
            <div class="content_title">
              <p>
                <span>品牌</span>
                <span>{{item.name}}</span>
              </p>
              <p>保 准 票</p>
            </div>
            <div class="sales_status">
              <div>
                <span class="star">★★★★★</span>
                <span class="grade">{{item.rating}}</span>
                <span class="scale">月售{{item.recent_order_num}}单</span>
              </div>
              <div class="tags">
                <span>蜂鸟专送</span>
                <span>准时达</span>
              </div>
            </div>
            <div class="shop_item_info">
              <div>￥{{item.float_minimum_order_amount}}起送 /
                {{item.piecewise_agent_fee&&item.piecewise_agent_fee.tips}}</div>
              <div><span style="color:#999">{{item.distance}}</span> / <span
                  style="color: #3190e8">{{item.order_lead_time}}</span></div>
            </div>
          </div>
        </li>
      </ul>
    </div>
  </div>
</template>

<script>
  import { mapActions, mapState } from 'vuex'
  export default {
    data () {
      return {
        picSrc: 'https://elm.cangdu.org/img/'
      }
    },
    computed: {
      ...mapState({
        shopList: state => state.index.shopList
      })
    },
    methods: {
      ...mapActions({
        getShopList: 'index/getShopList'
      }),
      goListDetail (id) {
        wx.navigateTo({
          url: '../shopDetail/main?id='+id
        })
      }
    },
    async mounted () {
      let tit = this.$root.$mp.query.title
      wx.setNavigationBarTitle({
        title: tit
      })
      await this.getFoodList()
      await this.getShopList()
      this.first = this.foodList.slice(0, 8);
      this.seconed = this.foodList.slice(8);
    }
  }
</script>

<style scoped>
  header {
    height: 45px;
    width: 100%;
    background: #3190e8;
    text-align: center;
    line-height: 45px;
    font-size: 14px;
    color: #fff;
  }

  .shoplist {
    background: #fff;
    box-sizing: border-box;
  }

  .shoplist_title {
    height: 30px;
    font-size: 12px;
    padding-left: 10px;
    line-height: 30px;
    color: #999;
    margin-bottom: 5px;
  }

  .shoplist ul {}

  .shop_li {
    padding: 10px 10px;
    display: flex;
    border-bottom: 1px solid #f1f1f1;
  }

  .pic image {
    width: 60px;
    height: 60px;
  }

  .content {
    flex: 1;
    display: flex;
    flex-direction: column;
    padding: 0 5px;
  }

  .content>div {
    display: flex;
    /* justify-content: space-between; */
    /* align-items: flex-end; */
  }

  .content_title {
    display: flex;
    justify-content: space-between;
  }

  .content_title p:first-child span:first-child {
    background: #ffd930;
    font-size: 10px;
    font-weight: 600;
    margin-right: 5px;
    padding: 0 2px;
  }

  .content_title p:first-child span:last-child {
    font-weight: bold;
    font-size: 14px;
  }

  .content_title p:last-child {
    font-size: 10px;
    color: #999;
  }

  .sales_status {
    margin-top: 5px;
    display: flex;
    align-items: center;
    justify-content: space-between;
    font-size: 10px;
  }

  .sales_status>div {
    display: flex;
    color: #666;
  }

  .star {
    font-size: 12px;
    color: darkorange;
  }

  .grade {
    font-size: 12px;
    color: orangered;
    margin: 0 4px;
  }

  .tags span {
    border: solid 1px #3190e8;
    margin: 0 1px;
    font-size: 9px;
    padding: 0 2px;
    color: #3190e8;
    border-radius: 2px;
  }

  .tags span:first-child {
    color: #fff;
    background: #3190e8;
  }

  .shop_item_info {
    margin-top: 8px;
    font-size: 10px;
    display: flex;
    justify-content: space-between;
    color: #666;
  }
</style>