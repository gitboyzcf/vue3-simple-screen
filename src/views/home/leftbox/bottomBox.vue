<template>
  <div class="bottom-box">
    <div class="flex justify-between relative">
      <div>
        <span>用户总数 </span>
        <Countto class="text-18px color-#389bff font-bold" :endVal="data.yhzs" />
      </div>

      <ul class="flex gap-15px">
        <li
          :class="[
            'w-50px cursor-pointer text-center b-solid b-1px b-color-#389bff hover:b-color-#FAC858',
            i === selectedI ? 'b-color-#FAC858' : ''
          ]"
          v-for="(item, i) in options"
          :key="item.code"
          @click="dayClick(i)"
        >
          <span class="text-12px">{{ item.name }}</span>
        </li>
      </ul>
    </div>
    <ECharts
      id="yhqk-echarts"
      width="100%"
      height="120px"
      :loading="loading"
      :fullOptions="fullOptions"
    />
  </div>
</template>

<script setup>
  import { chartOptions } from '@/components/ECharts/optionsConfig'
  const loading = ref(true)
  const data = reactive({
    yhzs: 30
  })

  const fullOptions = ref({ options: {} })
  const selectedI = ref(0)
  const options = ref([
    { name: '当日', code: 0 },
    { name: '近一周', code: 1 },
    { name: '近一月', code: 2 }
  ])
  const dayClick = (v) => {
    selectedI.value = v
    fullOptions.value.options = chartOptions.setYhqkOption([], selectedI.value)
  }
  onMounted(() => {
    setTimeout(() => {
      loading.value = false
      fullOptions.value.options = chartOptions.setYhqkOption([], selectedI.value)
    }, 1000)
  })
</script>

<style scoped lang="scss">
  .box-style {
    background: url('@/assets/images/box-bg.png') no-repeat center;
    background-size: 100%;
  }
</style>
