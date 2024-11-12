/**
 * @author zcf
 * @E-mail boyzcf@qq.com
 * @description:
 * @date 2023-08-08 13:56
 */
import { useOutsideSystemStore } from '@/stores/modules/system.js'

export async function urlParamsLogin(router) {
  const useSystem = useOutsideSystemStore()
  let params = useUrlSearchParams('hash')
  if (params.t) {
    console.info('开启系统免等')
    useSystem.noLogin(params).then(() => {
      console.info('免登成功')
      router.replace({ path: '/' })
    })
  }
}

export const usePageTitle = (to) => {
  const projectTitle = import.meta.env.VITE_APP_TITLE
  const rawTitle = normalizeTitle(to.meta.title)
  const title = useTitle()
  title.value = rawTitle ? `${projectTitle} | ${rawTitle}` : projectTitle
  function normalizeTitle(raw) {
    return typeof raw === 'function' ? raw() : raw
  }
}
