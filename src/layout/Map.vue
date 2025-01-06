<template>
  <div class="map-box w-full h-full">
    <ECharts
      ref="echartsRef"
      id="map-echarts"
      width="100%"
      height="100%"
      :loading="loading"
      :fullOptions="fullOptions"
    />
  </div>
</template>

<script setup>
  import { chartOptions } from '@/components/ECharts/optionsConfig'
  import { useOutsideHomeStore } from '@/stores/modules/home'
  import { $mitt } from '@/utils'

  const { API_GET_GEO_JSON_GET } = useRequest()
  const useHomeStore = useOutsideHomeStore()
  const loading = ref(true)
  const echartsRef = ref()

  const fullOptions = ref({ options: {} })

  const setData = async (code = 100000) => {
    echartsRef.value.myChart && echartsRef.value.myChart.clear()
    const geoJSON = await API_GET_GEO_JSON_GET({ code })
    loading.value = false
    fullOptions.value.options = chartOptions.setMapOption([], geoJSON)
  }
  const init = async () => {
    setData()
    echartsRef.value.myChart.on('click', async function (params) {
      if (params.data) {
        const { adcode, name, level } = params.data
        if (level === 'district' || useHomeStore.codes[useHomeStore.codes.length - 1] === adcode) {
          return
        }
        console.log(adcode, name, level)
        useHomeStore.setCode(adcode)
        setData(adcode)
      }
    })
    $mitt.on('onPreLevel', () => {
      useHomeStore.codes.pop()
      setData(useHomeStore.codes[useHomeStore.codes.length - 1])
    })
  }
  onMounted(() => {
    init()
  })
</script>

<style lang="scss" scoped></style>
