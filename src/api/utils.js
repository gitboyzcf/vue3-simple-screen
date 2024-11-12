import { msg as nMsg } from '@/utils'
import { router } from '@/router'
import storage from '@/utils/storage'
import consola from 'consola'

export const httpLogError = (error, msg) => {
  error.message = msg
  consola.error(new Error(msg))
}

export const requestError = (response) => {
  return new Promise((_, reject) => {
    const { data } = response
    const msg = __DEV__ ? `api请求出错 ${response.config.url}：${data.message}` : data.message
    nMsg('error', msg)
    consola.error(new Error(msg))
    reject(data)
  })
}

export const toLogin = () => {
  storage.session.clear()
  storage.local.clear()
  router.push({
    name: 'Login'
  })
}

export const throttleToLogin = useThrottleFn(toLogin, 2000, {
  leading: true,
  trailing: false
})
export const validator = (key) => {
  if (!key.startsWith('API_')) {
    consola.warn(`api名称必须以API_为开头,${key} 应改为 API_${key}`)
  }
}
