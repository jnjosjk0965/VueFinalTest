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
import HeaderComp from '@/components/HeaderComp.vue'
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
          image: '/images/Tokyo/sushi.jpg',
          subtitle: '',
          content: '스시 자체는 일본 어디서나 전세계 어디서나 먹을 수 있는 일본의 대표적인 요리이지만, 역시 본고장 특히 고급 식재료가 모이는 도쿄에서 맛 보면 좋을 것 같습니다. 유명한 가게는 예약제이므로 가고싶은 가게가 있다면 미리 알아보고 가면 좋습니다. <blockquote>"すし(스시)라 적어놓은 곳이 많지만 한자로 寿司(스시)라 적어놓은 곳도 많아 알아두면 좋습니다."</blockquote>'
        },
        {
          name: '소바',
          image: '/images/Tokyo/soba.jpg',
          subtitle: '',
          content: '간토(関東)는 소바, 간사이(関西)는 우동이라 할 정도로 소바는 도쿄를 대표하는 요리 중 하나입니다. 유명한 소바 가게가 많은 것도 도쿄의 매력 포인트입니다. 메밀의 향을 느끼면서 맛있게 드셔 보세요. <blockquote><i>"소바를 먹고나면 남은 쯔유에 소바삶은 물을 타서 마시기도 한다."</i><br><br>-자루소바(ざるそば) : 우리가 가장 잘 아는 쯔유 육수에 찍어먹는 방식 모리소바(もりそば)라고도 함.<br>-가케소바(かけそば) : 따뜻한 국물에 먹는 소바 <br>-붓카케소바(ぶっかけそば) : 차가운 쯔유 육수를 면이 잠길 정도로만 부워 먹는 방법</blockquote>'
        },
        {
          name: '몬쟈야키',
          image: '/images/Tokyo/monjayaki.jpg',
          subtitle: '',
          content: '물기가 많은 밀가루 반죽에 손님이 직접 속재료를 섞어서 철판에 구워 먹는요리. 취향에 따라 굽는 정도를 다르게 해서 바삭하게 먹을수도 눅진하게 먹을 수도 있다.<br><b>생긴것과는 다르게 맛은 있다고한다.</b> 술안주로도 좋다고 한다.츠키시마에는 약 60개의 점포가 모여있는 몬쟈야키 스트리트가 있다.취향과 개성을 살린 오리지날 몬쟈야키를 파는 가게도 있으니 취향에 맞는 곳을 잘 찾아보자.'
        },
        {
          name: '챵코나베',
          image: '/images/Tokyo/chankonabe.jpg',
          subtitle: '',
          content: '챵코나베는 스모 선수들이 몸을 유지하기 위해 먹는 것으로 유명하다. 챵코나베는 닭고기나 흰살 생선 육수에 고기와 다양한 채소, 해산물이 푸짐하게 들어간다. 창코나베 전문점 중에는 은퇴한 스모선수들이 차린 가게들이 많은 편이다.'
        }
      ],
      sightContents: [
        {
          name: '시부야',
          image: '/images/Tokyo/sibuya.jpg',
          subtitle: '일본의 명동 젊은이들의 거리',
          content: '시부야는 일본에서 가장 유명한 지구 중 하나로, 상업과 엔터테인먼트로 번성하는 도쿄의 대표적인 장소입니다. 수많은 옷가게와 식당 및 엔터테인먼트 시설로 가득 차 있어 쇼핑과 오락을 즐길 수 있는 최적의 장소입니다. 주변에는 요요기 공원, 하라주쿠 타케시타거리 등 다른 관광지도 있습니다.'
        },
        {
          name: '오다이바',
          image: '/images/Tokyo/odaiba.jpg',
          subtitle: '바다와 어우러진 야경이 아름다운 관광지',
          content: '대형 쇼핑몰및 테마 숍과 맛집이 많아 오션뷰를 즐기며 쇼핑과 음식을 즐길 수 있다. 레인보우 브리지, 자유의 여신상등이 도쿄의 바다를 빛내고 있어 아름다운 야경을 보며 여유를 즐기기 좋다. 또 다이버 시티 도쿄 플라자 앞에서는 애니메이션 건담의 유니콘 건담의 하루 10회 변신쇼를 볼 수 있다.'
        },
        {
          name: '센소지',
          image: '/images/Tokyo/sensoji.jpg',
          subtitle: '일본 전통 문화가 살아 숨쉬는, 도쿄에서 가장 오래된 사원',
          content: '카미나리 몬을 넘어 절까지 뻗어 있는 나카미세 거리에는 공예품, 특산물, 각종 과자와 음식 등을 판매하는 점포가 늘어서 있다. 또 세쓰분, 긴류노 마이 등 특정 계절에는 일본 전통 행사들이 열리고 있기 때문에 일본 특유의 문화를 느끼고 싶다면 방문해 보는것을 추천한다.'
        },
        {
          name: '도쿄 스카이트리',
          image: '/images/Tokyo/tokyoskytree.jpg',
          subtitle: '도쿄의 상징적인 랜드마크로 높은 전망대가 인상적인 관광지',
          content: '도쿄 스카이트리는 도쿄의 대표적인 랜드마크로, 매년 많은 관광객들이 찾는 명소입니다. 높이 634미터로 일본에서 가장 높은 전망대를 자랑하며, 도쿄의 아름다운 전경을 한눈에 감상할 수 있습니다. 전망대에서는 도쿄의 도심과 주변 지역을 훨씬 높은 곳에서 조망할 수 있어 멋진 풍경을 즐길 수 있습니다. 또한, 쇼핑몰과 레스토랑이 있는 타운 솔라마치도 방문객들에게 다양한 활동을 제공합니다.'
        },
        {
          name: '아키하바라',
          image: '/images/Tokyo/akihabara.jpg',
          subtitle: '일본의 전자상거리로 유명한 도쿄의 관광명소',
          content: '전자제품, 만화, 애니메이션 관련 상품 등이 가득한 아키하바라는 일본에서 가장 유명한 전자상거리로 알려져 있습니다. 다양한 전자제품, 컴퓨터, 게임, 애니메이션 제품을 구매할 수 있는 많은 상점과 대형 백화점, 아울렛, 카페, 게임 센터 등이 있어 관광객들에게 인기가 있습니다. 또한, 서브컬처와 관련된 이벤트나 코스프레 행사가 자주 열리는 곳으로도 유명합니다.'
        }
      ],
      subcityContent: [
        {
          name: '하코네',
          image: '/images/Tokyo/hakone.jpg',
          subtitle: '아름다운 자연과 온천'
        },
        {
          name: '요코하마',
          image: '/images/Tokyo/chuukagai.jpg',
          subtitle: '신비로운 항구 도시'
        },
        {
          name: '가마쿠라<br>&<br>에노시마',
          image: '/images/Tokyo/enoden.jpg',
          subtitle: '유서깊은 사원과 아름다운 해변'
        },
        {
          name: '야마나시',
          image: '/images/Tokyo/fuji_yosida.jpg',
          subtitle: '후지산을 담은 풍부한 자연환경'
        }
      ]
    }
  }
}
</script>
