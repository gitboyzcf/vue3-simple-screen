/**
 * @Description: 本地存储
 * @Author zcf
 * @Date 2023-09-20 13:25
 * @E-mail boyzcf@qq.com
 */
const PREFIX = import.meta.env.VITE_APP_PREFIX

const storage = {
  local: {
    has: (key) => {
      return !!localStorage.getItem(`${PREFIX}${key}`)
    },
    get: (key) => {
      return localStorage.getItem(`${PREFIX}${key}`)
    },
    set: (key, value) => {
      localStorage.setItem(`${PREFIX}${key}`, value)
    },
    remove: (key) => {
      localStorage.removeItem(`${PREFIX}${key}`)
    },
    clear: () => {
      localStorage.clear()
    }
  },
  session: {
    has: (key) => {
      return !!sessionStorage.getItem(`${PREFIX}${key}`)
    },
    get: (key) => {
      return sessionStorage.getItem(`${PREFIX}${key}`)
    },
    set: (key, value) => {
      sessionStorage.setItem(`${PREFIX}${key}`, value)
    },
    remove: (key) => {
      sessionStorage.removeItem(`${PREFIX}${key}`)
    },
    clear: () => {
      sessionStorage.clear()
    }
  }
}

export default storage
