import { service } from './service'
function createRequest(service) {
  function request(config) {
    const configDefault = {
      baseURL: import.meta.env.VITE_APP_API_BASEURL,
      timeout: 15000,
      responseType: 'json',
      headers: {}
    }
    const requestConfig = Object.assign(configDefault, config)
    return service(requestConfig)
  }
  return request
}

export const request = createRequest(service)
