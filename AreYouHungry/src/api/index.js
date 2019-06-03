import request from '../utils/request'

export let find = data => {
  // console.log(data)
  return request.get({
    url: `https://elm.cangdu.org/v4/restaurants?extras[]=restaurant_activity&geohash=31.22299,121.36025&keyword=${data}&type=search`
  })
}
