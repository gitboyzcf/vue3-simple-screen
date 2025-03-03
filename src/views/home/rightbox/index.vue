<template>
  <div class="w-453px flex flex-col gap-15px relative overflow-hidden">
    <Box title="报警中心">
      <RightTopBox />
    </Box>
    <Box title="报警类型TOP5" wHeader="124px">
      <RightBottomBox />
    </Box>
  </div>
</template>

<script setup>
  import RightTopBox from './topBox.vue'
  import RightBottomBox from './bottomBox.vue'
</script>
