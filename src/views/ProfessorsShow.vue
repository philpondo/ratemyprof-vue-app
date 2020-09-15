<template>
  <div class="professors-show">
    <h1>{{ message }}</h1>
    <p>{{professor.name}}</p>
    <p>{{professor.title}}</p>
    <p>{{professor.school}}</p>
    <p>{{professor.department}}</p>
    <h2>Reviews:</h2>
    <div v-for="review in reviews">
      <p>Rating: {{review.rating}}</p>
      <p>{{review.text}}</p>
    </div>
  </div>
</template>

<style>
</style>

<script>
import axios from "axios";
export default {
  data: function () {
    return {
      message: "View this Professor's information:",
      professor: {},
      reviews: [],
    };
  },
  created: function () {
    axios.get(`api/professors/${this.$route.params.id}`).then((response) => {
      console.log(response.data);
      this.professor = response.data.professor;
      this.reviews = response.data.reviews;
    });
  },
  methods: {},
};
</script>