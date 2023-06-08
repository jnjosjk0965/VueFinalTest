<template>
  <div class="relative">
    <HeaderComp/>
    <ContentComp :MainImage="MainImage" :cityName="cityName"/>
  </div>
</template>

<script>
// @ is an alias to /src
import HeaderComp from '../components/HeaderComp.vue'
import ContentComp from '@/components/ContentComp.vue'

export default {
  name: 'FukuokaView',
  components: {
    HeaderComp,
    ContentComp
  },
  data () {
    return {
      MainImage: '/images/dazaifu-bridge.jpg',
      cityName: 'Fukuoka'
    }
  }
}
</script>
