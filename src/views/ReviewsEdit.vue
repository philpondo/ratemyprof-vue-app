<template>
  <div class="reviews-edit">
    <h1>Add a Review</h1>
    <div>
      <form v-on:submit.prevent="editReview">
        <div>
          <label>Professor ID: </label>
          <input type="text" 
          class="form-control"
          v-model="review.professor_id"
        />
        </div>
        <div>
          <label>Rating: </label>
          <input type="text" 
          class="form-control"
          v-model="review.rating"
        />
        </div>
        <div>
          <label>Text: </label>
          <textarea type="text" v-model="review.text"></textarea>
        </div>
        <button>Submit</button>
      </form>
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
  methods: {
    editReview: function () {
      var params = {
        professor_id: this.review.professor_id,
        rating: this.review.rating,
        text: this.review.text,
      };
      axios
        .put(`/api/reviews/${this.review.id}`, params)
        // .then((response) => {
        //   console.log("Successfully added", response.data);
        //   this.reviews.push(response.data);
        // })
        .then((response) => {
          this.$router.push(`/reviews/${this.review.id}`);
        })
        .catch((error) => {
          console.log(error.response.data.errors);
          this.errors = error.response.data.errors;
        });
    },
  },
};
</script>