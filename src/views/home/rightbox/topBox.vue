<template>
  <div class="right-top-box">
    <div class="flex gap-15px h-90px mb-15px">
      <div
        class="box-style color- flex-1 flex flex-col flex-justify-center flex-items-center gap-2px"
      >
        <span>已处理</span>
        <Countto class="text-20px color-#379ED7 font-bold" :endVal="data.ycl" />
      </div>
      <div class="box-style flex-1 flex flex-col flex-justify-center flex-items-center gap-2px">
        <span>未处理</span>
        <Countto class="text-20px color-#F0BC1E font-bold" :endVal="data.wcl" />
      </div>
    </div>
    <div class="flex justify-between relative">
      <ul class="flex gap-15px justify-start">
        <li
          :class="[
            'w-50px h-30px line-height-25px cursor-pointer text-center b-solid b-1px b-color-#389bff hover:b-color-#FAC858',
            i === typeSelectedI ? 'color-#FAC858 b-color-#FAC858' : ''
          ]"
          v-for="(item, i) in typeOptions"
          :key="item.code"
          @click="typeClick(i)"
        >
          <span class="text-12px">{{ item.name }}</span>
        </li>
      </ul>
      <ul class="flex gap-15px">
        <li
          :class="[
            'w-50px cursor-pointer text-center b-solid b-1px b-color-#389bff hover:b-color-#FAC858',
            i === selectedI ? 'color-#FAC858 b-color-#FAC858' : ''
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
      id="bjzx-echarts"
      width="100%"
      height="200px"
      :loading="loading"
      :fullOptions="fullOptions"
    />
    <div class="table-box w-full">
      <div class="text-left bg-#389bff94 flex">
        <span class="p-2 w-60px">报警</span>
        <span class="p-2 w-80px">报警类型</span>
        <span class="p-2 flex-1">报警时间</span>
        <span class="p-2 w-80px">报警级别</span>
        <span class="p-2 w-60px">处理</span>
      </div>
      <ScrollBox :list="data.list">
        <div
          :class="[
            'text-left  text-14px hover:bg-#389bff24 flex',
            (i + 1) % 2 == 0 ? 'bg-#ffffff24' : ''
          ]"
          v-for="(item, i, index) in data.list"
          :key="index"
        >
          <span class="p-2 w-60px">{{ item.name }}</span>
          <span class="p-2 w-80px">{{ item.type }}</span>
          <span class="p-2 flex-1">{{ item.time }}</span>
          <span class="p-2 w-80px">{{ item.level ? '告警' : '故障' }}</span>
          <span :class="['p-2 w-60px', item.cl ? 'color-#389bff' : 'color-red']">{{
            item.cl ? '已处理' : '未处理'
          }}</span>
        </div>
      </ScrollBox>
    </div>
  </div>
</template>

<script setup>
  import { chartOptions } from '@/components/ECharts/optionsConfig'
  const loading = ref(true)
  const data = reactive({
    ycl: 105,
    wcl: 2,
    list: [
      {
        name: 'XY7809',
        type: '工服',
        time: '2022-03-01 12:00:00',
        level: 0,
        cl: 0
      },
      {
        name: 'XY7809',
        type: '烟雾',
        time: '2024-03-01 12:00:00',
        level: 1,
        cl: 1
      },
      {
        name: 'XY7809',
        type: '工服',
        time: '2022-03-01 12:00:00',
        level: 0,
        cl: 0
      },
      {
        name: 'XY7809',
        type: '烟雾',
        time: '2024-03-01 12:00:00',
        level: 1,
        cl: 1
      },
      {
        name: 'XY7809',
        type: '工服',
        time: '2022-03-01 12:00:00',
        level: 0,
        cl: 0
      },
      {
        name: 'XY7809',
        type: '烟雾',
        time: '2024-03-01 12:00:00',
        level: 1,
        cl: 1
      }
    ]
  })
  const selectedI = ref(0)
  const fullOptions = ref({ options: {} })

  const options = ref([
    { name: '当日', code: 0 },
    { name: '近一周', code: 1 },
    { name: '近一月', code: 2 }
  ])
  const dayClick = (v) => {
    selectedI.value = v
    fullOptions.value.options = chartOptions.setBjzxOption([], selectedI.value)
  }
  const typeSelectedI = ref(0)
  const typeOptions = ref([
    { name: '趋势', code: 0 },
    { name: '类型', code: 1 }
  ])
  const typeClick = (v) => {
    typeSelectedI.value = v
  }
  onMounted(() => {
    setTimeout(() => {
      loading.value = false
      fullOptions.value.options = chartOptions.setBjzxOption([], selectedI.value)
    }, 1000)
  })
</script>

<style scoped lang="scss">
  .box-style {
    background: url('@/assets/images/box-bg.png') no-repeat center;
    background-size: 100% 100%;
  }
</style>
