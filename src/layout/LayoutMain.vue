<template>
  <div class="layout-main flex-1 h-0 relative color-#f0f0f0">
    <div class="layout-main-left absolute left-15px top-70px">
      <slot name="left"></slot>
    </div>
    <div class="layout-main-right absolute right-15px top-70px">
      <slot name="right"></slot>
    </div>
    <div class="layout-main-bottom w-50% absolute left-50% translate-x-[-50%] top-70px">
      <slot name="top"></slot>
    </div>
    <div class="layout-main-bottom w-50% absolute left-50% translate-x-[-50%] bottom--1066px">
      <slot name="bottom"></slot>
    </div>
  </div>
</template>

<script setup></script>
