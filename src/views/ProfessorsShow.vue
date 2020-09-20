<template>
  <div class="professors-show">
    <div class="profile-info">
      <div class="card">
        <div class="card-body">
          <img
            class="img thumbnail"
            src="/default-user.png"
            alt="Card image cap"
            width="100"
          />
          <h3 class="card-title">{{ professor.name }}</h3>
          <p class="card-text">{{ professor.school }}</p>
          <p class="card-text">{{ professor.title }}</p>
          <p class="card-text">{{ professor.department }} Department</p>
          <router-link
            class="btn bg-dark text-white"
            v-bind:to="`/professors/${professor.id}/edit`"
          >
            Edit this Professor
          </router-link>
        </div>
      </div>
    </div>

    <div class="container p-4 mb-4" style="border:1px solid">
      <h3>Leave a Review:</h3>
      <div class="container">
        <form>
          <div class="form-group">
            <label>Rating: </label>
            <select class="form-control" v-model="newReviewRating">
              <option>1</option>
              <option>2</option>
              <option>3</option>
              <option>4</option>
              <option>5</option>
            </select>
          </div>
          <div class="form-group">
            <label>Review: </label>
            <textarea class="form-control" v-model="newReviewText" />
          </div>
          <button class="btn bg-dark text-white" v-on:click="createReview()">
            Submit
          </button>
        </form>
      </div>
    </div>

    <h3>Reviews:</h3>

    <div class="container">
      <div class="card w-100" v-for="review in reviews">
        <div class="card-body">
          <h5 class="card-title">Rating: {{ review.rating }}</h5>
          <p class="card-text">{{ review.text }}</p>
          <router-link
            class="btn bg-dark text-white"
            v-bind:to="`/reviews/${review.id}/edit`"
          >
            Edit
          </router-link>
        </div>
      </div>

      <!-- <div v-for="review in reviews">
        <p>Rating: {{ review.rating }}</p>
        <p>{{ review.text }}</p>
        <router-link
          class="btn bg-dark text-white"
          v-bind:to="`/reviews/${review.id}/edit`"
        >
        Edit
        </router-link>
      </div> -->
    </div>
  </div>
</template>

<style>
.card {
  margin-top: 15px;
  width: 300px;
}
.profile-info {
  display: flex;
  justify-content: center;
  flex-direction: row;
  margin-bottom: 15px;
}
.cardreview {
  display: flex;
  justify-content: center;
  flex-direction: row;
  margin-bottom: 15px;
}
</style>

<script>
import axios from "axios";
export default {
  data: function() {
    return {
      message: "View this Professor's information:",
      professor: {},
      reviews: [],
      newReviewRating: "",
      newReviewText: "",
    };
  },
  created: function() {
    axios.get(`api/professors/${this.$route.params.id}`).then((response) => {
      console.log(response.data);
      this.professor = response.data.professor;
      this.reviews = response.data.reviews;
    });
  },
  methods: {
    createReview: function() {
      var params = {
        professor_id: this.professor.id,
        rating: this.newReviewRating,
        text: this.newReviewText,
      };
      axios
        .post("/api/reviews", params)
        .then((response) => {
          console.log("Successfully added", response.data);
          this.reviews.push(response.data);
        })
        .catch((error) => {
          console.log(error.response.data.errors);
          this.errors = error.response.data.errors;
        });
    },
  },
};
</script>
