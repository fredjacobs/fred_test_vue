<template>
  <div>
    <v-banner elevation="7" width="450" class="mx-auto">
      <h1 class="text-center py-6">Client</h1>
    </v-banner>
    <div>
      {{ curClient }}
    </div>
    <ClientDetails />
  </div>
</template>
<script>
import ClientDetails from "@/components/ClientDetails.vue";

export default {
  data: function () {
    return {};
  },
  computed: {
    getClients() {
      return this.$store.state.myData;
    },
    curClient() {
      return this.$store.state.currentClient;
    },
    client() {
      const clients = this.$store.state.myData;
      const theClient = this.$store.state.currentClient;
      let client = "";

      for (client in clients) {
        if (client.title === theClient) client = client.title;
      }
      return client;
    },
  },
  components:{
      ClientDetails:ClientDetails,
  }
};
</script>

<style scoped></style>
