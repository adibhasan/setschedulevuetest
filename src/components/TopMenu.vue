<template>
  <nav class="navbar navbar-expand-lg navbar-light bg-light border-bottom">
    <div class="container-fluid">
      <a class="navbar-brand" href="/">
        <img
          class="wd-150"
          src="https://www.themoviedb.org/assets/2/v4/logos/v2/blue_short-8e7b30f73a4020692ccca9c88bafe5dcb6f8a62a4c6bc55cd9ba82bb2cd95f6c.svg"
        />
      </a>
      <button
        class="navbar-toggler"
        type="button"
        data-bs-toggle="collapse"
        data-bs-target="#navbarSupportedContent"
        aria-controls="navbarSupportedContent"
        aria-expanded="false"
        aria-label="Toggle navigation"
      >
        <span class="navbar-toggler-icon"></span>
      </button>
      <div class="collapse navbar-collapse" id="navbarSupportedContent">
        <ul class="navbar-nav me-auto mb-2 mb-lg-0">
          <li class="nav-item" v-for="(menu, index) in topMenus">
            <router-link
              :to="`/categories/${menu.type}`"
              class="nav-link active"
              aria-current="page"
              >{{ menu.title }}</router-link
            >
          </li>
        </ul>
        <form
          class="d-flex"
          method="get"
          action="/search"
          @submit.prevent="validateSearchForm"
        >
          <input
            class="form-control me-2"
            type="search"
            placeholder="Search"
            aria-label="Search"
            require="required"
            v-model="query"
            :name="query"
          />
          <button class="btn btn-outline-success" type="submit" :disabled="query.length <= 0">Search</button>
        </form>
      </div>
    </div>
  </nav>
</template>

<script>
import { POPULAR } from "@/utils/Constant";

export default {
  name: "TopMenu",
  data() {
    return {
      topMenus: POPULAR,
      query: "",
    };
  },
  methods: {
    validateSearchForm() {
      console.log(this.query);
      if (this.query !=="") {
        let type = this.$route.params.type || 'movie'
        window.location.href = `/search/${type}?query=${this.query}`
      }
      return false
    },
  }
};
</script>
<style>
.wd-150 {
  width: 200px;
}
</style>
