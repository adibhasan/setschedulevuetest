<template>
  <section class="error-page-heading">
     <h1 class="error-title text-muted">{{message}}</h1>
  </section>
  
</template>

<script>

export default {
  name: "CustomError",
  data(){
    return {
      message:"Page not found 404"
    }
  }
};
</script>

<style>
    .error-title{
        padding: 100px;
        text-align:center;
    }
</style>
