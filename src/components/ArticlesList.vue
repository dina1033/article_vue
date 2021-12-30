<template>
  <div class="list row">
    <div class="col-md-8">
      <div class="input-group mb-3 d-flex justify-content-end">
        <router-link to="/add" class="btn btn-success">Add Article</router-link>
      </div>
    </div>
    <div class="col-md-6">
      <h4>Articles List</h4>
      <ul class="list-group">
        <li class="list-group-item"
          :class="{ active: index == currentIndex }"
          v-for="(tutorial, index) in tutorials"
          :key="index"
          @click="setActiveArticle(tutorial, index)"
        >
          {{ tutorial.title }}
        </li>
      </ul>
    </div>
    <div class="col-md-6">
      <div v-if="currentTutorial">
        <h4>Article</h4>
        <div>
          <label><strong>Title:</strong></label> {{ currentTutorial.title }}
        </div>
        <div>
          <label><strong>Description:</strong></label> {{ currentTutorial.description }}
        </div>

        <a class="badge badge-warning"
          :href="'/articles/' + currentTutorial.id"
        >
          Edit
        </a>
      </div>
      <div v-else>
        <br />
        <p>Please click on an Article...</p>
      </div>
    </div>
  </div>
</template>

<script>
import ArticleDataService from "../services/ArticleDataService";

export default {
  name: "tutorials-list",
  data() {
    return {
      tutorials: [],
      currentTutorial: null,
      currentIndex: -1,
      title: ""
    };
  },
  methods: {
    retrieveArticles() {
      ArticleDataService.getAll()
        .then(response => {
          this.tutorials = response.data;
        })
        .catch(e => {
          console.log(e);
        });
    },
    setActiveArticle(tutorial, index) {
      this.currentTutorial = tutorial;
      this.currentIndex = index;
    },

  },
  mounted() {
    this.retrieveArticles();
  }
};
</script>

<style>
.list {
  text-align: left;
  max-width: 750px;
  margin: auto;
}
</style>