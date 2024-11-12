<script setup>
  import { RouterView } from 'vue-router'
  // import {
  //   NConfigProvider,
  //   darkTheme,
  //   NThemeEditor,
  //   zhCN,
  //   dateZhCN,
  //   enUS,
  //   dateEnUS,
  // } from "naive-ui";
  // import { useOutsideSystemStore } from "@/stores/modules/system.js";

  // const useSystem = useOutsideSystemStore();

  // const locale = shallowRef(zhCN);
  // const dateLocale = shallowRef(dateZhCN);
  // const theme = shallowRef(useSystem.scheme === "dark" ? darkTheme : null);
  // watch(
  //   [() => useSystem.language, () => useSystem.scheme],
  //   ([newL, newS]) => {
  //     switch (newL) {
  //       case "zh":
  //         locale.value = zhCN;
  //         dateLocale.value = dateZhCN;
  //         break;
  //       case "en":
  //         locale.value = enUS;
  //         dateLocale.value = dateEnUS;
  //         break;
  //     }
  //     theme.value = newS === "dark" ? darkTheme : null;
  //   },
  //   { immediate: true }
  // );
</script>

<template>
  <router-view v-slot="{ Component }">
    <transition name="fade">
      <component :is="Component" />
    </transition>
  </router-view>
</template>

<style scoped lang="scss">
  /* 进入之前和离开后的样式 */
  .fade-enter-from,
  .fade-leave-to {
    opacity: 0;
  }
  /* 离开和进入过程中的样式 */
  .fade-enter-active,
  .fade-leave-active {
    /* 添加过渡动画 */
    transition: opacity 0.2s ease;
  }
  /* 进入之后和离开之前的样式 */
  .fade-enter-to,
  .fade-leave-from {
    opacity: 1;
  }
</style>
