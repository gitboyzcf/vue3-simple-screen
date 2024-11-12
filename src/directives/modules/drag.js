/**
 * @Description: 窗口拖拽
 * @Author zcf
 * @Date 2024-02-07 16:57
 * @E-mail boyzcf@qq.com
 */

// import { useOutsideSystemStore } from '@/stores/modules/system.js'
// const useSystem = useOutsideSystemStore()

function dgToEle(ele, target) {
  if (ele.className.split(' ').includes(target)) {
    return ele
  } else {
    return dgToEle(ele.parentNode, target)
  }
}
export default {
  mounted(el, binding, vnode) {
    // 如果传递了false就不启用指令，反之true undefined null 不传 则启动
    if (!binding.value && (binding.value ?? '') !== '') return
    // 拖拽实现
    const odiv = dgToEle(el, 'n-modal')
    // bus.on("showDrag", (sta: any) => {
    //   odiv.style.zIndex = sta;
    // }); //bus是用来多个窗口调整位置的，我结合项目进行的层级调整，这里可以去掉
    el.onmousedown = (eve) => {
      // bus.emit("showDrag", 0); //按下的时候发送事件 让其余窗体恢复层级
      odiv.style.zIndex = 1 //当前拖拽的在最前面显示
      eve = eve || window.event
      const mx = eve.pageX //鼠标点击时的坐标
      const my = eve.pageY //鼠标点击时的坐标
      const dleft = odiv.offsetLeft //窗口初始位置
      const dtop = odiv.offsetTop
      const clientWidth = document.documentElement.clientWidth //页面的宽
      const oWidth = odiv.clientWidth //窗口的宽
      const maxX = clientWidth - oWidth + oWidth / 2 // x轴能移动的最大距离
      const clientHeight = document.documentElement.clientHeight //页面的高
      const oHeight = odiv.clientHeight //窗口的高度
      const maxY = clientHeight - oHeight //y轴能移动的最大距离
      document.onmousemove = (e) => {
        e.preventDefault
        const x = e.pageX
        const y = e.pageY
        let left = x - mx + dleft //移动后的新位置
        let top = y - my + dtop //移动后的新位置
        if (left - oWidth / 2 < 0) left = oWidth / 2
        if (left > maxX) left = maxX
        if (top < 0) top = 0
        if (top > maxY) top = maxY

        odiv.style.left = left + 'px'
        odiv.style.top = top + 'px'

        odiv.style.marginLeft = 0
        odiv.style.marginTop = 0
      }
      document.onmouseup = () => {
        document.onmousemove = null
      }
    }
  }
}
