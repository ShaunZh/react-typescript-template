import axios from '@/plugins/axios/index'

// 微信授权
function auth<T>(params: T) {
  return axios.post('/coman/auth/authCodeOfPat', params)
}

function authWxJssdk<T>(params: T): Promise<any> {
  return axios.post('/coman/weixin/getJsapiSignature', params)
}

export default {
  auth,
  authWxJssdk
}
