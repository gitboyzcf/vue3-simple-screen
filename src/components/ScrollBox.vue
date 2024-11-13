<template>
  <vue3-seamless-scroll
    :hover="true"
    :wheel="true"
    :step="0.3"
    v-bind="$attrs"
    class="scroll overflow-hidden h-200px"
  >
    <slot></slot>
  </vue3-seamless-scroll>
</template>

<script setup>
  import { Vue3SeamlessScroll } from 'vue3-seamless-scroll'
</script>
