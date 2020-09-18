<template>
  <div class="home">
    <h1>{{ message }}</h1>
    <div v-for="professor in professors">
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
export default {
  data: function() {
    return {
      message: "Welcome to Rate My Professor!",
      professors: [],
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
