<template>
  <div class="left-top-box">
    <div class="flex gap-15px h-90px">
      <div
        class="box-style color- flex-1 flex flex-col flex-justify-center flex-items-center gap-2px"
      >
        <span>监控点位</span>
        <Countto class="text-20px color-#389bff font-bold" :endVal="80" />
      </div>
      <div class="box-style flex-1 flex flex-col flex-justify-center flex-items-center gap-2px">
        <span>智能分析</span>
        <Countto class="text-20px color-#389bff font-bold" :endVal="60" />
      </div>
    </div>
    <ECharts
      id="sbxx-echarts"
      width="100%"
      height="300px"
      :loading="loading"
      :fullOptions="{ options: chartOptions.setSbxxOption() }"
    />
  </div>
</template>

<script setup>
  import { chartOptions } from '@/components/ECharts/optionsConfig'
  const loading = ref(true)

  onMounted(() => {
    setTimeout(() => {
      loading.value = false
    }, 1000)
  })
</script>

<style scoped lang="scss">
  .box-style {
    background: url('@/assets/images/box-bg.png') no-repeat center;
    background-size: 100% 100%;
  }
</style>
