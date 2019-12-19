import axios from 'axios'
axios.defaults.baseURL="/api/api"
axios.interceptors.response.use(config=>{
  return config.data;
})
export function search(meg) {
   return axios.request({
     url:'search',
     method:'get',
     params:{keyWords:meg}
   })
}
export function initBook() {
  return axios.request({
    url:'search',
    method:'get',
  })
}
export function listByKind(key) {
  return axios.request({
    url:'/kind/'+key,
    method:'get'
  })
}
export function getAllKinds() {
  return axios.request({
    url:'/getAllKinds',
    method:'get'
  })
}
export function getContent(id) {
  return axios.request({
    url:'/content/'+id,
    method:'get'
  })
}
export default axios;
