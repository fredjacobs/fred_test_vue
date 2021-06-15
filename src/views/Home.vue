<template>
  <div>
    <v-banner elevation="7" width="450" class="mx-auto">
      <h1 class="text-center py-6">Home</h1>
    </v-banner>

    <component :is="current_component"></component>
  </div>
</template>
<script>
import AboutUs from "@/components/AboutUs.vue";
import ClientSelect from "@/components/ClientSelect.vue";
import TestRoutesPage from "@/components/TestRoutesPage.vue";

export default {
  data: function () {
    return {
      getKeyToComponent: {
        aboutus: "AboutUs",
        clientselect: "ClientSelect",
        test: "TestRoutesPage",
      },
    };
  },
  components: {
    AboutUs: AboutUs,
    ClientSelect: ClientSelect,
    TestRoutesPage: TestRoutesPage,
  },

  mounted() {
    
  },
  watch:{
    $route(){
    var key = this.getKeyToComponent[this.$route.params.getKey];
    if (key === null || key === undefined) {
      this.$router.push("/");
    }
    }
  },
  computed: {
    current_component() {
      return this.getKeyToComponent[this.$route.params.getKey];
    },
  },
};
</script>

<style scoped></style>
