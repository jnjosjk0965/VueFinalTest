<template>
    <header  class="d-flex flex-wrap justify-content-center" >
        <div id="header-nav" class="d-flex">
            <!--홈 버튼-->
            <router-link to="/" class="relative">
                <img src="@/assets/logo_long.png" style="width:180px">
            </router-link>
            <!--네비게이션-->
            <nav class="navbar_site-header relative">
                <ul class="navbar_list" style="width: auto;height: auto;">
                    <li class="relative" style="height: 100%;">
                        <a href="#" class="nav-link active" @mouseenter="showDropdown" @mouseleave="hideDropdown">목적지</a>
                        <div class="dropdown_bar" :class="{ 'show-dropdown': isDropdownVisible }" @mouseenter="showDropdown" @mouseleave="hideDropdown">
                            <ul class="dropdown-menu position-static d-grid gap-1 p-2 rounded-3 mx-0 shadow w-220px">
                                <li><router-link to="/tokyo" class="dropdown-item rounded-2">도쿄</router-link></li>
                                <li><router-link to="/osaka" class="dropdown-item rounded-2" >오사카</router-link></li>
                                <li><router-link to="/fukuoka" class="dropdown-item rounded-2" >후쿠오카</router-link></li>
                                <!--<li><hr class="dropdown-divider"></li>-->
                                <li><router-link to="/hokkaido" class="dropdown-item rounded-2" >홋카이도</router-link></li>
                            </ul>
                        </div>
                    </li>
                    <li class="relative">
                        <router-link to="/conv" class="dropdown-item rounded-2 nav-link">일어회화</router-link>
                    </li>
                    <li class="relative">
                        <router-link to="/plan" class="dropdown-item rounded-2 nav-link">일정짜기</router-link>
                    </li>
                    <a href="#" class="btn btn-light" data-bs-toggle="modal" data-bs-target="#exampleModal">로그인</a>
                </ul>
            </nav>
        </div>
    </header>
    <section style="padding:1.5rem">
      <div style="border-radius: 26px;min-height: 36rem;overflow: hidden;position: relative;height: 50vh;">
        <img v-bind:src="MainImage" width="1920" height="640" style="width: 100%;max-width: 100%;object-fit: cover;">
      </div>
    </section>
    <div class="modal fade" id="exampleModal" tabindex="-1" aria-labelledby="exampleModalLabel" aria-hidden="true">
        <div class="modal-dialog">
            <div class="modal-content">
                <div class="modal-header c-flex">
                    <img src="@/assets/logo_long.png" style="width:180px">
                    <h1 class="modal-title fs-5" id="exampleModalLabel">로그인</h1>
                    <button type="button" class="btn-close" data-bs-dismiss="modal" aria-label="Close"></button>
                </div>
                <div class="modal-body">
                    <div class="input-group mb-3">
                        <input type="text" class="form-control" placeholder="아이디" aria-label="Username" aria-describedby="basic-addon1">
                    </div>
                    <div class="input-group mb-3">
                        <input type="text" class="form-control" placeholder="비밀번호" aria-label="Username" aria-describedby="basic-addon1">
                    </div>
                </div>
                <div class="modal-footer">
                    <button type="button" class="btn btn-secondary" data-bs-dismiss="modal">Close</button>
                    <button type="button" class="btn btn-primary">Save changes</button>
                </div>
            </div>
        </div>
    </div>
</template>

<script>
export default {
  name: 'HeaderComp',
  components: {
  },
  data () {
    return {
      isDropdownVisible: false
    }
  },
  methods: {
    showDropdown () {
      this.isDropdownVisible = true
    },
    hideDropdown () {
      this.isDropdownVisible = false
    }
  },
  props: ['MainImage']
}
</script>

<style scoped>
    /* tag */
    header{
        color: #fff;
        height: 9rem;
        width: 100%;
        position: absolute;
        align-items: center;
        top: 0;
        z-index: 30;
    }
    /* id */
    #header-nav{
        width: 100%;
        max-width: 1280px;
        padding: 1rem 2.5rem;
        flex-direction: row;
        justify-content: space-between;
        align-content: center;
        align-items: center;
    }
    @media (min-width: 1024px) {
        #header-nav {
            margin: auto;
        }
    }
    /* class */
    .navbar_site-header{
        right: 0;
        margin-left: auto;
    }
    .navbar_list{
        --bs-nav-link-padding-x: 1rem;
        --bs-nav-link-padding-y: 0.5rem;
        --bs-nav-link-font-weight: ;
        display: flex;
        flex-wrap: wrap;
        padding-left: 0;
        margin-bottom: 0;
        list-style: none;
    }
    .navbar_list>*{
        margin-left: 10px;
        font-weight: bold;
    }
    .dropdown_bar {
        position: absolute;
        overflow: hidden;
        height: 0;
        top: 45px;
        transition: height 0.4s ease;
    }
    .show-dropdown.dropdown_bar {
        height: 200px;
    }
</style>
