<template>
  <div class="card my-4">
    <div class="position-relative">
      <img
        :src="getImage(popularItem)"
        class="card-img-top"
        alt=""
      />
      <div class="card-item-title">
        {{ popularItem.original_title ||popularItem.name }}
      </div>
    </div>

    <div class="card-body">
      <div class="card-text">
        <div class="s-font-size"><strong>Popularity</strong> {{popularItem.popularity}}</div>
        <div class="s-font-size" v-show="show(popularItem.release_date)"><strong>Released at</strong> {{popularItem.release_date || ''}}</div>
        <div class="s-font-size" v-show="show(popularItem.known_for_department)"><strong>Known for</strong> {{popularItem.known_for_department || ''}}</div>
      </div>
      <div class="text-center mt-3">
        <router-link :to="getDetailPageUrl(popularItem.id)" class="btn btn-outline-success btn-sm" aria-current="page">Details</router-link>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: "Card",
  props: {
    popularItem: Object
  },
  methods:{
    show(item){
      if(item){
        return true
      }

      return false
    },
    getImage(popularItem){
      if(popularItem.poster_path){
        return `https://www.themoviedb.org/t/p/w300_and_h300_bestv2/${popularItem.poster_path}`
      }else if(popularItem.profile_path){
        return `https://www.themoviedb.org/t/p/w300_and_h300_bestv2/${popularItem.profile_path}`
      }
      return require("@/assets/images/staticimages/demo.jpg")
    },
    getDetailPageUrl(id){
      let type = this.$route.params.type || 'movie'
      return `/details/${type}?id=${id}`
    }
  }
};
</script>
<style>
.card-item-title {
  width: 100%;
  background-color: var(--bg-opacity);
  bottom: 0px;
  clip-path: polygon(0 68%, 100% 72%, 100% 100%, 0 100%);
  position: absolute;
  font-size: calc(0.8 * var(--font-size));
  color: white;
  padding: 120px 30px 15px 15px;
}
</style>
