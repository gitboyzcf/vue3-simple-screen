import { service } from './service'
import storage from '@/utils/storage'
function createRequest(service) {
  function request(config) {
    const configDefault = {
      baseURL: import.meta.env.VITE_APP_API_BASEURL,
      timeout: 15000,
      responseType: 'json',
      headers: {
        // headers ...
        // Authorization: storage.getItem('token') || '',
      }
    }
    const requestConfig = Object.assign(configDefault, config)
    return service(requestConfig)
  }
  return request
}

export const request = createRequest(service)
