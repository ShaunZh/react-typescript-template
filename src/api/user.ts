import axiosConfig from '@utils/request'

function getInfo(params: any) {
  return axiosConfig.get('/mock', params)
}

export default {
  getInfo
}
