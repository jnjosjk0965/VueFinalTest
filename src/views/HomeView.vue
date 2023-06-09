<template>
  <div class="relative">
    <HeaderComp  :MainImage="MainImage"/>
  </div>
</template>

<script>
// @ is an alias to /src
import HeaderComp from '../components/HeaderComp.vue'

export default {
  name: 'HomeView',
  components: {
    HeaderComp
  },
  data () {
    return {
      MainImage: '/images/Tokyo/mount_Fuji_forMain.jpg'
    }
  }
}
</script>
