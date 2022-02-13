<template>
  <div class="position-relative home-search-wrapper">
    <div class="home-search-content">
      <div class="container">
        <div class="row">
          <div class="col text-white text-center">
            <h1 class="mt-4">Welcome...</h1>
            <h3>
              Millions of movies, TV shows and people to discover. Explore now.
            </h3>
            <form
              class="d-flex"
              method="get"
              action="/search"
              @submit.prevent="validateHomeSearchForm"
            >
              <input
                class="form-control me-2"
                type="search"
                placeholder="Search Movies/ TV Shows/ People"
                aria-label="Search"
                v-model="search"
                :name="search"
              />
              <button
                class="btn btn-outline-success"
                type="submit"
                :disabled="search.length <= 0"
              >
                Search
              </button>
            </form>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: "Search",
  data() {
    return {
      search: "",
    };
  },
  methods: {
    validateHomeSearchForm() {
      if (this.search !== "") {
        let type = this.$route.params.type || "movie";
        window.location.href = `/search/${type}?query=${this.search}`;
      }
      return false;
    },
  },
};
</script>

<style>
.home-search-wrapper {
  background-image: url("../assets/images/staticimages/bg-home-search.jpg");
  background-repeat: no-repeat;
  background-position: center;
  background-size: cover;
}
.home-search-content {
  min-height: calc(3 * var(--min-section-height));
  background-color: var(--bg-opacity);
}
</style>
