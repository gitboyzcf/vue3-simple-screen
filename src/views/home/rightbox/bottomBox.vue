<template>
  <div class="right-bottom-box">
    <ECharts
      id="bjlx-echarts"
      width="100%"
      height="290px"
      :loading="loading"
      :fullOptions="fullOptions"
    />
  </div>
</template>

<script setup>
  import { chartOptions } from '@/components/ECharts/optionsConfig'
  const loading = ref(true)

  const fullOptions = ref({ options: {} })
  onMounted(() => {
    setTimeout(() => {
      loading.value = false
      fullOptions.value.options = chartOptions.setBjlxOption([])
    }, 1000)
  })
</script>

<style scoped lang="scss">
  .box-style {
    background: url('@/assets/images/box-bg.png') no-repeat center;
    background-size: 100% 100%;
  }
</style>
