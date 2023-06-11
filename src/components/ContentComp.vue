<template>
    <div class="my-4 rounded p-4 w-75">
        <h4 class="mb-4 title">{{ content.name }}</h4>
        <img :src="content.image" class="rounded my-4 w-100">
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
div:hover{
  box-shadow: 0 10px 15px -3px rgba(0,0,0,.1),0 4px 6px -4px rgba(0,0,0,.1);
}
</style>
