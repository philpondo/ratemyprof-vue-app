<template>
  <div class="reviews-edit">
    <h1>Edit Review</h1>

    <div class="container" style="border-secondary">
      <form v-on:submit.prevent="editReview">
        <div>
          <label>Rating: </label>
          <input type="text" class="form-control" v-model="review.rating" />
        </div>
        <br />
        <div>
          <label>Text: </label>
          <textarea
            type="text"
            class="form-control"
            v-model="review.text"
          ></textarea>
        </div>
        <div class="container p-4">
          <button class="btn bg-dark text-white">Submit</button>
          <button class="btn bg-dark text-white" v-on:click="destroyReview()">
            Delete
          </button>
        </div>
      </form>
    </div>
  </div>
</template>

<style></style>

<script>
import axios from "axios";
export default {
  data: function() {
    return {
      review: {},
      professor: {},
    };
  },
  created: function() {
    axios.get(`/api/reviews/${this.$route.params.id}`).then((response) => {
      console.log(response.data);
      this.review = response.data;
      console.log(this.review);
    });
  },
  methods: {
    editReview: function() {
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
          this.$router.push(`/professors/${this.review.professor_id}`);
        })
        .catch((error) => {
          console.log(error.response.data.errors);
          this.errors = error.response.data.errors;
        });
    },
    destroyReview: function() {
      if (confirm("Are you sure you want to delete this review?")) {
        axios.delete(`/api/reviews/${this.review.id}`).then((response) => {
          console.log("Successfully destroyed", response.data);
          this.$router.push("/");
        });
      }
    },
  },
};
</script>
