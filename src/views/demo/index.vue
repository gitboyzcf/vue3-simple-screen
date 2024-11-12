<template>
  <div class="flex flex-col flex-items-center gap-2">
    <h2>{{ t('demo') }}</h2>
    <!-- 国际化 -->
    <Language />

    <div class="card flex justify-center flex-wrap gap-4">
      <Button label="Primary" />
      <Button label="Secondary" severity="secondary" />
      <Button label="Success" severity="success" />
      <Button label="Info" severity="info" />
      <Button label="Warn" severity="warn" />
      <Button label="Help" severity="help" />
      <Button label="Danger" severity="danger" />
      <Button label="Contrast" severity="contrast" />
    </div>

    <div class="flex justify-center items-center gap-2">
      <Button label="+" @click="counterStore.increment" />
      <span>{{ counterStore.count }}</span>
    </div>

    <div>{{ t('hello') }}</div>
    <!-- 主题切换 -->
    <ToggleTheme />
    <!-- echarts -->
    <ECharts
      id="demo-echarts"
      width="400px"
      height="400px"
      :loading="loading"
      :fullOptions="{ options: chartOptions.setOption2() }"
    />
  </div>
</template>

<script setup>
  import { chartOptions } from '@/components/ECharts/optionsConfig'
  import { useOutsideCounterStore } from '@/stores/modules/demo'

  import { useI18n } from 'vue-i18n'

  const counterStore = useOutsideCounterStore()
  console.log(counterStore.count)
  const { t } = useI18n()

  const loading = ref(true)

  onMounted(() => {
    setTimeout(() => {
      loading.value = false
    }, 1000)
  })

  // 调用api》modules》demo 中的接口, 采用以下方式即可
  // const { API_DEMO_POST } = useRequest();
</script>
