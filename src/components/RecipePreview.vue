<template>
  
    <!-- <div class="recipe-body">
      <img v-if="image_load" :src="recipe.image" class="recipe-image" />
    </div>
    <div class="recipe-footer">
      <div :title="recipe.title" class="recipe-title">
        {{ recipe.title }}
      </div>
      <ul class="recipe-overview">
        <li>{{ recipe.readyInMinutes }} minutes</li>
        <li>{{ recipe.popularity }} likes</li>
        <li v-if="recipe.vegan">Vegan</li>
        <li v-if="recipe.vegetarian">Vegetarian</li>
        <li v-if="recipe.glutenFree">Gluten Free</li>
      </ul>
    </div> -->

    <div>
  <b-card
    class="recipe-preview"
    img-top
    style="max-width: 20rem;"
  >
    <router-link
    :to="{ name: 'recipe', params: { recipeId: recipe.id } }"
    
    >
    <b-card-title> {{recipe.title}}</b-card-title>
    <img  :src="recipe.image" class="recipe-image" style="max-width: 17rem;"/> <!--v-if="image_load"-->
    <b-card-text>{{ recipe.readyInMinutes }} minutes</b-card-text>
    <b-card-text>{{ recipe.popularity }} likes</b-card-text>
    <b-card-text v-if="recipe.vegan">Vegan</b-card-text>
    <b-card-text v-if="recipe.vegetarian">Vegetarian</b-card-text>
    <b-card-text v-if="recipe.glutenFree">Gluten Free</b-card-text>
    <!-- check -->
    </router-link>
    <b-button v-if="!isFav" @click="addToFavorites" variant="primary">Add to Favorites</b-button>
    <b-button v-if="isFav" disabled>Add to Favorites</b-button>
  </b-card>
</div>
  
</template>

<script>
export default {
  // mounted() {
  //   this.axios.get(this.recipe.image).then((i) => {
  //     this.image_load = true;
  //   });
  // },
  data() {
    return {
      isFav: null
    };
  },
  props: {
    recipe: {
      type: Object,
      required: true
    }
  },
  mounted() {
    this.isFavorite()
  },
  methods: {
    async addToFavorites() {
      try {
        // this.$root.store.server_domain = "http://127.0.0.1:80"; //TODO delete
        const response = await this.axios.post(
          // "https://test-for-3-2.herokuapp.com/user/Login",
          // main.server_domain + "/Login",
          this.$root.store.server_domain +"/user/favorites",
          // "http://132.72.65.211:80/Login",
          // "http://132.73.84.100:80/Login",

          {
            // username: this.form.username,
            recipeId: this.recipe.id
          }
        );
        // console.log(response);
        // this.$root.loggedIn = true;
        // console.log(this.$root.store.login);
        // this.$root.store.login(this.form.username);
        // this.$router.push("/");
        this.$root.toast("Favorites", "Recipe added to favorites successfully", "success");
        this.isFav = true;
      } catch (err) {
        console.log(err.response);
        // this.form.submitError = err.response.data.message;
      }
    },
    async isFavorite(){
      try{
        const response = await this.axios.get (
        this.$root.store.server_domain +"/user/isFavorite",{
          params:{
            recipeid: this.recipe.id
          }
        }
      );
      this.isFav = response.data;
      } catch(err){
        console.log(err.response);

      }
      
    }
  }
};
</script>

<style scoped>
.recipe-preview {
  display: inline-block;
  width: 90%;
  height: 100%;
  position: relative;
  margin: 20px 20px 20px 20px;
}
.recipe-preview:visited{
  color: purple;
}
.recipe-preview > .recipe-body {
  width: 100%;
  height: 200px;
  position: relative;
}

.recipe-preview .recipe-body .recipe-image {
  margin-left: auto;
  margin-right: auto;
  margin-top: auto;
  margin-bottom: auto;
  display: block;
  width: 98%;
  height: auto;
  -webkit-background-size: cover;
  -moz-background-size: cover;
  background-size: cover;
}

.recipe-preview .recipe-footer {
  width: 100%;
  height: 50%;
  overflow: hidden;
}

.recipe-preview .recipe-footer .recipe-title {
  padding: 10px 10px;
  width: 100%;
  font-size: 12pt;
  text-align: left;
  white-space: nowrap;
  overflow: hidden;
  -o-text-overflow: ellipsis;
  text-overflow: ellipsis;
}

.recipe-preview .recipe-footer ul.recipe-overview {
  padding: 5px 10px;
  width: 100%;
  display: -webkit-box;
  display: -moz-box;
  display: -webkit-flex;
  display: -ms-flexbox;
  display: flex;
  -webkit-box-flex: 1;
  -moz-box-flex: 1;
  -o-box-flex: 1;
  box-flex: 1;
  -webkit-flex: 1 auto;
  -ms-flex: 1 auto;
  flex: 1 auto;
  table-layout: fixed;
  margin-bottom: 20px;
  margin-top: 20px;
}

.recipe-preview .recipe-footer ul.recipe-overview li {
  -webkit-box-flex: 1;
  -moz-box-flex: 1;
  -o-box-flex: 1;
  -ms-box-flex: 1;
  box-flex: 1;
  -webkit-flex-grow: 1;
  flex-grow: 1;
  width: 90px;
  display: table-cell;
  text-align: center;
}
</style>
