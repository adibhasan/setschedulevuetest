<template>
  <section id="most-popular-items">
    <div class="container">
      <div class="row">
        <div class="col">
          <h3 class="my-4 pb-2 border-bottom">{{ getTitle() }}</h3>
        </div>
      </div>
      <div class="row">
        <div class="col-3" v-for="popularItem in popularItems" :key="popularItem.id">
          <Card :popularItem="popularItem" />
        </div>
      </div>
    </div>
  </section>
</template>

<script>
import { POPULAR } from "@/utils/Constant";
import Card from "../components/Card.vue";
import ApiRequestService from "../services/ApiRequestService";

export default {
  name: "Page",
  components: {
    Card,
  },
  data() {
    return {
      popularItems: [],
      pageTitle: "Popular",
      categories: POPULAR,
    };
  },
  methods: {
    getTitle() {
      this.categories.filter((category) => {
        if (category.type === this.$route.params.type) {
          this.pageTitle = category.title;
        }
      });

      return `Popular ${this.pageTitle}`;
    },
    getPopularMediaData() {
      ApiRequestService.getPopularDataByType(this.$route.params.type)
        .then((response) => {
          this.popularItems = response.data.results;
        })
        .catch((error) => {
          console.log("There was an error:" + error.response);
        });
    },
  },
  created() {
    this.getPopularMediaData()
  },
  watch: {
    $route(to, from) {
      this.getPopularMediaData()
    },
  }
};
</script>
