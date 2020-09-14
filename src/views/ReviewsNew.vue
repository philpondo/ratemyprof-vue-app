<template>
  <div class="reviews-new">
    <h1>Add a Review</h1>
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
        // .then((response) => {
        //   this.$router.push("/professor/:id");
        // })
        .catch((error) => {
          console.log(error.response.data.errors);
          this.errors = error.response.data.errors;
        });
    },
  },
};
</script>