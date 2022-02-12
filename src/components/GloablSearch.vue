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
            <form class="d-flex">
              <input
                class="form-control me-2"
                type="search"
                placeholder="Search Movies/ TV Shows/ People"
                aria-label="Search"
              />
              <button class="btn btn-outline-success" type="submit">
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
  name: "GloablSearch"
};
</script>
