/**
 * @Description:
 * @Author zcf
 * @Date 2023-08-17 16:43
 * @E-mail boyzcf@qq.com
 */
import { modulesHandle } from '@/utils'

const apis = modulesHandle(import.meta.glob('./modules/**/*.js', { eager: true }))
export const useRequest = () => {
  return apis
}
