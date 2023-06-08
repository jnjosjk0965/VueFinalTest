<template>
    <section style="padding:1.5rem">
      <div style="border-radius: 26px;min-height: 36rem;overflow: hidden;position: relative;height: 50vh;">
        <img v-bind:src="MainImage" alt="FUJI" width="1920" height="640" style="width: 100%;max-width: 100%;object-fit: cover;">
      </div>
    </section>
    <section>
        <div class="container">
            <div class="d-flex justify-between">
                <div style="width: 50%;">
                    <h1>{{ cityName }}</h1>
                    <p>Lorem ipsum dolor sit amet consectetur, adipisicing elit. Doloribus quis aspernatur nam assumenda mollitia, at molestias perspiciatis ad nobis ducimus? Sequi doloremque voluptas nostrum quae. Eveniet voluptates facilis eaque beatae!</p>
                </div>
                <div>
                    <p>여행 전 고려해야할 내용</p>
                    <div class="d-flex justify-between gap-4">
                        <router-link to="/tokyo" class="d-flex contentBox" style="background-color: rgb(238, 244, 239);">
                            <article class="d-flex p-3">
                                <img src="../../public/images/free-icon-train.png" width="32" height="32">
                                <div>
                                    <h3>교통</h3>
                                    <span>-></span>
                                </div>
                            </article>
                        </router-link>
                        <router-link to="/tokyo" class="d-flex contentBox" style="background-color: rgb(253, 242, 241);">
                            <article class="d-flex p-3">
                                <img src="../../public/images/free-icon-weather-forecast.png" width="32" height="32">
                                <div>
                                    <h3>날씨</h3>
                                    <span>-></span>
                                </div>
                            </article>
                        </router-link>
                    </div>
                </div>
            </div>
        </div>
    </section>
</template>

<script>
export default {
  name: 'ContentComp',
  components: {},
  data () {
    return {
      SampleData: ''
    }
  },
  props: ['MainImage', 'cityName'],
  setup () {},
  created () {},
  methods: {},
  mounted () {}
}
</script>

<style scoped>
    .contentBox {
        flex-direction: column;
        justify-content: space-between;
        width: 224px;
        height: 224px;
        border-radius: 16px;
    }
</style>
