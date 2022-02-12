<template>
  <div class="container-fluid p-0">
    <header>
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
    --min-section-height: 100px;
    --bg-opacity: rgba(7, 7, 7, 0.8);
    --font-size: 1rem;
  }
  body{
    font-size: var(--font-size);
  }
  .s-font-size{
    font-size: calc(0.8 * var(--font-size));
  }
  #main-content{
    min-height: calc(var(--minheight) - 120px);
  }
</style>
