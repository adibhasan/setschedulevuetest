<template>
  <div class="card">
    <div class="card-header">Search Results</div>
    <div class="card-body">
      <router-link
        v-for="category in categories"
        :key="category.id"
        :to="`/search/${category.type}?query=${query}`"
        type="button"
        class="btn btn-sm btn-secondary d-block w-100 mb-1"
        aria-current="page"
      >
        {{ category.title }}
        <span class="badge badge-light">({{ category.total }})</span>
      </router-link>
    </div>
  </div>
</template>

<script>
export default {
  name: "SearchCategory",
  props: {
    categories: Array,
    query: String,
  },
};
</script>
