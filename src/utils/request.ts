import axios from 'axios'
import route from '@/router'
import qs from 'qs'
import { getToken, md5s } from '@/utils/auth'

// create an axios instance
const service = axios.create({
  baseURL: 'https://m_college.quansuwangluo.com/api/app', // api 的 base_url
  // --md5加密
  transformRequest: [(data: any) => {
    return qs.stringify(md5s(Object.assign({}, data)))
  }],
  // --
  timeout: 5000 // request timeout
})
// console.log(process.env.BASE_API)
// request interceptor
service.interceptors.request.use(

  (config) => {
    // 添加token
    if (getToken()) {
      config.headers['X-Token'] = getToken()
    }
    // store.commit('SET_PARAMS', config)
    // console.log(config.url)
    config.headers.Accept = 'application/prs.college.v2+json'
    return config
  },
  (error) => {
    // Do something with request error
    console.log(error) // for debug
    Promise.reject(error)
  }
)

// response interceptor
service.interceptors.response.use(
  (response) => {
    // console.log(route)
    return Promise.resolve(response.data)
    // if (response.data.status === 1) {
    //   return Promise.resolve(response.data)
    // } else if (response.data.status === 0) {
    //   showMsg(response.data.message, null)
    //   return Promise.reject(response.data.message)
    // } else if (response.data.status === 10) {
    //   showMsg(response.data.message, null)
    //   setTimeout(() => {
    //     store.dispatch('FedLogOut').then(() => {
    //       route.push('main')
    //       location.reload()
    //     })
    //   }, 2000)
    // }
  },
  (error) => {
    return Promise.reject(error)
  }
)

export default service
