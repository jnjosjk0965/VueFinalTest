<template>
  <div class="relative">
    <header  class="d-flex flex-wrap justify-content-center" style="padding: 1rem 2.5rem;">
      <router-link to="/" class="d-flex align-items-center mb-md-0 me-md-auto ml-0 text-dark text-decoration-none relative">
        <img src="@/assets/logo_long.png" style="width:180px">
      </router-link>
    </header>
    <!--사이드바-->
    <div class="d-flex flex-nowrap h-auto">
      <!--도시 선택-->
      <div class="d-flex flex-column flex-shrink-0 p-3 bg-light" style="width: 280px;">
        <a href="/" class="d-flex align-items-center mb-3 mb-md-0 me-md-auto link-dark text-decoration-none">
          <svg class="bi pe-none me-2" width="40" height="32"><use xlink:href="#bootstrap"></use></svg>
          <span class="fs-4">Sidebar</span>
        </a>
        <hr>
        <ul class="nav nav-pills flex-column mb-auto">
          <li class="nav-item">
            <a href="#" class="nav-link active" aria-current="page">
              <svg class="bi pe-none me-2" width="16" height="16"><use xlink:href="#home"></use></svg>
              Home
            </a>
          </li>
          <li>
            <a href="#" class="nav-link link-dark">
              <svg class="bi pe-none me-2" width="16" height="16"><use xlink:href="#speedometer2"></use></svg>
              Dashboard
            </a>
          </li>
          <li>
            <a href="#" class="nav-link link-dark">
              <svg class="bi pe-none me-2" width="16" height="16"><use xlink:href="#table"></use></svg>
              Orders
            </a>
          </li>
          <li>
            <a href="#" class="nav-link link-dark">
              <svg class="bi pe-none me-2" width="16" height="16"><use xlink:href="#grid"></use></svg>
              Products
            </a>
          </li>
          <li>
            <a href="#" class="nav-link link-dark">
              <svg class="bi pe-none me-2" width="16" height="16"><use xlink:href="#people-circle"></use></svg>
              Customers
            </a>
          </li>
        </ul>
        <hr>
        <div class="dropdown">
          <a href="#" class="d-flex align-items-center link-dark text-decoration-none dropdown-toggle" data-bs-toggle="dropdown" aria-expanded="false">
            <img src="https://github.com/mdo.png" alt="" width="32" height="32" class="rounded-circle me-2">
            <strong>mdo</strong>
          </a>
          <ul class="dropdown-menu text-small shadow">
            <li><a class="dropdown-item" href="#">New project...</a></li>
            <li><a class="dropdown-item" href="#">Settings</a></li>
            <li><a class="dropdown-item" href="#">Profile</a></li>
            <li><hr class="dropdown-divider"></li>
            <li><a class="dropdown-item" href="#">Sign out</a></li>
          </ul>
        </div>
      </div>
      <!--행선지 선택-->
      <div class="d-flex flex-column align-items-stretch flex-shrink-0 bg-white" style="width: 380px;overflow: scroll;">
        <a href="/" class="d-flex align-items-center flex-shrink-0 p-3 link-dark text-decoration-none border-bottom">
          <svg class="bi pe-none me-2" width="30" height="24"><use xlink:href="#bootstrap"></use></svg>
          <span class="fs-5 fw-semibold">List group</span>
        </a>
        <div class="list-group list-group-flush border-bottom scrollarea">
          <a href="#" class="list-group-item list-group-item-action active py-3 lh-sm" aria-current="true">
            <div class="d-flex w-100 align-items-center justify-content-between">
              <strong class="mb-1">List group item heading</strong>
              <small>Wed</small>
            </div>
            <div class="col-10 mb-1 small">Some placeholder content in a paragraph below the heading and date.</div>
          </a>
          <a href="#" class="list-group-item list-group-item-action py-3 lh-sm">
            <div class="d-flex w-100 align-items-center justify-content-between">
              <strong class="mb-1">List group item heading</strong>
              <small class="text-muted">Tues</small>
            </div>
            <div class="col-10 mb-1 small">Some placeholder content in a paragraph below the heading and date.</div>
          </a>
          <a href="#" class="list-group-item list-group-item-action py-3 lh-sm">
            <div class="d-flex w-100 align-items-center justify-content-between">
              <strong class="mb-1">List group item heading</strong>
              <small class="text-muted">Mon</small>
            </div>
            <div class="col-10 mb-1 small">Some placeholder content in a paragraph below the heading and date.</div>
          </a>

          <a href="#" class="list-group-item list-group-item-action py-3 lh-sm" aria-current="true">
            <div class="d-flex w-100 align-items-center justify-content-between">
              <strong class="mb-1">List group item heading</strong>
              <small class="text-muted">Wed</small>
            </div>
            <div class="col-10 mb-1 small">Some placeholder content in a paragraph below the heading and date.</div>
          </a>
          <a href="#" class="list-group-item list-group-item-action py-3 lh-sm">
            <div class="d-flex w-100 align-items-center justify-content-between">
              <strong class="mb-1">List group item heading</strong>
              <small class="text-muted">Tues</small>
            </div>
            <div class="col-10 mb-1 small">Some placeholder content in a paragraph below the heading and date.</div>
          </a>
          <a href="#" class="list-group-item list-group-item-action py-3 lh-sm">
            <div class="d-flex w-100 align-items-center justify-content-between">
              <strong class="mb-1">List group item heading</strong>
              <small class="text-muted">Mon</small>
            </div>
            <div class="col-10 mb-1 small">Some placeholder content in a paragraph below the heading and date.</div>
          </a>
          <a href="#" class="list-group-item list-group-item-action py-3 lh-sm" aria-current="true">
            <div class="d-flex w-100 align-items-center justify-content-between">
              <strong class="mb-1">List group item heading</strong>
              <small class="text-muted">Wed</small>
            </div>
            <div class="col-10 mb-1 small">Some placeholder content in a paragraph below the heading and date.</div>
          </a>
          <a href="#" class="list-group-item list-group-item-action py-3 lh-sm">
            <div class="d-flex w-100 align-items-center justify-content-between">
              <strong class="mb-1">List group item heading</strong>
              <small class="text-muted">Tues</small>
            </div>
            <div class="col-10 mb-1 small">Some placeholder content in a paragraph below the heading and date.</div>
          </a>
          <a href="#" class="list-group-item list-group-item-action py-3 lh-sm">
            <div class="d-flex w-100 align-items-center justify-content-between">
              <strong class="mb-1">List group item heading</strong>
              <small class="text-muted">Mon</small>
            </div>
            <div class="col-10 mb-1 small">Some placeholder content in a paragraph below the heading and date.</div>
          </a>
          <a href="#" class="list-group-item list-group-item-action py-3 lh-sm" aria-current="true">
            <div class="d-flex w-100 align-items-center justify-content-between">
              <strong class="mb-1">List group item heading</strong>
              <small class="text-muted">Wed</small>
            </div>
            <div class="col-10 mb-1 small">Some placeholder content in a paragraph below the heading and date.</div>
          </a>
          <a href="#" class="list-group-item list-group-item-action py-3 lh-sm">
            <div class="d-flex w-100 align-items-center justify-content-between">
              <strong class="mb-1">List group item heading</strong>
              <small class="text-muted">Tues</small>
            </div>
            <div class="col-10 mb-1 small">Some placeholder content in a paragraph below the heading and date.</div>
          </a>
          <a href="#" class="list-group-item list-group-item-action py-3 lh-sm">
            <div class="d-flex w-100 align-items-center justify-content-between">
              <strong class="mb-1">List group item heading</strong>
              <small class="text-muted">Mon</small>
            </div>
            <div class="col-10 mb-1 small">Some placeholder content in a paragraph below the heading and date.</div>
          </a>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: 'BuildPlan',
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
