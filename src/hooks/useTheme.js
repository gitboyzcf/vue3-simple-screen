import { useOutsideSystemStore } from '@/stores/modules/system'
const useSystemStore = useOutsideSystemStore()

export function useTheme() {
  const toggleDarkModel = ref(useSystemStore.scheme == 'dark')

  const isDark = useDark({
    selector: 'html',
    attribute: 'class',
    valueDark: 'dark',
    valueLight: 'light'
  })
  const toggleDark = useToggle(isDark)
  const toggleTheme = (event) => {
    const x = event.clientX
    const y = event.clientY
    const endRadius = Math.hypot(Math.max(x, innerWidth - x), Math.max(y, innerHeight - y))

    // 兼容性处理
    if (!document.startViewTransition) {
      toggleDark()
      return
    }
    const transition = document.startViewTransition(() => {
      toggleDark()
    })

    transition.ready.then(() => {
      const clipPath = [`circle(0px at ${x}px ${y}px)`, `circle(${endRadius}px at ${x}px ${y}px)`]
      document.documentElement.animate(
        {
          clipPath: isDark.value ? [...clipPath].reverse() : clipPath
        },
        {
          duration: 400,
          easing: 'ease-in',
          pseudoElement: isDark.value
            ? '::view-transition-old(root)'
            : '::view-transition-new(root)'
        }
      )
    })
  }
  watch(isDark, () => {
    useSystemStore.scheme = isDark.value ? 'dark' : 'auto'
  })

  return {
    toggleDarkModel,
    toggleTheme
  }
}
