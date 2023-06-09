<template>
  <div class="relative">
    <HeaderComp :MainImage="MainImage"/>
  </div>
</template>

<script>
import HeaderComp from '@/components/HeaderComp.vue'

export default {
  name: 'JapanConversation',
  components: {
    HeaderComp
  },
  data () {
    return {
      MainImage: '/images/japan-kimono.jpg'
    }
  },
  setup () {},
  created () {},
  methods: {},
  mounted () {}
}
</script>

<style scoped>
</style>
