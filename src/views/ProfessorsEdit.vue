<template>
  <div class="professors-edit">
    <h1>{{ message }}</h1>
    <div class="container">
      <form v-on:submit.prevent="editProf">
        <div class="form-group">
          <label>Name: </label>
          <input type="text" class="form-control" v-model="professor.name" />
        </div>
        <div class="form-group">
          <label>Title: </label>
          <input type="text" class="form-control" v-model="professor.title" />
        </div>
        <div class="form-group">
          <label>School: </label>
          <input type="text" class="form-control" v-model="professor.school" />
        </div>
        <div class="form-group">
          <label>Department: </label>
          <input
            type="text"
            class="form-control"
            v-model="professor.department"
          />
        </div>
        <button class="btn bg-dark text-white">Submit</button>
        <button class="btn bg-dark text-white" v-on:click="destroyProf()">
          Delete
        </button>
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
      message: "Edit Professor Details:",
      name: "",
      title: "",
      school: "",
      department: "",
      errors: [],
      professor: {},
    };
  },
  created: function() {
    axios.get(`api/professors/${this.$route.params.id}`).then((response) => {
      console.log(response.data.professor);
      this.professor = response.data.professor;
    });
  },
  methods: {
    editProf: function(professor) {
      var params = {
        name: this.professor.name,
        title: this.professor.title,
        school: this.professor.school,
        department: this.professor.department,
      };
      axios
        .put(`/api/professors/${this.professor.id}`, params)
        .then((response) => {
          console.log(response.data);
          this.$router.push(`/professors/${this.professor.id}`);
        })
        .catch((error) => {
          this.errors = error.response.data.errors;
        });
    },
    destroyProf: function() {
      if (confirm("Are you sure you want to delete this professor?")) {
        axios
          .delete(`/api/professors/${this.professor.id}`)
          .then((response) => {
            console.log("Successfully destroyed", response.data);
            this.$router.push("/");
          });
      }
    },
  },
};
</script>
