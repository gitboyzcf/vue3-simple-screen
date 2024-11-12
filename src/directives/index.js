/*
 * @Author: gitboyzcf boyzcf@qq.com
 * @Date: 2023-12-11 09:45:44
 * @LastEditors: gitboyzcf boyzcf@qq.com
 * @LastEditTime: 2023-12-20 14:00:23
 * @FilePath: \project-group\gy-project-group\BusinessServices\src\directives\index.js
 */
import { kebabCase } from 'lodash-es'

function validatorModules(obj) {
  const vueDirectiveKeys = [
    'created',
    'beforeMount',
    'mounted',
    'beforeUpdate',
    'updated',
    'beforeUnmount',
    'unmounted'
  ]
  return vueDirectiveKeys.some((key) => Reflect.has(obj, key))
}

export default {
  install: (app) => {
    const directiveModules = import.meta.glob('./modules/*.js', { eager: true })
    Object.keys(directiveModules).forEach((key) => {
      const directiveName = key.replace(/^\.\/modules\/(.*)\.js$/, '$1')
      const modules = directiveModules[key].default
      if (typeof modules === 'function' || typeof modules === 'object') {
        if (typeof modules === 'object' && !validatorModules(modules)) {
          console.error(
            `${directiveName} 应该包含 created | beforeMount | mounted | beforeUpdate | updated | beforeUnmount | unmounted 等接口`
          )
        }
        app.directive(kebabCase(directiveName), modules)
      } else {
        console.error(`directive 模块的 ${directiveName}.js 导出的不是一个对象或者函数`)
      }
    })
  }
}
