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
  name: 'OsakaView',
  components: {
    HeaderComp,
    ContentTitleComp,
    ContentBoxComp,
    SubcityComp,
    FooterComp
  },
  data () {
    return {
      MainImage: '/images/Osaka/osaka-dotonbori_forMain.jpg',
      city: {
        name: '오사카',
        introduce: '접근성이 좋아 첫 해외여행지로 어렵지 않은 오사카. 다양한 먹거리와 볼거리, 즐길 거리가 풍부해 눈과 입이 즐겁다. 또 주변에 있는 교토 나라등 색다른 매력이 있는 도시들도 같이 들르면 좋다.'
      },
      foodContents: [
        {
          name: '타코야키',
          image: '/images/Osaka/takoyaki.jpg',
          subtitle: '',
          content: '타코야키하면 오사카, 보들보들한 속과 쫄깃한 문어 식감이 잘 어우러져 자꾸 생각나게 된다. 크기가 조금 커 이쑤시개 하나로는 먹기 불편하니 넉넉히 챙기자.'
        },
        {
          name: '오코노미야끼',
          image: '/images/Osaka/okonomiyaki.jpg',
          subtitle: '',
          content: '오사카에서 탄생한 음식으로, 다양한 재료를 반죽해 철판에 구운 일본식 부침개라할 수 있다. 취향대로 \'오코노미\'와 구이 \'야키\'가 합쳐진 말로 원하는 재료를 골라 넣어먹을 수 있는 가게도 있다. 대부분의 가게에선 직원들이 구워주는 경우가 많으니 걱정 말고 가보자.'
        },
        {
          name: '쿠시카츠',
          image: '/images/Osaka/kusikatsu.jpg',
          subtitle: '',
          content: '바삭한 꼬치 튀김을 톡 쏘는 소스에 찍어 먹으면 시원한 맥주 생각이 절로 난다. 단 소스는 한 번만 찍는게 국룰이므로 기억하고 가자.'
        },
        {
          name: '고베규',
          image: '/images/Osaka/gobegyu.jpg',
          subtitle: '',
          content: '일본, 그것도 칸사이 지방에 왔다면 꼭 먹어봐야 할 메뉴. 일본의 와규가 유명하는 것은 누구나 잘 아는 사실이지만, 그중에서도 고베 지역의 소인 고베규는 차원이 다르다. 마블링이 일품이라 불에 살짝만 구워도 그 풍미가 뛰어나다.'
        }
      ],
      sightContents: [
        {
          name: '오사카 성',
          image: '/images/Osaka/osaka-castle01.jpg',
          subtitle: '일본 3대 성 중 하나',
          content: '오사카 관광명소로 손꼽히는 대표적인 곳 오사카성입니다. 봄에는 벚꽃이 만개하여 벚꽃놀이 가기 좋은 여행지고, 여름에는 푸른 녹음이 지천에 깔리고 가을에는 알록달록 단풍이, 겨울에는 하얀 눈으로 뒤덮히는 어느 계절에 가도 아름다운 곳입니다. 일본 건축양식을 잘 보여주는 성으로 높은 곳에서 바라보는 천수각이 아름다운 곳입니다. 주변에는 인공호수를 비롯해 산책하기도 좋습니다.'
        },
        {
          name: '도톤보리',
          image: '/images/Osaka/osaka-dotonbori02.jpg',
          subtitle: '쇼핑과 먹거리 천국',
          content: '오사카에서도 맛집이 많은 도톤보리. 부지런히 소화를 시켜야 계속 먹을 수 있다. 유쾌한 간판도 많아 포토존으로도 충분.신사이바시에는 문구, 의류, 액세서리, 캐릭터, 서점등 없는게 없으니 \'텅장 주의보\'.'
        },
        {
          name: '유니버설 스튜디오 재팬',
          image: '/images/Osaka/usj.jpg',
          subtitle: '오사카를 대표하는 테마파크',
          content: '유명 헐리우드 영화를 테마로 한 공원에서 인생샷도 건지고, 흥미진진한 어트렉션도 놓치지 말자. 최고 인기는 역시 \'스파이더맨 라이드\'와 \'해리포터 라이드\'. 최근에는 슈퍼마리오를 배경으로한 슈퍼 닌텐도 월드도 개장해 화재가 되었다.'
        },
        {
          name: '우메다 스카이 빌딩',
          image: '/images/Osaka/umedasky.jpg',
          subtitle: '도심 속 공중정원',
          content: '지상 40층으로 파리 개선문과 비슷한 모양이다. 최고층의 공중 정원 전망대는 사방이 유리라 멀리는 오사카만 까지 보인다.'
        },
        {
          name: '헵파이브',
          image: '/images/Osaka/hep-five.jpg',
          subtitle: '일본의 전자상거리로 유명한 도쿄의 관광명소',
          content: '우메다에는 대관람차와 대형 오브제 고래로 유명한 헵파이브가 있다. 디즈니 스토어, 짱구, 원피스 등 캐릭터 전문 매장이 모여있고, 또한 20대를 타깃으로 한 중저가 브랜드 상점도 많이 있다.'
        }
      ],
      subcityContent: [
        {
          name: '교토',
          image: '/images/Osaka/kyoto.jpg',
          subtitle: '역사와 전통이 공존하는 일본의 문화 수도'
        },
        {
          name: '나라',
          image: '/images/Osaka/narakoen.jpg',
          subtitle: '사슴으로 유명한 나라'
        },
        {
          name: '고베',
          image: '/images/Osaka/kobe.jpg',
          subtitle: '고베규와 아름다운 하버뷰가 있는 도시'
        }
      ]
    }
  }
}
</script>
