<template>
    <section class="my-5">
        <div class="container">
            <h5>주변 도시</h5>
            <h2>당신의 여행을 더욱 풍성하게 만들어줄 곳</h2>
        </div>
        <div class="container mt-5">
            <ul class="r-flex m-0 p-0">
                <SubcityCard v-for="item in subcityArray" :key="item.name" :subcity="item"/>
            </ul>
        </div>
    </section>
    <hr class="container">
</template>

<script>
import SubcityCard from './SubcityCard.vue'
export default {
  name: 'SubcityComp',
  components: {
    SubcityCard
  },
  data () {
    return {

    }
  },
  props: {
    subcityArray: {
      type: Array
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
