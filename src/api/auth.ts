import axios from '@/plugins/axios/index'

// 微信授权
function auth<T>(params: T) {
  return axios.post('/auth/authCodeOfPat', params)
}

function authWxJssdk<T>(params: T): Promise<any> {
  return axios.post('/weixin/getJsapiSignature', params)
}

export default {
  auth,
  authWxJssdk
}
