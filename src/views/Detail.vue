<template>
  <section class="details-page-heading" :style="{ 'background-image': `url(${getBannerImage(details)})` }">
    <div class="custom-bg">
      <div class="row m-0 p-5">
        <div class="col-3 p-0">
          <img
            class="img-fluid"
            :src="getBannerImage(details)"
            :alt="details.original_title"
          />
        </div>
        <div class="col-8">
          <h2>{{ details.original_title || details.name }}</h2>
          <div v-if="details.release_date">
            General:
            <span class="s-font-size"
              >{{ details.release_date }}({{ productionCountries(details.production_countries || []) }}) * {{ genres(details.genres || []) }} * {{details.runtime}} minutes</span
            >
          </div>
          <div v-else-if="details.also_known_as">
            <span class="s-font-size">{{details.also_known_as.join() || ''}}</span>
          </div>
          <div class="pt-4" v-if="details.vote_average">
            <button class="btn btn-outline-success btn-sm" disabled>Rating({{details.vote_average}})</button>
            <button class="btn btn-outline-success btn-sm" disabled>{{details.status}}</button>
            <button class="btn btn-outline-success btn-sm" disabled>Budget({{million(details.budget)}})</button>
            <button class="btn btn-outline-success btn-sm" disabled>Budget({{million(details.revenue)}})</button>
            <a :href="details.homepage" target="_blank" class="btn btn-outline-info btn-sm">Home Page</a>
          </div>
          <div class="pt-4" v-else>
            <button class="btn btn-outline-success btn-sm" disabled>Birth({{details.birthday}})</button>
            <button class="btn btn-outline-success btn-sm" disabled>Death({{details.deathday || 'Not mentioned'}})</button>
            <button class="btn btn-outline-success btn-sm" disabled>{{details.known_for_department}}</button>
            <button class="btn btn-outline-success btn-sm" disabled>Birth place ({{details.place_of_birth}})</button>
          </div>
          <div class="pt-3 text-muted">
             {{details.tagline}}
          </div>
          <h3 v-if="details.overview">Overview</h3>
          <h3 v-else>Biography</h3>
          <div class="s-font-size">{{details.overview || details.biography}}</div>
          <h3 class="mt-3" v-if="details.vote_average">Production Companies</h3>
          <div class="s-font-size">
              <img  v-for="company in details.production_companies" key="company.id" :src="getLogoImage(company.logo_path)" :title="company.name" class="img-fluid img-thumbnail wd-75" alt="...">
          </div>
        </div>
      </div>
    </div>
  </section>
</template>

<script>
import ApiRequestService from "../services/ApiRequestService";

export default {
  name: "Detail",
  data() {
    return {
      details: [],
      generalInfo: "",
    };
  },
  methods: {
    getBannerImage(details,dimention="w600_and_h900") {
      if (details.poster_path) {
        return `https://www.themoviedb.org/t/p/${dimention}_bestv2${details.poster_path}`;
      }else if(details.profile_path){
         return `https://www.themoviedb.org/t/p/${dimention}_bestv2${details.profile_path}`;
      }
      return require("@/assets/images/staticimages/demo.jpg");
    },
    getLogoImage(imagePath) {
      if (imagePath) {
        return `https://www.themoviedb.org/t/p/w600_and_h600_bestv2${imagePath}`;
      }
      return require("@/assets/images/staticimages/demo.jpg");
    },
    genres(data) {
      let dataString = [];
      data.forEach((item, index) => {
        dataString.push(item.name);
      });

      return dataString.join();
    },
    productionCountries(data) {
      let dataString = [];
      data.forEach((item, index) => {
        dataString.push(item.iso_3166_1);
      });

      return dataString.join();
    },
    million(amount){
       if(amount){
          return Math.round(amount/1000000) + ' USD'
       }

       return 'Not mentioned'
    }
  },
  created() {
    ApiRequestService.getItemDetails(
      this.$route.query.id,
      this.$route.params.type
    )
      .then((response) => {
        console.log(response);
        this.details = response.data;
      })
      .catch((error) => {
        this.$router.push("/error");
      });
  },
};
</script>

<style>
.details-page-heading {
  border-bottom: 1px solid var(--primaryColor);
  background-position: right -200px top;
  background-size: cover;
  background-repeat: no-repeat;
}
.details-page-heading div.custom-bg {
  background-image: linear-gradient(
    to right,
    rgba(7, 7, 7, 1) 150px,
    rgba(7, 7, 7, 0.84) 100%
  );
  color: white;
}
.img-thumbnail.wd-75{
  width: 75px;
  display:inline-block;
  margin: 5px 5px 0px 0px;
}
</style>
