<template>
  <div class="layout h-full w-full relative">
    <div class="layout-map w-full h-full absolute left-0 top-0"
      ><slot name="map"><Map /></slot
    ></div>
    <LayoutHeader></LayoutHeader>
    <LayoutMain>
      <template #left>
        <slot name="left"></slot>
      </template>
      <template #right>
        <slot name="right"></slot>
      </template>
    </LayoutMain>
  </div>
</template>

<script setup>
  import autofit from 'autofit.js'
  import LayoutHeader from './LayoutHeader.vue'
  import LayoutMain from './LayoutMain.vue'
  import Map from './Map.vue'

  onMounted(() => {
    autofit.init({
      dh: 1080,
      dw: 1920,
      el: 'body',
      resize: true
    })
  })
</script>
<style lang="scss" scoped>
  .layout {
    background: url('@/assets/images/screen-bg.jpg') no-repeat center;
    background-size: cover;
  }
</style>
