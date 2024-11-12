import i18n from '@/locales'
const {
  global: { t }
} = i18n
const isPip = () => 'documentPictureInPicture' in window
export function pipActuator(targetDomId, popupBtnDomId) {
  if (!isPip()) {
    alert(t('hzhbzc'))
    return
  }
  let targetContainer = null
  let pipWindow = ref(null)
  let pipTip = null
  let target = null

  async function enterPiP() {
    target = document.querySelector(targetDomId)
    targetContainer = target.parentNode

    pipTip = document.createElement('div')
    pipTip.classList.add('pip-tip')
    pipTip.style.height = '100%'
    pipTip.style.display = 'flex'
    pipTip.style.justifyContent = 'center'
    pipTip.style.alignItems = 'center'
    pipTip.style.fontSize = '20px'
    pipTip.style.color = '#fff'
    pipTip.innerHTML = t('hzhms')
    targetContainer.appendChild(pipTip)

    const pipOptions = {
      // initialAspectRatio: target.clientWidth / ,
      width: target.clientWidth,
      height: target.clientHeight,
      lockAspectRatio: true,
      copyStyleSheets: true
    }

    pipWindow.value = await documentPictureInPicture.requestWindow(pipOptions)
    // 从初始文档复制样式表
    // 使画中画里面的画面和初始文档保持一致
    ;[...document.styleSheets].forEach((styleSheet) => {
      try {
        const cssRules = [...styleSheet.cssRules].map((rule) => rule.cssText).join('')
        const style = document.createElement('style')

        style.textContent = cssRules
        pipWindow.value.document.head.appendChild(style)
      } catch (e) {
        const link = document.createElement('link')

        link.rel = 'stylesheet'
        link.type = styleSheet.type
        link.media = styleSheet.media
        link.href = styleSheet.href
        pipWindow.value.document.head.appendChild(link)
      }
    })

    // 将目标添加到PiP窗口
    pipWindow.value.document.body.append(target)

    // 监听pip点击事件
    pipWindow.value.addEventListener('click', () => {
      console.log('点击了画中画文档')
    })
    // 监听PiP结束事件，将目标放回原位
    pipWindow.value.addEventListener('unload', onLeavePiP.bind(pipWindow.value), {
      once: true
    })
  }

  // 当PiP窗口关闭时调用
  function onLeavePiP() {
    if (this !== pipWindow.value) {
      return
    }

    // 将目标添加回目标窗口
    const target = pipWindow.value.document.querySelector(targetDomId)
    targetContainer.append(target)
    targetContainer.removeChild(pipTip)
    pipWindow.value.close()

    pipWindow.value = null
    targetContainer = null
  }
  const btnEventFn = () => {
    if (!pipWindow.value) {
      enterPiP()
    } else {
      onLeavePiP.bind(pipWindow.value)()
    }
  }
  document.querySelector(popupBtnDomId).addEventListener('click', btnEventFn)
  return { btnEventFn, pipWindow }
}
