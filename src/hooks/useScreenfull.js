/**
 * @Description: 用于全屏
 * @Author zcf
 * @Date 2023-09-12 14:25
 * @E-mail boyzcf@qq.com
 */
import screenfull from 'screenfull'
import { useOutsideSystemStore } from '@/stores/modules/system.js'

/**
 *
 * @param {目标元素} targetElement
 * @param {触发元素} triggerElement
 */
export default function useScreenfull(targetElement, triggerElement) {
  const useSystem = useOutsideSystemStore()

  const isFullscreen = ref(false)
  const screenfullChangeHandler = () => {
    isFullscreen.value = screenfull.isFullscreen
    useSystem.isFullscreen = isFullscreen.value
  }
  const openAllScreen = (dom) => {
    if (screenfull.isEnabled) {
      screenfull.toggle(dom)
      screenfull.on('change', screenfullChangeHandler)
    }
  }

  onMounted(() => {
    nextTick(() => {
      const triggerDoms = document.querySelectorAll(triggerElement)
      const targetDoms = document.querySelectorAll(targetElement)
      for (let i = 0; i < triggerDoms.length; i++) {
        triggerDoms[i].addEventListener('click', () => openAllScreen(targetDoms[i]), false)
      }
    })
  })
  onUnmounted(() => {
    screenfull.off('change', screenfullChangeHandler)
  })
  return { isFullscreen }
}
