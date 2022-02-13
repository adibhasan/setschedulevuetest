<template>
  <div class="card mb-4"  v-for="searchData in searchDetails"
        :key="searchData.id">
    <div class="card-body">
      <div class="row">
        <div class="col-3">
          <img
            :src="getImage(searchData)"
            class="card-img-top"
            :alt="searchData.name"
          />
        </div>
        <div class="col-9">
          <h5 class="card-title">{{searchData.original_title || searchData.name}}</h5>
          <div class="card-text">
            <small class="text-muted s-font-size">{{searchData.release_date}}</small>
          </div>
          <p class="card-text s-font-size">
            {{searchData.overview}}
          </p>
          <div class="mt-4">
            <router-link :to="`/details/${searchData.id}`" type="button" class="btn btn-outline-success btn-sm" aria-current="page">Details</router-link>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: "LandscapeCard",
  props: {
    searchDetails: Array,
  },
  methods:{
    getImage(searchData){
      if(searchData.poster_path){
        return `https://www.themoviedb.org/t/p/w300_and_h300_bestv2/${searchData.poster_path}`
      }
      return require("@/assets/images/staticimages/demo.jpg")
    }
  }
};
</script>
<style>
.card-item-title {
  width: 100%;
  background-color: var(--bg-opacity);
  bottom: 0px;
  clip-path: circle(56.9% at 48% 95%);
  position: absolute;
  font-size: calc(0.8 * var(--font-size));
  color: white;
  padding: 120px 30px 15px 15px;
}
</style>
