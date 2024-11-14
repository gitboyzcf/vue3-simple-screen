/**
 * @Description:
 * @Author zcf
 * @Date 2023-08-08 14:27
 * @E-mail boyzcf@qq.com
 */
import { piniaStore } from '@/stores'
export const useHomeStore = defineStore('home', () => {
  const codes = ref([100000])
  const isNull = ref(false)
  function setCode(code) {
    isNull.value = true
    codes.value.push(code)
  }
  function clear() {
    codes.value.splice(0, codes.value.length)
  }

  watch(
    codes,
    (newV) => {
      console.log(newV)

      if (newV.length === 1) {
        isNull.value = false
      }
    },
    { deep: true }
  )

  return { codes, isNull, setCode, clear }
})

export function useOutsideHomeStore() {
  return useHomeStore(piniaStore)
}
