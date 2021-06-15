<template>
  <div class="container">
    <div v-if="!error" class="about-section">
    <div>About US</div>
    <v-btn @click="displayData" :disabled="loading">Get The Data</v-btn>
    <div v-for="person in fetchedData" :key="person.first_name">
      {{ person.first_name }}
    </div>
    </div>

<div v-if="error" class="error-section">
<h3>Sorry your data could not be loaded.</h3>

</div>

  </div>
</template>
<script>
import { getFunction } from "@/request/Post";
import axios from "axios";

export default {
  data: function () {
    return {
      loading: null,
      fetchedData: [],
      error:false,
    };
  },
  methods: {
    displayData() {
      axios
        .get("https://reqres.in/api/users?page=2")
        .then(
          function (response) {
            this.loading = true;
            console.log("Loading...");
            console.log(response.data.data);
            this.fetchedData = response.data.data;
            this.error = false;
          }.bind(this)
        )
        .catch(
          function (error) {
            console.log(error);
            this.error = true;
          }.bind(this)
        );
    },
    
  },
  mounted() {
      getFunction({
        url: "https://reqres.in/api/users?page=2",
        data: {},
      })
        .then(
          function (response) {
            console.log("From Post.js");
            console.log(response.data.data);
          }.bind(this)
        )
        .catch(
          function (error) {
            console.log(error);
          }.bind(this)
        );
    },
};
</script>

<style scoped></style>
