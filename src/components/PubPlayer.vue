<template>
  <div :id="id"></div>
</template>

<script setup>
  /**
   * @Description: 公共播放组件
   * @Author zcf
   * @Date 2024-05-22 15:34
   * @E-mail boyzcf@qq.com
   */
  // https://h5player.bytedance.com/
  import Player, { I18N } from 'xgplayer'
  import 'xgplayer/dist/index.min.css'
  import zh from 'xgplayer/es/lang/zh-cn'
  import en from 'xgplayer/es/lang/en'
  import { useOutsideSystemStore } from '@/stores/modules/system.js'
  const useSystem = useOutsideSystemStore()
  I18N.use(zh)
  I18N.use(en)
  const props = defineProps({
    // 播放器容器id
    id: {
      type: String,
      default: 'pub-player'
    },
    // 播放地址
    url: {
      type: String
    },
    // 播放器宽高
    w: {
      type: String,
      default: '400px'
    },
    h: {
      type: String,
      default: '200px'
    },
    // 自动播放
    autoplay: {
      type: Boolean,
      default: false
    }
  })
  const player = shallowRef(null)

  watch(
    () => useSystem.language,
    (newV) => {
      player.value.lang = newV === 'zh-CN' ? 'zh' : newV
    }
  )

  onMounted(() => {
    nextTick(() => {
      player.value = new Player({
        lang: useSystem.language === 'zh-CN' ? 'zh' : useSystem.language,
        id: props.id,
        url: props.url,
        height: props.h,
        width: props.w,
        autoplay: props.autoplay,
        commonStyle: {
          // 进度条底色
          progressColor: '',
          // 播放完成部分进度条底色
          playedColor: '#5482ED',
          // 缓存部分进度条底色
          cachedColor: '',
          // 进度条滑块样式
          sliderBtnStyle: {},
          // 音量颜色
          volumeColor: '#5482ED'
        },
        poster: {}
        // ...
      })
    })
  })

  defineExpose({
    player
  })
</script>
