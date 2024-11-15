import { request } from '@/api/request.js'
export default {
  API_GET_GEO_JSON_GET(params = {}) {
    return request({
      url: `/vue3-simple-screen/geojson/${params.code}_full.json`,
      method: 'get'
    })
  }
}
