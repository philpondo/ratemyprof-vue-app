<template>
  <div class="reviews-new">
    <h1>Add a Review</h1>
    <div>
      <form v-on:submit.prevent="createReview">
        <div>
          <label>Professor ID: </label>
          <input type="text" 
          class="form-control"
          v-model="newReviewProfessorId"
        />
        </div>
        <div>
          <label>Rating: </label>
          <input type="text" 
          class="form-control"
          v-model="newReviewRating"
        />
        </div>
        <div>
          <label>Text: </label>
          <input type="text" 
          class="form-control"
          v-model="newReviewText"
        />
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
      newReviewProfessorId: "",
      newReviewRating: "",
      newReviewText: "",
    };
  },
  methods: {
    createReview: function () {
      var params = {
        professor_id: this.newReviewProfessorId,
        rating: this.newReviewRating,
        text: this.newReviewText,
      };
      axios
        .post("/api/reviews", params)
        .then((response) => {
          console.log("Successfully added", response.data);
          // this.reviews.push(response.data);
        })
        .then((response) => {
          this.$router.push("/");
        })
        .catch((error) => {
          console.log(error.response.data.errors);
          this.errors = error.response.data.errors;
        });
    },
  },
};
</script>