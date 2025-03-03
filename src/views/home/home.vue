<template>
  <Layout class="home">
    <template #left>
      <LeftBox />
    </template>
    <template #right>
      <RightBox />
    </template>
    <template #top>
      <MiddleTopBox />
    </template>
    <template #bottom>
      <MiddleBottomBox />
    </template>
  </Layout>
</template>

<script setup>
  import Layout from '@/layout/index.vue'
  import LeftBox from './leftbox/index.vue'
  import RightBox from './rightbox/index.vue'

  import MiddleTopBox from './middleTopBox/index.vue'
  import MiddleBottomBox from './middleBottomBox/index.vue'
</script>
