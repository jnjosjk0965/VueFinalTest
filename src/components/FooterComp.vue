<template>
  <footer class="container">
    <div class="r-flex p-4" style="justify-content: space-between;">
        <div>
          <router-link to="/">
            <img src="@/assets/logo_long.png" style="width:180px">
          </router-link>
          <h3>제작자</h3>
          <p>주재석</p>
          <h3>E-mail</h3>
          <p>wnwotjr8@naver.com</p>
        </div>
        <!--전체 링크-->
        <div class="r-flex">
            <nav class="c-flex mx-4">
              <h3>주요목적지</h3>
              <ul class="c-flex m-0 p-0">
                <li>도쿄</li>
                <li>오사카</li>
                <li>후쿠오카</li>
                <li>홋카이도</li>
              </ul>
            </nav>
            <nav class="c-flex mx-4 m-0 p-0">
              <h3>주변도시</h3>
              <ul class="c-flex m-0 p-0">
                <li>하코네</li>
                <li>가마쿠라&에노시마</li>
                <li>치바</li>
                <li>야마나시</li>
                <li>교토</li>
                <li>나라</li>
                <li>고베</li>
                <li>키타큐슈</li>
                <li>벳푸</li>
                <li>쿠마모토</li>
                <li>가고시마</li>
                <li>오타루</li>
                <li>후라노&비에이</li>
              </ul>
            </nav>
            <nav class="c-flex ms-4">
              <h3>기능</h3>
              <ul class="c-flex m-0 p-0">
                <li>여행회화</li>
                <li>여행계획</li>
              </ul>
            </nav>
        </div>
    </div>
  </footer>
</template>

<script>
export default {
  name: 'FooterComp',
  components: {},
  data () {
    return {
      sampleData: ''
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
