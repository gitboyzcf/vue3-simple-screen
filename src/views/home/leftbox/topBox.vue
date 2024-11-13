<template>
  <div class="coverflow-example">
    <swiper
      class="swiper hover:cursor-grab active:cursor-grabbing"
      :modules="modules"
      :effect="'coverflow'"
      :centered-slides="true"
      :initialSlide="1"
      :slides-per-view="3"
      :coverflow-effect="{
        rotate: 0,
        stretch: -5,
        depth: 120,
        modifier: 2,
        slideShadows: true
      }"
      @slideChange="swiperChange"
    >
      <swiper-slide class="slide" v-for="index in 3" :key="index">
        <img
          :src="`	https://img1.baidu.com/it/u=2797982826,4287860396&fm=253&fmt=auto&app=120&f=JPEG?w=1280&h=800`"
        />
      </swiper-slide>
    </swiper>
    <ScrollPanel
      style="width: 100%; height: 150px"
      :pt="{
        barY: '!bg-#6286b6c2'
      }"
    >
      <div v-for="(item, i) in dataList" :key="i" class="text-18px color-#f0f0f0">
        <template v-if="active === i">
          <p>{{ item.name }}</p>
          <p>{{ item.content }}</p>
        </template>
      </div>
    </ScrollPanel>
  </div>
</template>

<script setup>
  import { Pagination, EffectCoverflow } from 'swiper/modules'
  import { Swiper, SwiperSlide } from 'swiper/vue'
  import 'swiper/css'
  import 'swiper/css/pagination'
  import 'swiper/css/effect-coverflow'

  const modules = [EffectCoverflow]
  const active = ref(1)

  const dataList = ref([
    {
      name: '厂区介绍1',
      content: `稳高压消防给水系统是现今化工生产厂区最为常见的给水系统,
          一般由消防水泵、给水管道以及消防水池等设施组成。当我们对消防系统进行设置时,
          如果其中具有消防通道,
          则需要做好消防装置外管网以及内消防管网的连接。而对于部分体积小的生产装置,
          我们则可以通过整合方式的应用对消防管网进行整合,
          并根据厂区实际情况在必要位置通过支管的应用对消防设施进行设置。在环状管网方面,
          则需要将阀门分为几个不同的管段, 并在独立管段位置上做好消防设施的设置。在企业灌区,
          通常情况下都具有着较多数量的石油原料, 如果这部分材料发生了火情,
          仅仅使用水很难起到良好的灭火作用, 对此,
          则可以使用固定泡沫灭火系统作为该区域的消防措施。在灭火装置中,
          装置的是具有抗熔特征的泡沫液, 在化工企业灌区, 需要保证该装置中的泡沫两为160L/s,
          以此保证灌区出现火灾问题时能够做出持续的灭火控制作用。而在火灾情况出现时,
          该区域控制室则能够通过信号的接收, 在掌握厂区内出现火情之后对消防水泵进行及时的启动,
          保证灭火工作能够在第一时间开展。`
    },
    {
      name: '厂区介绍2',
      content: `在化工生产区中, 所设置消防设施的目的就是要保证厂区在火灾情况出现时能够及时对火情进行控制, 对此, 就需要在设置完毕后做好相关设施的维护工作。而在消火栓以及消防水炮设置时, 则需要其位置能够控制在目标范围之内, 并保证目标对象通消防设施间需要良好贯通, 避免存在障碍物对消防效果产生影响。而在消火栓设置时, 避免对阀门进行随意的切断, 尽可能将水炮设置为蝶阀类型, 并对管道做好保温措施。而对于防火堤区域之外的水炮, 则需要做好其高度的控制, 需要在能够高于防火堤顶部的同时使其在实际喷射过程中产生的水流能够良好的覆盖到根部位置。`
    },
    {
      name: '厂区介绍3',
      content: `稳高压消防给水系统是现今化工生产厂区最为常见的给水系统,
          一般由消防水泵、给水管道以及消防水池等设施组成。当我们对消防系统进行设置时,
          如果其中具有消防通道,
          则需要做好消防装置外管网以及内消防管网的连接。而对于部分体积小的生产装置,
          我们则可以通过整合方式的应用对消防管网进行整合,
          并根据厂区实际情况在必要位置通过支管的应用对消防设施进行设置。在环状管网方面,
          则需要将阀门分为几个不同的管段, 并在独立管段位置上做好消防设施的设置。在企业灌区,
          通常情况下都具有着较多数量的石油原料, 如果这部分材料发生了火情,
          仅仅使用水很难起到良好的灭火作用`
    }
  ])

  const swiperChange = (v) => {
    console.log(v)
    active.value = v.activeIndex
  }
</script>

<style lang="scss" scoped>
  .coverflow-example {
    position: relative;
    height: 100%;
  }

  .swiper {
    height: 100%;
    width: 100%;
    padding-bottom: 15px;

    .slide {
      width: 300px;

      img {
        display: block;
        width: 100%;
        height: 100%;
        object-fit: cover;
      }
    }
  }
</style>
