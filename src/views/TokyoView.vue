<template>
  <div class="relative">
    <!--header-->
    <HeaderComp :MainImage="MainImage"/>
    <!--도시소개-->
    <ContentTitleComp :cityName="city"/>
    <!--먹을거리, 관광지-->
    <ContentBoxComp :food="foodContents" :sight="sightContents"/>
    <!--주변도시-->
    <SubcityComp :subcityArray="subcityContent"/>
    <!--footer-->
    <FooterComp/>
  </div>
</template>

<script>
// @ is an alias to /src
import HeaderComp from '../components/HeaderComp.vue'
import ContentTitleComp from '@/components/ContentTitleComp.vue'
import ContentBoxComp from '@/components/ContentBoxComp.vue'
import SubcityComp from '@/components/SubcityComp.vue'
import FooterComp from '@/components/FooterComp.vue'

export default {
  name: 'TokyoView',
  components: {
    HeaderComp,
    ContentTitleComp,
    ContentBoxComp,
    SubcityComp,
    FooterComp
  },
  data () {
    return {
      MainImage: '/images/Tokyo/tokyo-tower.jpg',
      city: {
        name: '도쿄',
        introduce: '도쿄는 일본의 수도로 정치, 경제, 문화의 중심지로 그 안에는 시부야, 아키하바라, 이케부쿠로 등 수 많은 개성적인 지역으로 구성되 있다. 다채로운 모습이 기다리는 도쿄. 지금부터 도쿄의 매력을 알아보자.'
      },
      foodContents: [
        {
          name: '스시',
          image: '',
          subtitle: '',
          content: '스시 자체는 일본 어디서나 전세계 어디서나 먹을 수 있는 일본의 대표적인 요리이지만, 역시 본고장 특히 고급 식재료가 모이는 도쿄에서 맛 보면 좋을 것 같습니다. 유명한 가게는 예약제이므로 가고싶은 가게가 있다면 미리 알아보고 가면 좋습니다.すし(스시)라 적어놓은 곳이 많지만 한자로 寿司(스시)라 적어놓은 곳도 많아 알아두면 좋습니다.'
        },
        {
          name: '소바',
          image: '',
          subtitle: '',
          content: '간토(関東)는 소바, 간사이(関西)는 우동이라 할 정도로 소바는 도쿄를 대표하는 요리 중 하나입니다. 유명한 소바 가게가 많은 것도 도쿄의 매력 포인트입니다. 메밀의 향을 느끼면서 맛있게 드셔 보세요.소바를 먹고나면 남은 쯔유에 소바삶은 물을 부워 마시는 품습이 있다.'
        },
        {
          name: '몬쟈야키',
          image: '',
          subtitle: '',
          content: '물기가 많은 밀가루 반죽에 손님이 직접 속재료를 섞어서 철판에 구워 먹는요리. 취향에 따라 굽는 정도를 다르게 해서 바삭하게 먹을수도 눅진하게 먹을 수도 있다.생긴것과는 다르게 맛은 있다고한다. 술안주로도 좋다고 한다. 츠키시마에는 약 60개의 점포가 모여있는 몬쟈야키 스트리트가 있다. 취향과 개성을 살린 오리지날 몬쟈야키를 파는 가게도 있으니 취향에 맞는 곳을 잘 찾아보자.'
        },
        {
          name: '챵코나베',
          image: '',
          subtitle: '',
          content: '챵코나베는 스모 선수들이 몸을 유지하기 위해 먹는 것으로 유명하다. 챵코나베에는 영양가높은 고기와 생선, 야채등의 재료가 뜸뿍 들어가 있다.'
        }
      ],
      sightContents: [
        {
          name: '시부야',
          image: '',
          subtitle: '일본의 명동 젊은이들의 거리',
          content: '수많은 옷가게와 맛집이 밀집해 있는 곳. 스크램블 교차로, 요요기 공원, 하라주쿠 타케시타거리등 다른 관광지도 가까워 관광과 쇼핑을 한번에 잡을 수 있다.'
        },
        {
          name: '오다이바',
          image: '',
          subtitle: '바다와 어우러진 야경이 아름다운 관광지',
          content: '대형 쇼핑몰및 테마 숍과 맛집이 많아 오션뷰를 즐기며 쇼핑과 음식을 즐길 수 있다. 레인보우 브리지, 자유의 여신상등이 도쿄의 바다를 빛내고 있어 아름다운 야경을 보며 여유를 즐기기 좋다. 또 다이버 시티 도쿄 플라자 앞에서는 애니메이션 건담의 유니콘 건담의 하루 10회 변신쇼를 볼 수 있다.'
        },
        {
          name: '센소지',
          image: '',
          subtitle: '일본 전통 문화가 살아 숨쉬는, 도쿄에서 가장 오래된 사원',
          content: '카미나리 몬을 넘어 절까지 뻗어 있는 나카미세 거리에는 공예품, 특산물, 각종 과자와 음식 등을 판매하는 점포가 늘어서 있다. 또 세쓰분, 긴류노 마이 등 특정 계절에는 일본 전통 행사들이 열리고 있기 때문에 일본 특유의 문화를 느끼고 싶다면 방문해 보는것을 추천한다.'
        },
        {
          name: '도쿄 스카이트리',
          image: '',
          subtitle: '세계에서 가장 높은 전파탑에서 즐기는 도쿄 야경',
          content: '높이 634m의 도쿄 스카이트리는 최대 450m의 높이에서 도쿄의 경치를 360도로 감상할 수 있다.'
        }
      ],
      subcityContent: [
        {
          name: '하코네',
          image: '/images/Tokyo/hakone.jpg',
          subtitle: '아름다운 자연과 온천'
        },
        {
          name: '치바',
          image: '/images/Tokyo/hakone.jpg',
          subtitle: '아름다운 자연과 온천'
        },
        {
          name: '가마쿠라<br>&<br>에노시마',
          image: '/images/Tokyo/hakone.jpg',
          subtitle: '아름다운 자연과 온천'
        },
        {
          name: '야마나시',
          image: '/images/Tokyo/hakone.jpg',
          subtitle: '아름다운 자연과 온천'
        }
      ]
    }
  }
}
</script>
