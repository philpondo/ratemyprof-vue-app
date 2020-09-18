<template>
  <div class="home">
    <h1>{{ message }}</h1>
    <div class="container">
      <input
        v-model="attributeFilter"
        list="attributes"
        type="text"
        class="form-control"
        placeholder="Search"
      />
    </div>
    <div class="container">
      <div class="card-deck">
        <div
          class="card"
          v-for="professor in filterBy(professors, attributeFilter)"
        >
          <div class="card-body">
            <img
              class="img thumbnail"
              src="/default-user.png"
              alt="Card image cap"
              width="200"
            />
            <h5 class="card-title">{{ professor.name }}</h5>
            <p class="card-text">{{ professor.school }}</p>
            <p class="card-text">{{ professor.title }}</p>
            <p class="card-text">{{ professor.department }} Department</p>
            <router-link
              class="btn bg-dark text-white"
              v-bind:to="`/professors/${professor.id}`"
            >
              View this Professor
            </router-link>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<style>
.card {
  min-width: 25%;
  max-width: 25%;
  margin-left: 30px;
  margin-right: 30px;
  margin-top: 15px;
}
</style>

<script>
import axios from "axios";
import Vue2Filters from "vue2-filters";
export default {
  mixins: [Vue2Filters.mixin],
  data: function() {
    return {
      message: "Welcome to Rate My Professor!",
      professors: [],
      attributeFilter: "",
    };
  },
  created: function() {
    axios.get("/api/professors").then((response) => {
      console.log("All Professors:", response.data);
      this.professors = response.data;
    });
  },
  methods: {},
};
</script>
