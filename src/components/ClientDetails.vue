<template>
  <div>
    <v-card class="mx-auto my-10" width="800">
      
      <v-card-title>Client Name:</v-card-title>
      <v-card-subtitle>{{ client.title }}</v-card-subtitle>
      <v-card-title>Job Description:</v-card-title>
      <v-card-subtitle>{{ client.description }}</v-card-subtitle>
      <v-card-text></v-card-text>
    </v-card>
    
    
  </div>
</template>
<script>
export default {
  data: function () {
    return {};
  },
  computed: {
    client() {
      const clients = this.$store.state.myData;
      const theClient = this.$store.state.currentClient;
      let client = "";

      client = clients.find((el) => el.title === theClient);

      return client;
    },
  },
};
</script>

<style scoped></style>
