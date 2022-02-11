<template>
  <div class="container-fluid">
    <header class="row">
      <TopMenu />
    </header>
    <section id="main-content">
      <router-view></router-view>
    </section>
    <footer>
      <FooterMenu :copyright="copyright" />
    </footer>
  </div>
</template>
<script>
import TopMenu from "./components/TopMenu.vue";
import FooterMenu from "./components/FooterMenu.vue";

export default {
  name: "App",
  data() {
    return {
      copyright: new Date().getFullYear(),
    };
  },
  components: {
    TopMenu,
    FooterMenu,
  },
};
</script>
<style>
  :root {
    --blue: #1e90ff;
    --white: #ffffff;
    --minheight: 100vh;
  }
  
  #main-content{
    min-height: calc(var(--minheight) - 120px);
  }
</style>
