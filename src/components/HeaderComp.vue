<template>
    <header  class="d-flex flex-wrap justify-content-center">
        <div id="header-nav" class="d-flex">
            <!--홈 버튼-->
            <router-link to="/" class="d-flex align-items-center mb-md-0 me-md-auto ml-0 text-dark text-decoration-none relative">
                <img src="@/assets/logo.png" style="width:108px">
            </router-link>
            <!--네비게이션-->
            <nav class="navbar_site-header relative">
                <ul class="navbar_list" style="width: auto;height: auto;">
                    <li class="relative" style="height: 100%;">
                        <a href="#" class="nav-link active">목적지</a>
                        <div style="position: absolute;top: 20;opacity: 1;">
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
                        <a href="#" class="nav-link">일어회화</a>
                    </li>
                    <li class="relative">
                        <a href="#" class="nav-link">일정짜기</a>
                    </li>
                    <a href="#" class="btn btn-light">로그인</a>
                </ul>
            </nav>
        </div>
    </header>
</template>

<script>
export default {
  name: 'HeaderComp'
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
</style>
