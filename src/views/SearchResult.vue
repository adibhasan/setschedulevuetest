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
  <section id="search-result-wrapper" class="mt-4">
    <div class="container">
      <div class="row">
        <div class="col-3">
          <div class="card">
            <div class="card-header">Search Results</div>
            <div class="card-body">
              <a
                href="#"
                type="button"
                class="btn btn-sm btn-secondary d-block w-100 mb-1"
              >
                Notifications <span class="badge badge-light">4</span>
              </a>
              <a
                href="#"
                type="button"
                class="btn btn-sm btn-secondary d-block w-100 mb-1"
              >
                Notifications <span class="badge badge-light">4</span>
              </a>
              <a
                href="#"
                type="button"
                class="btn btn-sm btn-secondary d-block w-100 mb-1"
              >
                Notifications <span class="badge badge-light">4</span>
              </a>
              <a
                href="#"
                type="button"
                class="btn btn-sm btn-secondary d-block w-100 mb-1"
              >
                Notifications <span class="badge badge-light">4</span>
              </a>
            </div>
          </div>
          <p class="mt-4 text-muted s-font-size">&#9432;  Tip: You can use the 'y:' filter to narrow your results by year. Example: 'star wars y:1977'.</p>
        </div>
        <div class="col-9">
          <div class="card mb-4">
            <div class="card-body">
              <div class="row">
                <div class="col-3">
                  <img
                    src="https://www.themoviedb.org/t/p/w300_and_h300_bestv2//iQFcwSGbZXMkeyKrxbPnwnRo5fl.jpg"
                    class="card-img-top"
                    alt="..."
                  />
                </div>
                <div class="col-9">
                  <h5 class="card-title">Spider-Man: No Way Home</h5>
                  <div class="card-text">
                    <small class="text-muted s-font-size"
                      >September 16, 1977</small
                    >
                  </div>
                  <p class="card-text s-font-size">
                    Peter Parker is unmasked and no longer able to separate his
                    normal life from the high-stakes of being a super-hero. When
                    he asks for help from Doctor Strange the stakes become even
                    more dangerous, forcing him to discover what it truly means
                    to be Spider-Man.
                  </p>
                  <div class="mt-4">
                    <a href="#" class="btn btn-outline-success btn-sm"
                      >Details</a
                    >
                  </div>
                </div>
              </div>
            </div>
          </div>

          <div class="card mb-4">
            <div class="card-body">
              <div class="row">
                <div class="col-3">
                  <img
                    src="https://www.themoviedb.org/t/p/w300_and_h300_bestv2//iQFcwSGbZXMkeyKrxbPnwnRo5fl.jpg"
                    class="card-img-top"
                    alt="..."
                  />
                </div>
                <div class="col-9">
                  <h5 class="card-title">Spider-Man: No Way Home</h5>
                  <div class="card-text">
                    <small class="text-muted s-font-size"
                      >September 16, 1977</small
                    >
                  </div>
                  <p class="card-text s-font-size">
                    Peter Parker is unmasked and no longer able to separate his
                    normal life from the high-stakes of being a super-hero. When
                    he asks for help from Doctor Strange the stakes become even
                    more dangerous, forcing him to discover what it truly means
                    to be Spider-Man.
                  </p>
                  <div class="mt-4">
                    <a href="#" class="btn btn-outline-success btn-sm"
                      >Details</a
                    >
                  </div>
                </div>
              </div>
            </div>
          </div>

          <nav aria-label="Page navigation example">
            <ul class="pagination">
              <li class="page-item">
                <a class="page-link" href="#">Previous</a>
              </li>
              <li class="page-item"><a class="page-link" href="#">1</a></li>
              <li class="page-item"><a class="page-link" href="#">2</a></li>
              <li class="page-item"><a class="page-link" href="#">3</a></li>
              <li class="page-item"><a class="page-link" href="#">Next</a></li>
            </ul>
          </nav>
        </div>
      </div>
    </div>
  </section>
</template>

<script>
import Card from "../components/Card.vue";

export default {
  name: "SearchResults",
  components: {
    Card,
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
