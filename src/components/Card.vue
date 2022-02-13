<template>
  <div class="card my-4">
    <div class="position-relative">
      <img
        :src="`https://www.themoviedb.org/t/p/w300_and_h300_bestv2${popularMovy.poster_path}`"
        class="card-img-top"
        alt=""
      />
      <div class="card-item-title">
        {{popularMovy.original_title}}
      </div>
    </div>

    <div class="card-body">
      <div class="card-text">
        <div class="s-font-size"><strong>Popularity</strong> {{popularMovy.popularity}}</div>
        <div class="s-font-size"><strong>Released at</strong> {{popularMovy.release_date}}</div>
      </div>
      <div class="text-center mt-3">
        <router-link :to="`/details/${popularMovy.id}`" class="btn btn-outline-success btn-sm" aria-current="page">Details</router-link>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: "Card",
  props: {
    popularMovy: Object
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
