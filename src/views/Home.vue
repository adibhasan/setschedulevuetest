<template>
  <search />
  <CategoryCounter :categories="categories" />
</template>

<script>
import Search from "../components/Search.vue";
import CategoryCounter from "../components/CategoryCounter.vue";
import ApiRequestService from "../services/ApiRequestService";
import { POPULAR } from "@/utils/Constant";

export default {
  name: "Home",
  components: {
    Search,
    CategoryCounter,
  },
  data() {
    return {
      categories: POPULAR,
      popularMovies: [],
    };
  },
  created() {
    for (let category of this.categories) {
      ApiRequestService.getPopularDataByType(category.type)
        .then((response) => {
          this.categories[category.id - 1].total = response.data.total_results;
        })
        .catch((error) => {});
    }
  },
};
</script>
