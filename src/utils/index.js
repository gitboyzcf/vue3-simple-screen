import { createDiscreteApi } from 'naive-ui'
import mitt from 'mitt'
import dayjs from 'dayjs'
const { message, dialog } = createDiscreteApi(['message', 'dialog'], {
  messageProviderProps: { duration: 2000 }
})
/**
 * 获取资源路径
 * @param {相对路径} relativePath
 *    如果要获取assets的文件文件夹下的images中的图片
 *      relativePath 传入 assets/images/name.png
 * @returns 文件所在路径
 */
const getStaticResource = (relativePath) => {
  return new URL(`../${relativePath}`, import.meta.url)
}

/**
 * 消息提示
 * @param {弹出消息类型=》 info error warning success loading } type
 * @param {弹出消息文本} text
 * @param {配置} config
 */
const msg = (type, text) => {
  message[type](text)
}

/**
 * 模块话方式处理 默认处理 modules文件夹下的所有js文件 内容以export default导出的文件
 * @param { 模块内容集合 } moduleContext
 * @returns modules集合
 */
const modulesHandle = (moduleContext = {}) => {
  if (!Object.keys(moduleContext).length) return
  const modules = {}
  Object.keys(moduleContext).forEach((v) => {
    for (let key in moduleContext[v].default) {
      modules[key] = moduleContext[v].default[key]
    }
  })
  return modules
}

/**
 *
 * @returns 订阅/发布者对象
 */
const $mitt = mitt()

/**
 *
 * 消息弹窗
 * @param {弹窗类型} type error | info | success | warning
 * @param {弹窗标题} title
 * @param {弹窗内容} content
 * @param {确认按钮} positiveText 确认按钮的文字，不填对应的按钮不会出现
 * @param {取消按钮} negativeText 取消按钮的文字，不填对应的按钮不会出现
 * @param {确认回调} okCallback
 * @param {取消回调} noCallback
 */
const dialogFn = (type, title, content, okCallback, noCallback, positiveText, negativeText) => {
  dialog[type]({
    title,
    content,
    positiveText,
    negativeText,
    onPositiveClick: () => {
      okCallback()
    },
    onNegativeClick: () => {
      noCallback()
    }
  })
}

export { getStaticResource, msg, modulesHandle, $mitt, dialogFn }
