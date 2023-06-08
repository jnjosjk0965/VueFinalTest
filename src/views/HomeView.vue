<template>
  <div class="relative">
    <HeaderComp/>
    <ContentComp :MainImage="MainImage"/>
  </div>
</template>

<script>
// @ is an alias to /src
import HeaderComp from '../components/HeaderComp.vue'
import ContentComp from '@/components/ContentComp.vue'

export default {
  name: 'HomeView',
  components: {
    HeaderComp,
    ContentComp
  },
  data () {
    return {
      MainImage: '/images/mount_Fuji.jpg'
    }
  }
}
</script>
