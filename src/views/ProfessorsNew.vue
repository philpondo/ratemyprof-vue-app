<template>
  <div class="professors-new">
    <h1>{{ message }}</h1>
    <form method="dialog">
      <h2>Professor Details</h2>
      <p>Name: <input type="text" v-model="name"> </p>
      <p>Title: <input type="text" v-model="title"> </p>
      <p>School: <input type="text" v-model="school"> </p>
      <p>Department: <input type="text" v-model="department"> </p>
      <div>
        <button v-on:click="createProf()">Submit</button>
      </div>
    </form>
  </div>
</template>

<style>
</style>

<script>
import axios from "axios";
export default {
  data: function () {
    return {
      message: "Add a new Professor!",
      name: "",
      title: "",
      school: "",
      department: "",
    };
  },
  created: function () {},
  methods: {
    createProf: function () {
      var params = {
        name: this.name,
        title: this.title,
        school: this.school,
        department: this.department,
      };
      axios
        .post("/api/professors", params)
        .then((response) => {
          console.log("New Professor:", response.data);
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
