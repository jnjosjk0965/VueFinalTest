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
  name: 'TokyoView',
  components: {
    HeaderComp,
    ContentComp
  },
  data () {
    return {
      MainImage: '/images/tokyo-tower.jpg',
      cityName: 'Tokyo'
    }
  }
}
</script>
