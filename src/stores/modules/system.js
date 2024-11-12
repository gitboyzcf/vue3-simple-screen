import { piniaStore } from '@/stores'
import storage from '@/utils/storage'

export const useSystemStore = defineStore('systemStore', {
  state: () => ({
    ip:
      import.meta.env.VITE_APP_API_BASEURL === '/'
        ? window.location.origin
        : import.meta.env.VITE_APP_API_BASEURL,
    language: storage.local.get('language') || navigator.language || navigator.userLanguage, // 语言
    scheme: localStorage.getItem('vueuse-color-scheme') != 'dark' ? 'auto' : 'dark' // 主题
  }),
  getters: {
    ipF() {
      return this.ip.split('//')[1]
    }
  },
  actions: {
    // 退出登录
    async loginOut(router) {
      clearInterval(this.renewalTimer)
      storage.session.clear()
      storage.local.clear()
      router.replace('/login')
    }
  }
})

export function useOutsideSystemStore() {
  return useSystemStore(piniaStore)
}
