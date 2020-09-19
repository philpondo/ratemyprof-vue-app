<template>
  <div class="professors-new">
    <h1>{{ message }}</h1>
    <div class="container p-4 mb-4" style="border:1px solid">
      <form method="dialog">
        <div class="form-group">
          <label>Professor Name: </label>
          <input type="text" class="form-control" v-model="name" />
        </div>
        <div class="form-group">
          <label>Title: </label>
          <input type="text" class="form-control" v-model="title" placeholder="Associate, Adjunct, etc." />
        </div>
        <div class="form-group">
          <label>School: </label>
          <input type="text" class="form-control" v-model="school" />
        </div>
        <div class="form-group">
          <label>Department: </label>
          <input type="text" class="form-control" v-model="department" />
        </div>
        <div>
          <button v-on:click="createProf()">Submit</button>
        </div>
      </form>
    </div>
  </div>
</template>

<style></style>

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
