<template>
  <section class="details-page-heading">
     <div class="custom-bg"></div>
  </section>
  
</template>

<script>

export default {
  name: "Detail"
};
</script>

<style>
.details-page-heading {
    border-bottom: 1px solid var(--primaryColor);
    background-position: right -200px top;
    background-size: cover;
    background-repeat: no-repeat;
    background-image: url(https://www.themoviedb.org/t/p/w1920_and_h800_multi_faces//1g0dhYtq4irTY1GPXvft6k4YLjm.jpg);
}
.details-page-heading div.custom-bg {
    background-image: linear-gradient(to right, rgba(7, 7, 7, 1) 150px, rgba(7, 7, 7, 0.84) 100%);
    min-height:calc(5 * var(--min-section-height));
}
</style>
