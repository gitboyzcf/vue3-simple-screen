<template>
  <Layout class="home">
    <template #left>
      <div class="w-453px flex flex-col gap-15px">
        <Box title="概况" wHeader="60px">
          <TopBox />
        </Box>
        <Box title="设备信息">
          <MiddleBox />
        </Box>
        <Box title="用户情况">
          <BottomBox />
        </Box>
      </div>
    </template>
    <template #right>
      <div class="w-453px flex flex-col gap-15px">
        <Box title="报警中心">
          <RightTopBox />
        </Box>
        <Box title="报警类型TOP5" wHeader="124px">
          <RightBottomBox />
        </Box>
      </div>
    </template>
  </Layout>
</template>

<script setup>
  import Layout from '@/layout/index.vue'
  import TopBox from './leftBox/topBox.vue'
  import MiddleBox from './leftBox/middleBox.vue'
  import BottomBox from './leftbox/bottomBox.vue'
  import RightTopBox from './rightBox/topBox.vue'
  import RightBottomBox from './rightBox/bottomBox.vue'
</script>
