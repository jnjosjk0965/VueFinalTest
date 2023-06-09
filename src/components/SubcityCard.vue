<template>
    <li class="w-25 px-4">
        <article class="relative rounded overflow-hidden w-100 ratio ratio-6x9">
            <img :src="subcity.image" class="h-100" width="360" height="480">
            <div class="absolute top-0 left-0 c-flex align-items-center py-4 justify-content-end">
                <router-link to="/tokyo" style="align-items: flex-end; text-decoration: none;color: #eee; text-align: center;">
                    <h2 style="font-family:'Black Han Sans', sans-serif, Helvetica, Arial;" v-html="subcity.name"></h2>
                    <p>{{ subcity.subtitle }}</p>
                </router-link>
            </div>
        </article>
    </li>
</template>

<script>
export default {
  name: 'SubcityCard',
  components: {},
  data () {
    return {
      sampleData: ''
    }
  },
  props: {
    subcity: {
      type: Object
    }
  },
  setup () {},
  created () {},
  methods: {},
  mounted () {}
}
</script>

<style scoped>
.ratio-6x9 {
        --bs-aspect-ratio: 150%;
    }
</style>
