<!-- 国际化 -->
<template>
  <div class="language relative flex flex-items-center mr-10px w-30px h-30px">
    <!-- <Icon
      class="cursor-pointer"
      icon="language"
      width="30"
      height="30"
      color="#8ac5ff"
      @click="isShow = !isShow"
    /> -->
    <div
      class="i-ion:globe-outline w-full h-full cursor-pointer"
      icon="language"
      @click="isShow = !isShow"
    ></div>
    <Transition
      enter-active-class="animate__animated animate__bounce animate__faster animate__fadeIn"
      leave-active-class="animate__animated animate__bounce animate__faster animate__fadeOut"
    >
      <ul
        class="absolute top-36px text-nowrap left-0 bg-[#fff] b-1px b-color-#ccc b-solid dark:bg-[#ccc] z-999 text-14px text-#333"
        v-show="isShow"
      >
        <li
          class="px-2 py-1 hover-bg-#3b82f6 hover-text-#fff cursor-pointer"
          v-for="(item, i) in langs"
          :key="i"
          :style="useSystem.language === item.value ? 'background: #3b82f6;color: #fff' : ''"
          @click="switchLanguage(item.value)"
        >
          <span>{{ item.label }}</span>
        </li>
      </ul>
    </Transition>
  </div>
</template>

<script setup>
  import dayjs from 'dayjs'
  import storage from '@/utils/storage'
  import 'dayjs/locale/zh-cn'
  import 'dayjs/locale/en'
  import { useOutsideSystemStore } from '@/stores/modules/system.js'

  defineOptions({ name: 'LanguageCom' })

  const useSystem = useOutsideSystemStore()
  const isShow = ref(false)

  const langs = [
    {
      label: '简体中文',
      value: 'zh'
    },
    {
      label: 'English',
      value: 'en'
    }
  ]
  const switchLanguage = (v) => {
    switch (v) {
      case 'zh':
        dayjs.locale('zh-cn')
        break
      case 'en':
        dayjs.locale('en')
        break
    }
    useSystem.language = v
    storage.local.set('language', v)
    locale.value = v
    isShow.value = false
  }
</script>

<style lang="scss" scoped></style>
