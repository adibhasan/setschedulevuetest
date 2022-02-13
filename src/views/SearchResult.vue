<template>
  <section id="search-result-wrapper" class="mt-4">
    <div class="container">
      <div class="row">
        <div class="col-12 col-sm-4 col-md-3">
          <SearchCategory :categories="categories" :query="searchKey" />
        </div>
        <div class="col-12 col-sm-8 col-md-9">
          <LandscapeCard :searchDetails="searchDetails" />
          <Pagination :pagination="paging" />
        </div>
      </div>
    </div>
  </section>
</template>

<script>
import SearchCategory from "@/components/SearchCategory.vue";
import LandscapeCard from "@/components/LandscapeCard.vue";
import Pagination from "@/components/Pagination.vue";
import ApiRequestService from "@/services/ApiRequestService";
import { CATEGORY } from "@/utils/Constant";


export default {
  name: "SearchResults",
  components: {
    SearchCategory,
    LandscapeCard,
    Pagination,
  },
  data() {
    return {
      searchKey: "",
      page: 1,
      type: "multi",
      paging: {
        currentpage: 0,
        totalPage: 0,
      },
      categories: CATEGORY,
      searchDetails: [],
    };
  },
  methods: {
    getAllDataNumber() {
      let type = this.$route.params.type;
      let query = this.$route.query.query;
      let page = this.$route.query.page || 1;
      if (query === "") {
        this.$router.push("/error");
      }
      if (type === "") {
        type = "movie";
      }
      if (page === "") {
        page = 1;
      }
      this.searchKey = query;
      this.page = page;
      this.type = type;
    },
    setData(response) {
      this.searchDetails = response.data.results;
      this.totalPage = response.data.total_pages;
      this.paging.currentpage = response.data.page;
      this.paging.totalPage = response.data.total_pages;
    },
    getData() {
      ApiRequestService.searchByType(this.searchKey, this.page, this.type)
        .then((response) => {
          this.setData(response);
        })
        .catch((error) => {});
    },
  },
  created() {
    this.getAllDataNumber();
    for (let category of this.categories) {
      ApiRequestService.searchByType(this.searchKey, 1, category.type)
        .then((response) => {
          this.categories[category.id - 1].total = response.data.total_results;
        })
        .catch((error) => {});
    }
    this.getData();
  },
  updated() {
    this.getAllDataNumber();
  },
  watch: {
    $route(to, from) {
      this.getAllDataNumber();
      this.getData();
    },
  }
};
</script>

