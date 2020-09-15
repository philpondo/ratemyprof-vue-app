<template>
  <div class="reviews-show">
    <h1>Review Show</h1>
    <p>Review ID: {{review.id}}</p>
    <p>Professor Name: {{review.name}}</p>
    <p>Title: {{review.title}}</p>
    <p>School: {{review.school}}</p>
    <p>Department: {{review.department}}</p>
    <p>Rating: {{review.rating}}</p>
    <p>Text: {{review.text}}</p>
    <div>

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
      review: {},
    };
  },
  created: function () {
    axios.get(`/api/reviews/${this.$route.params.id}`).then((response) => {
      console.log(response.data);
      this.review = response.data;
      console.log(this.review);
    });
  },
  methods: {},
};
</script>