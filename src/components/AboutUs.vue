<template>
  <div class="container">
    <div>About US</div>
    <v-btn @click="displayData" :disabled="loading">Get The Data</v-btn>
    <div v-for="person in fetchedData" :key="person.first_name">
        {{person.first_name}}
    </div>
   
  </div>
</template>
<script>
import axios from "axios";

export default {
  data: function () {
    return {
      loading: null,
      fetchedData:[],
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
          }.bind(this)
        )
        .catch(
          function (error) {
            console.log(error);
          }.bind(this)
        );
    },
  },
};
</script>

<style scoped></style>
