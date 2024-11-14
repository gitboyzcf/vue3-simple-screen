<template>
  <Layout class="home">
    <template #left>
      <div class="w-453px flex flex-col gap-15px relative">
        <Box title="概况" wHeader="60px">
          <TopBox />
          <!-- 地图返回键 -->
          <div
            class="absolute top-0 right--55px cursor-pointer w-40px h-25px"
            v-if="useHomeStore.isNull"
            @click="$mitt.emit('onPreLevel')"
          >
            <svg
              t="1731580007592"
              class="icon"
              viewBox="0 0 1024 1024"
              version="1.1"
              xmlns="http://www.w3.org/2000/svg"
              p-id="4534"
              width="100%"
              height="100%"
            >
              <path
                d="M658.261333 170.624H292.565333v-170.666667L0 255.957333l292.565333 256v-170.666666h365.696c124.330667 0 219.434667 110.933333 219.434667 256s-95.061333 256-219.434667 256H292.565333v170.666666h365.696c197.504 0 365.738667-187.733333 365.738667-426.666666s-160.938667-426.666667-365.738667-426.666667z"
                fill="#2A79D0"
                p-id="4535"
              ></path>
            </svg>
          </div>
        </Box>
        <Box title="设备信息">
          <MiddleBox />
        </Box>
        <Box title="用户情况">
          <BottomBox />
        </Box>
      </div>
    </template>
    <template #right>
      <div class="w-453px flex flex-col gap-15px">
        <Box title="报警中心">
          <RightTopBox />
        </Box>
        <Box title="报警类型TOP5" wHeader="124px">
          <RightBottomBox />
        </Box>
      </div>
    </template>
  </Layout>
</template>

<script setup>
  import Layout from '@/layout/index.vue'
  import TopBox from './leftBox/topBox.vue'
  import MiddleBox from './leftBox/middleBox.vue'
  import BottomBox from './leftbox/bottomBox.vue'
  import RightTopBox from './rightBox/topBox.vue'
  import RightBottomBox from './rightBox/bottomBox.vue'
  import { $mitt } from '@/utils'
  import { useOutsideHomeStore } from '@/stores/modules/home'
  const useHomeStore = useOutsideHomeStore()
</script>
