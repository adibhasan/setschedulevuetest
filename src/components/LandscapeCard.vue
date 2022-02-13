<template>
  <div class="card mb-4">
    <div class="card-body">
      <div class="row">
        <div class="col-3">
          <img
            src="https://www.themoviedb.org/t/p/w300_and_h300_bestv2//iQFcwSGbZXMkeyKrxbPnwnRo5fl.jpg"
            class="card-img-top"
            alt="..."
          />
        </div>
        <div class="col-9">
          <h5 class="card-title">Spider-Man: No Way Home</h5>
          <div class="card-text">
            <small class="text-muted s-font-size">September 16, 1977</small>
          </div>
          <p class="card-text s-font-size">
            Peter Parker is unmasked and no longer able to separate his normal
            life from the high-stakes of being a super-hero. When he asks for
            help from Doctor Strange the stakes become even more dangerous,
            forcing him to discover what it truly means to be Spider-Man.
          </p>
          <div class="mt-4">
            <a href="#" class="btn btn-outline-success btn-sm">Details</a>
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
    popularMovy: Object,
  },
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
