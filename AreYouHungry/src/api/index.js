import request from '@/utils/request'

// console.log('request...', request);
// 获取首页分类
export let getCateList = params=>{
  return request.get('https://elm.cangdu.org/v2/index_entry?geohash=31.22299,121.36025&group_type=1&flags[]=F')
}
// 获取首页附近商家信息
export let getShopList = params => {
  return request.get('https://elm.cangdu.org/shopping/restaurants?latitude=31.22299&longitude=121.36025&offset=0&limit=20&extras[]=activities&keyword=&restaurant_category_id=&restaurant_category_ids[]=&order_by=&delivery_mode[]=')
}
