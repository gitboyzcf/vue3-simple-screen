<template>
  <div class="flex flex-col">
    <div class="box-title w-full h-28px"
      ><span class="color-#f0f0f0 font-bold block w-90px text-center">{{ title }}</span></div
    >
    <div class="box-content p-15px bg-#031e559c" :style="styleContent">
      <slot></slot>
    </div>
  </div>
</template>

<script setup>
  defineProps({
    title: {
      type: String,
      default: '标题'
    },
    styleContent: String
  })
</script>

<style lang="scss" scoped>
  .box-title {
    background: url('@/assets/images/box-h-bg.png') no-repeat center;
    background-size: 100%;
  }
</style>
