<template>
  <div
    class="layout-header w-full h-55px absolute top-0 left-0 flex justify-between items-center px-15px"
  >
    <div class="w-20% h-full line-height-55px color-#b0d0ff text-26px text-center">
      <span class="font-bold tracking-widest">{{ title }}</span>
    </div>
    <ul class="flex-1 pl-100px">
      <li class="w-82px h-34px" v-for="(item, index) in navBar" :key="index">
        <a class="no-underline" v-if="item.path.startsWith('http')" :href="to" target="_blank">
          {{ item.name }}
        </a>
        <router-link v-else :to="item.path" custom v-slot="{ isActive, href, navigate }">
          <a
            :href="href"
            @click="navigate"
            :class="[
              'no-underline color-#f0f0f0 font-bold block w-full h-full text-center line-height-34px',
              isActive ? 'active color-#b0d0ff' : ''
            ]"
          >
            {{ item.name }}
          </a>
        </router-link>
      </li>
    </ul>
    <Weather />
  </div>
</template>

<script setup>
  const title = import.meta.env.VITE_APP_TITLE
  const navBar = ref([
    {
      name: '综合态势',
      path: '/home'
    }
  ])
</script>

<style lang="scss" scoped>
  .layout-header {
    background: url('@/assets/images/header-bg.png') no-repeat center;
    background-size: 100%;
    .active {
      background: url('@/assets/images/h-active-bg.png') no-repeat center;
      background-size: 100%;
    }
  }
</style>
