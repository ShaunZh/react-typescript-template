import axios from '@/plugins/axios/index'

function getInfo(params: any) {
  return axios.get('/mock', params)
}

export default {
  getInfo
}
