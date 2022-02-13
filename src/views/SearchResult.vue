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
          <SearchCategory :categories="categories" :query="searchKey" />
          <p class="mt-4 text-muted s-font-size">
            &#9432; Tip: You can use the 'y:' filter to narrow your results by
            year. Example: 'star wars y:1977'.
          </p>
        </div>
        <div class="col-9">
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
import SearchCategory from "@/components/SearchCategory.vue";
import ApiRequestService from "../services/ApiRequestService";

export default {
  name: "SearchResults",
  components: {
    SearchCategory,
  },
  data() {
    return {
      searchKey: "",
      totalPage: 0,
      categories: [
        {
          id: 1,
          title: "Movies",
          total: 0,
          type: "movie",
        },
        {
          id: 2,
          title: "TV Shows",
          total: 0,
          type: "tv",
        },
        {
          id: 3,
          title: "People",
          total: 0,
          type: "person",
        },
        {
          id: 4,
          title: "Collections",
          total: 0,
          type: "collection",
        },
        {
          id: 5,
          title: "Keywords",
          total: 0,
          type: "keyword",
        },
        {
          id: 6,
          title: "Companies",
          total: 0,
          type: "company",
        },
        {
          id: 7,
          title: "Collection",
          total: 0,
          type: "collection",
        },
      ],
      searchDetails: [],
    };
  },
  methods: {
    getAllDataNumber() {
      let type = this.$route.params.type
      let query = this.$route.query.query
      let page = this.$route.query.page
      if (query === "") {
        this.$router.push("/error");
      }
      if (type === "") {
        type = "movie"
      }
      if (page === "") {
        page = 1
      }
      this.searchKey = query
      ApiRequestService.searchByType(this.searchKey,page,type)
         .then( response =>{
            this.searchDetails = response.data.result
            this.totalPage = response.data.total_pages
         })
         .catch(error => {
            
         })
    },
  },
  created() {
    this.getAllDataNumber()
    for (let category of this.categories) {
        ApiRequestService.searchByType(this.searchKey,1,category.type)
         .then( response =>{
            this.categories[category.id-1].total = response.data.total_results
         })
         .catch(error => {
            
         })
    }
  },
  updated() {
    console.log(11);
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
