<template>
    <section style="margin-top: 4rem; margin-bottom: 6rem;">
        <div class="container">
            <div class="d-flex justify-between">
                <div style="width: 50%;padding-right: 1rem;">
                    <h1 class="title">{{ cityName.name }}</h1>
                    <p class="content">{{ cityName.introduce }}</p>
                </div>
                <div>
                    <p class="text-center">여행 전 고려해야할 내용</p>
                    <div class="d-flex justify-between gap-4 mt-4">
                        <router-link to="/tokyo" class="d-flex contentBox" style="background-color: rgb(238, 244, 239);">
                            <article class="c-flex p-4" style="justify-content: space-between;width: 100%;position: relative;">
                                <img :src="subwayicon" width="32" height="32">
                                <div class="r-flex" style="flex-wrap: wrap;align-items: flex-end;">
                                    <h3 class="myColor" style="margin-right: 1rem;margin-bottom: 0px;">{{ cityName.name }}의<br>교통</h3>
                                    <span style="position: absolute; right: 1.5rem;"><img :src="rightarrowicon" width="32" height="32"></span>
                                </div>
                            </article>
                        </router-link>
                        <router-link to="/tokyo" class="d-flex contentBox" style="background-color: rgb(253, 242, 241);">
                            <article class="c-flex p-4" style="justify-content: space-between;width: 100%;position: relative;">
                                <img :src="weathericon" width="32" height="32">
                                <div class="r-flex " style="flex-wrap: wrap;align-items: flex-end;">
                                    <h3 class="myColor" style="margin-right: 1rem;margin-bottom: 0px;">{{ cityName.name }}의<br>날씨</h3>
                                    <span style="position: absolute; right: 1.5rem;"><img :src="rightarrowicon" width="32" height="32"></span>
                                </div>
                            </article>
                        </router-link>
                    </div>
                </div>
            </div>
        </div>
    </section>
    <hr class="container">
</template>

<script>
export default {
  name: 'ContentTitleComp',
  components: {},
  data () {
    return {
      subwayicon: '/images/icon/free-icon-train.png',
      weathericon: '/images/icon/free-icon-weather-forecast.png',
      rightarrowicon: '/images/icon/free-icon-right-arrow.png'
    }
  },
  props: {
    cityName: {
      type: Object,
      default: function () {
        return {
          name: '일본',
          introduce: '일본은 일본이다.'
        }
      }
    }
  },
  setup () {},
  created () {},
  methods: {},
  mounted () {}
}
</script>

<style scoped>
    .contentBox {
        text-decoration: none;
        width: 224px;
        height: 224px;
        border-radius: 16px;
    }
</style>
