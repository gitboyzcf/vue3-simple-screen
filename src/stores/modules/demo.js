/**
 * @Description:
 * @Author zcf
 * @Date 2023-08-08 14:27
 * @E-mail boyzcf@qq.com
 */
import { piniaStore } from '@/stores'
export const useCounterStore = defineStore('counter', () => {
  const count = ref(0)
  const doubleCount = computed(() => count.value * 2)
  function increment() {
    count.value++
  }

  return { count, doubleCount, increment }
})

export function useOutsideCounterStore() {
  return useCounterStore(piniaStore)
}
