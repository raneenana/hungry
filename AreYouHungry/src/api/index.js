import request from '@/utils/request'

// console.log('request...', request);
// 获取首页分类
export let getCateList = params => {
  return request.get('https://elm.cangdu.org/v2/index_entry?geohash=31.22299,121.36025&group_type=1&flags[]=F')
}
// 获取首页附近商家信息
export let getShopList = params => {
  return request.get('https://elm.cangdu.org/shopping/restaurants?latitude=31.22299&longitude=121.36025&offset=0&limit=20&extras[]=activities&keyword=&restaurant_category_id=&restaurant_category_ids[]=&order_by=&delivery_mode[]=')
}
// 获取搜索的结果
export let find = data => {
  // console.log(data)
  return request.get({
    url: `https://elm.cangdu.org/v4/restaurants?extras[]=restaurant_activity&geohash=31.22299,121.36025&keyword=${data}&type=search`
  })
}
// 获取用户信息
export let getUseInfo = () => {
  return request.get('https://elm.cangdu.org/v1/user')
}
// 获取验证码
export let getCode = () => {
  return request.post('https://elm.cangdu.org/v1/captchas')
}
// 登录
export let login = params => {
  return request.post('https://elm.cangdu.org/v2/login')
}
// 修改密码
export let password = params => {
  return request.post('https://elm.cangdu.org/v2/changepassword')
}
