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
  name: 'OsakaView',
  components: {
    HeaderComp,
    ContentTitleComp
  },
  data () {
    return {
      MainImage: '/images/Osaka/osaka-dotonbori_forMain.jpg',
      city: {
        name: '오사카',
        introduce: '접근성이 좋아 첫 해외여행지로 어렵지 않은 오사카. 다양한 먹거리와 볼거리, 즐길 거리가 풍부해 눈과 입이 즐겁다. 또 주변에 있는 교토 나라등 색다른 매력이 있는 도시들도 같이 들르면 좋다.'
      }
    }
  }
}
</script>
