<template>
  <div class="relative">
    <HeaderComp :MainImage="MainImage"/>
    <ContentTitleComp :cityName="city"/>
  </div>
</template>

<script>
// @ is an alias to /src
import HeaderComp from '../components/HeaderComp.vue'
import ContentTitleComp from '@/components/ContentTitleComp.vue'

export default {
  name: 'HokkaidoView',
  components: {
    HeaderComp,
    ContentTitleComp
  },
  data () {
    return {
      MainImage: '/images/Hokkaido/otaru-canal-summer.jpg',
      city: {
        name: '홋카이도',
        introduce: '맥주, 온천, 눈 축제 등 홋카이도에는 즐길거리와 구경거리가 다양하다. 봄에가면 라일락 축제, 겨울에 가면 눈축제를! 사계절 내내 심심할 틈 없는 여행지로 손꼽힌다.'
      }
    }
  }
}
</script>
