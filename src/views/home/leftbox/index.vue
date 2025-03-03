<template>
  <div class="w-453px flex flex-col gap-15px relative overflow-hidden">
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

<script setup>
  import TopBox from './topBox.vue'
  import MiddleBox from './middleBox.vue'
  import BottomBox from './bottomBox.vue'
</script>
