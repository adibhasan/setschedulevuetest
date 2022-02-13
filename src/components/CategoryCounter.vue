<template>
  <section class="pt-5">
    <div class="container text-center mb-5">
      <h2>Popular Items</h2>
      <div class="custom-circle-wraper" v-for="category in categories"
        :key="category.id">
        <div class="circle-counter">{{category.total}}</div>
        <div class="s-font-size text-break">{{category.title}}</div>
      </div>
    </div>
  </section>
</template>

<script>

export default {
  name: "CategoryCounter",
  props:{
    categories: Array
  }
};
</script>

<style>
.custom-circle-wraper {
  margin: 50px 15px 5px;
  display: inline-block;
}
.circle-counter {
  width: 150px;
  height: 150px;
  border: 1px solid #d2d2d2;
  font-size: 30px;
  border-radius: 150px;
  line-height: 150px;
  background: #343434;
  color: white;
}
.circle-title {
  height: 50px;
  width: 150px;
}
</style>
