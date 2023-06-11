<template>
  <div class="relative">
    <HeaderComp :MainImage="MainImage" />
    <div class="container c-flex justify-content-center">
      <div style="display: block;">
        <div id="content-wrapper">
          <div class="w-100 mx-auto" style="max-width: 960px;">
            <div style="margin-top: 80px; margin-bottom: 144px;">
              <template v-if="!userAnswered">
                <div class="relative d-flex mb-3">
                  <span>
                    <h2 style="line-height: 3rem;">
                        안녕하세요 환영합니다! <br />
                        혹시 여행지를 정하셨나요?
                    </h2>
                  </span>
                </div>
                <div class="mt-5">
                    <div class="radiogroup relative">
                      <div class="choice-layout">
                        <!-- 예 버튼 -->
                        <div class="mb-3 rounded align-items-center d-flex radio-button">
                          <div class="tag">1</div>
                          <div class="choice" @click="userAnswered = true; showDestinationQuestion = true;">
                            예
                          </div>
                        </div>
                        <!-- 아니오 버튼 -->
                        <div class="mb-3 rounded align-items-center d-flex radio-button">
                          <div class="tag">2</div>
                          <div class="choice" @click="userAnswered = true; showPurposeList = true">
                            아니오
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
              </template>
              <!-- 도시 선택 -->
              <template v-if="showDestinationQuestion">
                <div class="relative d-flex mb-3">
                  <span>
                    <h2 style="line-height: 3rem;">
                        그렇군요! 그렇다면 <br />
                        알고 싶은 여행지는 어디인가요?
                    </h2>
                  </span>
                </div>
                <ul class="choice-layout">
                  <li>
                    <router-link to="/tokyo" class="rounded-2" style="text-decoration: none;">
                      <div class="mb-3 rounded align-items-center d-flex radio-button">
                        <div class="tag">1</div>
                        <div class="choice">
                          도쿄
                        </div>
                      </div>
                    </router-link>
                  </li>
                  <li>
                    <router-link to="/osaka" class="rounded-2" style="text-decoration: none;">
                      <div class="mb-3 rounded align-items-center d-flex radio-button">
                        <div class="tag">2</div>
                        <div class="choice">
                          오사카
                        </div>
                      </div>
                    </router-link>
                  </li>
                  <li>
                    <router-link to="/fukuoka" class="rounded-2" style="text-decoration: none;">
                      <div class="mb-3 rounded align-items-center d-flex radio-button">
                        <div class="tag">3</div>
                        <div class="choice">
                          후쿠오카
                        </div>
                      </div>
                    </router-link>
                  </li>
                  <li>
                    <router-link to="/hokkaido" class="rounded-2" style="text-decoration: none;">
                      <div class="mb-3 rounded align-items-center d-flex radio-button">
                        <div class="tag">4</div>
                        <div class="choice">
                          홋카이도
                        </div>
                      </div>
                    </router-link>
                  </li>
                </ul>
              </template>
              <!-- 목적 선택 -->
              <template v-if="showPurposeList">
                <div class="relative d-flex mb-3">
                  <span>
                    <h2 style="line-height: 3rem;">
                        그렇군요! 그렇다면 <br />
                        여행의 목적이 무엇인가요? (2택)
                    </h2>
                  </span>
                </div>
                  <ul class="choice-layout">
                    <li>
                      <div class="mb-3 rounded align-items-center d-flex radio-button">
                        <div class="tag"><input type="checkbox" value="onsen" v-model="userChoice" @change="checkUserChoice"></div>
                        <div class="choice">
                          온천
                        </div>
                      </div>
                    </li>
                    <li>
                      <div class="mb-3 rounded align-items-center d-flex radio-button">
                        <div class="tag"><input type="checkbox" value="landmark" v-model="userChoice" @change="checkUserChoice"></div>
                        <div class="choice">
                          문화유산
                        </div>
                      </div>
                    </li>
                    <li>
                      <div class="mb-3 rounded align-items-center d-flex radio-button">
                        <div class="tag"><input type="checkbox" value="nature" v-model="userChoice" @change="checkUserChoice"></div>
                        <div class="choice">
                          자연광경
                        </div>
                      </div>
                    </li>
                  </ul>
                  <p>{{ userChoice }}</p>
              </template>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import HeaderComp from '../components/HeaderComp.vue'

export default {
  name: 'HomeView',
  components: {
    HeaderComp
  },
  data () {
    return {
      MainImage: '/images/Tokyo/mount_Fuji_forMain.jpg',
      userAnswered: false,
      showDestinationQuestion: false,
      showPurposeList: false,
      onsen: ['도쿄', '후쿠오카', '홋카이도'],
      landmark: ['도쿄', '후쿠오카', '오사카'],
      nature: ['후쿠오카', '홋카이도'],
      userChoice: []
    }
  },
  methods: {
    checkUserChoice (event) {
      if (this.userChoice.length > 2) {
        event.target.checked = false
        this.userChoice.splice(this.userChoice.length - 1, 1)
      }
    }
  }
}
</script>
