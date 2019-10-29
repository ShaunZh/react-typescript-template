import axios from 'axios'
import { Toast } from 'antd-mobile'

const token = ''

let getToken = function(): string {
  return 'temp-token'
}
// create an axios instance
const service = axios.create({
  baseURL: 'http://0.0.0.0:7300/mock/5d89e18e745cd0003ca5f615/example', // url = base url + request url
  // withCredentials: true, // send cookies when cross-domain requests
  timeout: 30000 // request timeout
})

// request interceptor
service.interceptors.request.use(
  (config) => {
    // do something before request is sent
    if (token) {
      // let each request carry token
      // ['X-Token'] is a custom headers key
      // please modify it according to the actual situation
      config.headers['Authorization'] = getToken()
    }
    return config
  },
  (error) => {
    // do something with request error
    console.log(error) // for debug
    return Promise.reject(error)
  }
)

// response interceptor
service.interceptors.response.use(
  /**
   * If you want to get http information such as headers or status
   * Please return  response => response
   */

  /**
   * Determine the request status by custom code
   * Here is just an example
   * You can also judge the status by HTTP Status Code
   */
  (response) => {
    const res = response.data

    // if the custom code is not 20000, it is judged as an error.
    if (res.code !== 200) {
      // 验证错误， 弹出错误信息，只有该错误码才弹出错误信息
      if (res.code === 406) {
        Toast.hide()
        Toast.info(res.msg, 2)
      } else if (res.code === 600) {
        // 无权限操作
      } else if (res.code === 500) {
        // 不弹出的错误信息，在终端打印出来
        console.error('系统发生异常，请联系管理员')
      }
      if (res.msg) {
        // 将后台接口的msg字段转为message字段传给前端，兼容 new Error('message string') 的写法
        res.message = res.msg
      }
      return Promise.reject(res)
    } else {
      return res
    }
  },
  (error) => {
    Toast.hide()
    console.log('err' + error) // for debug
    Toast.info(error.message, 2)
    return Promise.reject(error)
  }
)

export default service
