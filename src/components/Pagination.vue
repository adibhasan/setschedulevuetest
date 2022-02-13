<template>
  <nav aria-label="Page navigation">
    <ul class="pagination">
      <li class="page-item">
        <a class="page-link s-font-size" :href="getPrevPage()">Previous</a>
      </li>
      <li class="page-item" v-for="(item, index) in pagination.totalPage">
        <a class="page-link s-font-size" :href="getCurrentpage(item)">{{
          item
        }}</a>
      </li>
      <li class="page-item">
        <a class="page-link s-font-size" :href="getNextPage()">Next</a>
      </li>
    </ul>
  </nav>
</template>

<script>
export default {
  name: "Pagination",
  props: {
    pagination: Object,
  },
  data() {
    return {
      type: this.$route.params.type || "movie",
      query: this.$route.query.query,
      currentPage: this.$route.query.page || 1
    };
  },
  methods: {
    getCurrentpage(pageIndex) {
      return `/search/${this.type}?query=${this.query}&page=${pageIndex}`;
    },
    getPrevPage() {
      if (this.currentPage > 1) {
        return `/search/${this.type}?query=${this.query}&page=${
          Number(this.currentPage) - 1
        }`;
      }

      return `/search/${this.type}?query=${this.query}&page=${this.currentPage}`;
    },
    getNextPage() {
      let totalPage = this.pagination.totalPage;
      if (this.currentPage < totalPage) {
        return `/search/${this.type}?query=${this.query}&page=${
          Number(this.currentPage) + 1
        }`;
      }

      return `/search/${this.type}?query=${this.query}&page=${this.currentPage}`;
    }
  },
  watch: {
    $route(to, from) {
      this.type =  this.$route.params.type || "movie",
      this.query = this.$route.query.query,
      this.currentPage = this.$route.query.page || 1
    },
  }
};
</script>
<style>
.pagination .page-link,
.pagination .page-link:active,
.pagination .page-link:visited {
  color: var(--gray);
}
</style>
