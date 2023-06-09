<template>
    <div class="my-4 rounded hover:shadow">
        <h4>{{ content.name }}</h4>
        <img :src="content.image">
        <h5 v-if="content.subtitle !== ''">{{ content.subtitle }}</h5>
        <p v-html="content.content"></p>
    </div>
</template>

<script>
export default {
  name: 'ContentComp',
  components: {},
  data () {
    return {
      sampleData: ''
    }
  },
  props: {
    content: {
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
</style>
