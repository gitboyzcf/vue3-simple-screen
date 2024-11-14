import mitt from 'mitt'

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
  // toast.add({ severity: type, summary: text })
  console.log(text)
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

export { getStaticResource, msg, modulesHandle, $mitt }
