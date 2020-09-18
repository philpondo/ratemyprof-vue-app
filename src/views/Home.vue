<template>
  <div class="home">
    <h1>{{ message }}</h1>
    <input
      v-model="attributeFilter"
      list="attributes"
      type="text"
      class="form-control"
      placeholder="Search"
    />
    <div v-for="professor in filterBy(professors, attributeFilter)">
      <h2>{{ professor.name }}</h2>
      <p>{{ professor.school }}</p>
      <p>{{ professor.title }}</p>
      <p>{{ professor.department }}</p>
      <router-link v-bind:to="`/professors/${professor.id}`">
        View this Professor
      </router-link>
    </div>
  </div>
</template>

<style></style>

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
