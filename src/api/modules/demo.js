import { request } from '@/api/request.js'
export default {
  API_DEMO_POST(data = {}) {
    return request({
      baseURL: '/mock/login',
      url: 'api/mock',
      method: 'post',
      data
    })
  },

  API_DEMO_GET(params = {}) {
    return request({
      url: '/demo/get',
      method: 'get',
      params
    })
  }
}
