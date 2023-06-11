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
  name: 'HokkaidoView',
  components: {
    HeaderComp,
    ContentTitleComp,
    ContentBoxComp,
    SubcityComp,
    FooterComp
  },
  data () {
    return {
      MainImage: '/images/Hokkaido/otaru-canal-summer.jpg',
      city: {
        name: '홋카이도',
        introduce: '맥주, 온천, 눈 축제 등 홋카이도에는 즐길거리와 구경거리가 다양하다. 봄에가면 라일락 축제, 겨울에 가면 눈축제를! 사계절 내내 심심할 틈 없는 여행지로 손꼽힌다.'
      },
      foodContents: [
        {
          name: '카이센동',
          image: '/images/Hokkaido/kaisendon.jpg',
          subtitle: '',
          content: '카이센동이라 불리는 해물 덮밥은 밥 위에 싱싱한 해산물을 올린 덮밥이다. 위에 올린 토핑 종류는 다양하다. 연어, 게 다리, 연어알, 가리비, 성게알 등 자신의 취향에 따라 골라먹을 수 있는 재미가 있다.<blockquote><i>"개인적으로 성게알(우니)을 강추한다."</i></blockquote>'
        },
        {
          name: '징기스칸',
          image: '/images/Hokkaido/jingisukan.jpg',
          subtitle: '',
          content: '징기스칸은 둥근 헬멧 형태의 철판에 양고기를 양배추, 콩나물 등과 같은 채소와 구워낸 요리다. 기호에 따라 양념에 살짝 찍어먹으면 된다.'
        },
        {
          name: '수프 카레',
          image: '/images/Hokkaido/soupcurry.jpg',
          subtitle: '',
          content: '일본 풍의 카레와 진한 향을 내는 수프를 섞어 밥과 같이 제공하는 요리. 신선하고 향이 좋은 허브, 각종 채소들이 들어가 건강식으로 즐길 수 있는 요리다. 매운 맛에서부터 순한 맛까지 자신의 취향대로 선택해 주문해 먹을 수 있다.'
        },
        {
          name: '털게 요리',
          image: '/images/Hokkaido/kegani.jpg',
          subtitle: '',
          content: '삿포로의 특산품인 털게는 탕, 찜, 등 다양한 방법으로 요리해 먹는다. 잘익은 등딱지에 밥을 비벼 먹는 그 맛이 일품이다.'
        }
      ],
      sightContents: [
        {
          name: '삿포로 맥주공장',
          image: '/images/Hokkaido/Hokkaido-castle01.jpg',
          subtitle: '삿포로 맥주의 모든 것, 일본 유일의 맥주 박물관',
          content: '1987년 개관 이후 꾸준히 사랑받고 있는 곳. 맥주 제조 과정, 시대별 변천사 등 맥주에 대한 다양한 궁금증을 해소할 수 있다. 유료 맥주 시음, 견학 등 직접 참여해볼 수 있는 이벤트도 마련돼 있다. 전시관을 천천히 구경한 후 라운지에서 마시는 맥주는 꿀맛!'
        },
        {
          name: '오도리공원',
          image: '/images/Hokkaido/Hokkaido-dotonbori02.jpg',
          subtitle: '다양한 축제와 꽃이 가득한 삿포로 대표 공원',
          content: '삿포로 중심부에 위치해 있는 도심 공원으로 동서 방향 1.5km에 걸쳐 긴 산책로가 조성돼 있다. 뻥뚤린 시야너머로는 삿포로 랜드마크인 TV 타워가 보인다. 또한 오도리 공원에서는 요사코이 소란축제, 눈 축제나 일루미네이션 등, 계절마다 다양한 이벤트가 개최되는 홋카이도 제일의 회장이다.'
        },
        {
          name: '나카지마 공원',
          image: '/images/Hokkaido/usj.jpg',
          subtitle: '풍경이 아름다운 공원',
          content: '19세기에 조성된 공원으로, 우거진 녹음과 작은 호수들이 어우러진 아름다운 풍경을 볼 수 있는 곳이다. 또한 사계절 내내 다양한 축제가 열리는 장소이다. 특히 눈을 이용해 다양한 조형물을 만들어 볼 수 있는 겨울 축제 \'유키 아카리 인 나카지마 공원\' 어린이들뿐만 아니라 연인과 가족 등 모든 층에게 인기있는 축제로 유명하다.'
        },
        {
          name: '조잔케이 온천마을',
          image: '/images/Hokkaido/umedasky.jpg',
          subtitle: '자연 속 힐링과 온천을 즐길 수 있는 온천 마을',
          content: '조잔케이 지역은 도요히라강의 계곡을 따라 자리하며 삿포로 시내에서 남쪽으로 약 26 km, 자동차로 약 1시간 거리에 위치하는, 홋카이도의 대표적인 온천지입니다. 이 지역 내의 무이네산과 소라누마악, 삿포로악 등은 화산활동으로 생성된 산악지형이며, 고산식물도 서식하고 있습니다. 이러한 풍부한 자연환경을 경험해 보시기 바랍니다.'
        }
      ],
      subcityContent: [
        {
          name: '오타루',
          image: '/images/Hokkaido/otaru-canal.jpg',
          subtitle: '노스탈직한 항구도시'
        },
        {
          name: '후라노',
          image: '/images/Hokkaido/furano.jpg',
          subtitle: '지평선 끝까지 펼쳐진 라벤더밭'
        },
        {
          name: '비에이',
          image: '/images/Hokkaido/biei.jpg',
          subtitle: '에메랄드 빛 푸른 호수'
        },
        {
          name: '아바시리',
          image: '/images/Hokkaido/abasiri.jpg',
          subtitle: '오호츠크해의 유빙관람'
        }
      ]
    }
  }
}
</script>
