<template>
  <div :id="id" :class="className" :style="{ height, width }" />
</template>
<script setup>
  import * as echarts from 'echarts'
  import 'echarts-liquidfill'

  let myChart = shallowRef(null)

  const props = defineProps({
    // 区分chart
    id: {
      type: String,
      default: 'e-chart',
      required: true
    },
    // 用于添加样式
    className: {
      type: String,
      default: ''
    },
    // echarts 画布宽高
    width: {
      type: String,
      default: '100%'
    },
    height: {
      type: String,
      default: '300px'
    },
    // echarts loading
    loading: {
      type: Boolean,
      default: true
    },
    // echarts需要得 options以及其他配置
    fullOptions: {
      type: Object,
      default: () => ({}),
      required: true
    }
  })

  //重绘图表函数
  const resizeHandler = () => {
    myChart.value.resize()
  }
  //设置防抖，保证无论拖动窗口大小，只执行一次获取浏览器宽高的方法
  const debounce = (fun, delay) => {
    let timer
    return function () {
      if (timer) {
        clearTimeout(timer)
      }
      timer = setTimeout(() => {
        fun()
      }, delay)
    }
  }
  const cancalDebounce = debounce(resizeHandler, 50)

  //页面成功渲染，开始绘制图表
  onMounted(() => {
    //配置为 svg 形式，预防页面缩放而出现模糊问题；图表过于复杂时建议使用 Canvas
    myChart.value = echarts.init(document.getElementById(props.id), { renderer: 'svg' })
    myChart.value.showLoading({
      text: '',
      color: '#409eff',
      textColor: '#000',
      maskColor: 'rgba(56, 155, 255, .45)',
      zlevel: 0,
      lineWidth: 2
    })

    //自适应不同屏幕时改变图表尺寸
    window.addEventListener('resize', cancalDebounce)
  })
  //页面销毁前，销毁事件和实例
  onBeforeUnmount(() => {
    window.removeEventListener('resize', cancalDebounce)
    myChart.value.dispose()
  })
  //监听图表数据时候变化，重新渲染图表
  watch(
    () => [props.fullOptions.options, props.loading],
    () => {
      if (!props.loading) {
        myChart.value.hideLoading()
        myChart.value.setOption(props.fullOptions.options, true)
        nextTick(() => {
          cancalDebounce()
        })
      }
    },
    { deep: true }
  )

  defineExpose({
    myChart
  })
</script>
<style scoped lang="scss"></style>
