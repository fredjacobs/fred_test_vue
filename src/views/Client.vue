<template>
  <div>
    <v-banner elevation="7" width="450" class="mx-auto">
      <h1 class="text-center py-6">Client</h1>
    </v-banner>

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
  },
  components: {
    ClientDetails: ClientDetails,
  },
};
</script>

<style scoped></style>
