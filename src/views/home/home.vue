<template>
  <Layout class="home">
    <template #left>
      <div class="w-359px h-80% flex flex-col gap-15px">
        <Box title="概况">
          <LeftTopBox />
        </Box>
        <Box title="设备信息"> 设备信息 </Box>
        <Box title="用户情况"> 测试 </Box>
      </div>
    </template>
    <template #right>
      <div class="w-359px h-80%">123</div>
    </template>
  </Layout>
</template>

<script setup>
  import Layout from '@/layout/index.vue'
  import LeftTopBox from './leftbox/leftTopBox.vue'
</script>

<style lang="scss" scoped></style>
