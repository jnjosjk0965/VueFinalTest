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
  name: 'FukuokaView',
  components: {
    HeaderComp,
    ContentTitleComp
  },
  data () {
    return {
      MainImage: '/images/Fukuoka/fukuoka-yatai.jpg',
      city: {
        name: '후쿠오카',
        introduce: '한국과 가깝고 저렴해서 기대없이 떠났다가 두 번 가고, 세 번 가고, 철마다 간다는 후쿠오카. 그만큼 먹거리와 즐길 거리도 풍성하고 교통도 편리하여 여행 초보자에게 매력이 넘치는 곳. 또한 근교의 도시들도 특색이 넘쳐 볼거리가 풍부하다.'
      }
    }
  }
}
</script>
