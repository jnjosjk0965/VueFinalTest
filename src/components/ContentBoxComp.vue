<template>
  <section class="my-5">
    <div class="container c-flex myBackground rounded">
      <!--탭 메뉴-->
      <ul class="r-flex gap-1" style="padding: 0;margin: 0;">
        <li class="tab_link" :class="{ current: currentTab === 'food'}" @click="this.currentTab = 'food'">먹을거리</li>
        <li class="tab_link" :class="{ current: currentTab === 'sight'}" @click="this.currentTab = 'sight'">관광지</li>
      </ul>
      <!--컨탠츠 영역-->
      <div id="food" class="c-flex" v-if="this.currentTab === 'food'">
        <ContentComp v-for="item in food" :key="item.name" :content="item"/>
      </div>
      <div id="sight" class="tab-content" v-if="this.currentTab === 'sight'">
        <ContentComp v-for="item in sight" :key="item.name" :content="item"/>
      </div>
    </div>
  </section>
  <hr class="container">
</template>

<script>
import ContentComp from './ContentComp.vue'
export default {
  name: 'ContentBoxComp',
  components: {
    ContentComp
  },
  data () {
    return {
      currentTab: 'food'
    }
  },
  props: {
    food: {
      type: Array
    },
    sight: {
      type: Array
    }
  },
  methods: {},
  mounted () {}
}
</script>

<style scoped>
  .tab_link {
    padding: 1rem 2rem;
    cursor: pointer;
    border-bottom: 4px solid #c2c2c2;
  }
  .tab_link:not(.current):hover {
    border-color: #fdded9;
  }
  .current {
    font-weight: bold;
    border-color: #f56a6a;
  }

</style>
