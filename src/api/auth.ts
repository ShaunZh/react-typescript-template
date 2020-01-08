import axios from '@/plugins/axios/index'

export interface Login {
  username: string
  password: string
}

// 微信授权
function auth<T>(params: T) {
  return axios.post('/auth/authCodeOfPat', params)
}

function authWxJssdk<T>(params: T) {
  return axios.post('/weixin/getJsapiSignature', params)
}
function login(params: Login): Promise<any> {
  return axios.post('/auth/authCodeOfPat', params)
}

export default {
  auth,
  authWxJssdk,
  login
}
