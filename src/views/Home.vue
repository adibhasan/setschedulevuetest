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
  <section id="most-popular-movies">
    <div class="container">
      <div class="row">
        <div class="col">
          <h3 class="my-4 pb-2 border-bottom">Popular Movies</h3>
        </div>
      </div>
      <div class="row">
        <div class="col-3" v-for="movy in popularMovies" :key="movy.id">
          <Card :popularMovy="movy" />
        </div>
      </div>
    </div>
  </section>
  <section id="most-popular-tv-shows">
    <div class="container">
      <div class="row">
        <div class="col">
          <h3 class="my-4 pb-2 border-bottom">Popular TV Shows</h3>
        </div>
      </div>
      <div class="row">
        <div class="col-3" v-for="movy in popularMovies" :key="movy.id">
          <Card :popularMovy="movy" />
        </div>
      </div>
    </div>
  </section>
  <section id="most-popular-people">
    <div class="container">
      <div class="row">
        <div class="col">
          <h3 class="my-4 pb-2 border-bottom">Popular People</h3>
        </div>
      </div>
      <div class="row">
        <div class="col-3" v-for="movy in popularMovies" :key="movy.id">
          <Card :popularMovy="movy" />
        </div>
      </div>
    </div>
  </section>
</template>

<script>

import Card from '../components/Card.vue'
import ApiRequestService from '../services/ApiRequestService'

export default {
  name: "Home",
  components: {
    Card
  },
  data(){
    return {
      popularMovies:[]
    }
  },
  created() {
    ApiRequestService.getPopularMovies()
         .then( response =>{
            this.popularMovies = response.data.results
         })
         .catch(error => {
           console.log('There was an error:' + error.response)
         })
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
  min-height: calc(2 * var(--min-section-height));
  background-color: var(--bg-opacity);
}

</style>
