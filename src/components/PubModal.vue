<template>
  <n-modal
    :show="showModal"
    ref="nModalRef"
    :class="[isTransparent ? 'is-transparent' : '', classN]"
  >
    <n-card
      :class="[isFullScreen ? 'modal-full-screen' : '']"
      :style="{ width, height, ...style }"
      :title="title"
      :bordered="false"
      size="huge"
      role="dialog"
      aria-modal="true"
    >
      <template #header>
        <div class="header-wrapper" relative>
          <span class="select-font">{{ title }}</span>
          <div
            v-if="isMove"
            class="drag-box"
            cursor-move
            v-drag
            h-50px
            w-full
            pointer-events
            absolute
            top--15px
            left-0
          ></div>
        </div>
      </template>
      <template #header-extra>
        <Icon
          icon="ep:close-bold"
          @click="emits('update:showModal', false)"
          color="#ccc"
          cursor-pointer
          width="20"
          height="20"
        />
      </template>
      <slot name="modal-slot"> 内容 </slot>
    </n-card>
  </n-modal>
</template>
<script setup>
  const emits = defineEmits(['update:showModal'])
  defineProps({
    showModal: {
      type: Boolean,
      default: false
    },
    classN: {
      type: String
    },
    width: {
      type: String,
      default: '600px'
    },
    height: {
      type: String,
      default: ''
    },
    style: {
      type: Object
    },
    title: {
      type: String,
      default: '模态框'
    },
    // 是否移动
    isMove: {
      type: Boolean,
      default: true
    },
    // 是否全屏
    isFullScreen: {
      type: Boolean,
      default: false
    },
    // 是否透明
    isTransparent: {
      type: Boolean,
      default: false
    }
  })
</script>
<style lang="scss" scoped>
  .n-card.n-modal {
    border-radius: 0;
    background: rgba(0, 67, 133, 0.6);
    backdrop-filter: blur(5px);
    margin: 0;
    position: absolute;
    left: 50%;
    top: 20%;
    transform: translateX(-50%);
    &.ai-img-modal {
      top: 0px !important;
    }

    &.is-transparent {
      background: rgb(0, 67, 133);
    }

    :deep(.n-card-header) {
      padding: 15px;
      .n-card-header__main {
        color: #fff;
      }
    }
    :deep(.n-card__content) {
      height: calc(100% - 90px);
    }

    &.video-show {
      :deep(.n-card__content) {
        padding: 0;
      }
      :deep(.n-card-header) {
        padding: 15px;
        position: absolute;
        z-index: 99;
        width: 100%;
      }
    }
  }
  .modal-full-screen {
    width: 100% !important;
    height: 100% !important;
    top: 0 !important;
    left: 0 !important;
    transform: none !important;
  }
</style>
