<template>
  <div class="weather-box">
    <template v-if="date || week">
      <div class="weather-box-time flex gap-2 color-#f0f0f0">
        <span>{{ date?.split(' ')[0] }}</span>
        <span>{{ week }}</span>
        <span>{{ date?.split(' ')[1] }}</span>
      </div>
    </template>
  </div>
</template>
<script setup>
  import dayjs from 'dayjs'
  const data = reactive({})
  const latitude = ref('')
  const longitude = ref('')

  defineOptions({ name: 'WeatherBox' })

  const handleGetLocation = () => {
    if (typeof window !== 'undefined' && window.navigator.geolocation) {
      window.navigator.geolocation.getCurrentPosition(
        (result) => {
          console.log(result)
          latitude.value = result.coords.latitude.toFixed(6)
          longitude.value = result.coords.longitude.toFixed(6)
        },
        (error) => {
          switch (error.code) {
            case 0:
              console.error('window.navigator.geolocation 获取位置信息出错！')
              break
            case 1:
              console.error('window.navigator.geolocation 阻止该页面获取位置信息！')
              break
            case 2:
              console.error('window.navigator.geolocation 浏览器无法确定您的位置！')
              break
            case 3:
              console.error('window.navigator.geolocation 获取位置信息超时！')
              break
          }
        }
      )
    } else {
      console.error('window.navigator.geolocation 浏览器不支持 HTML5 的定位功能！')
    }
  }
  function getAddRess(url) {
    return new Promise((resolve, reject) => {
      fetch(url)
        .then((response) => response.json())
        .then((data) => {
          resolve(data)
        })
        .catch((error) => {
          reject(error)
        })
    })
  }
  const date = computed(() => data.date)
  const temp = computed(() => `${data.nighttemp}℃~${data.daytemp}℃`)

  const week = computed(() => {
    switch (`${data.week}`) {
      case '1':
        return '星期一'
      case '2':
        return '星期二'
      case '3':
        return '星期三'
      case '4':
        return '星期四'
      case '5':
        return '星期五'
      case '6':
        return '星期六'
      case '0':
        return '星期日'
      default:
        return '未知'
    }
  })

  onMounted(() => {
    Object.assign(data, { week: new Date().getDay(), date: dayjs().format('YYYY-MM-DD HH:mm:ss') })
    setInterval(() => {
      Object.assign(data, { date: dayjs().format('YYYY-MM-DD HH:mm:ss') })
    }, 1000)
  })
</script>
