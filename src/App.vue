<template>
  <div id="app">
    <v-app>
      <v-main>
        <!--  <ContentHeader
          :headerText="customHeaderText"
          headericon="mdi-account-circle"
          @myEvent="emmitReceiver"
        ></ContentHeader> -->

        <!-- How do you add more components to this Router tag?-->
        <router-view
          :headerText="customHeaderText"
          headericon="mdi-account-circle"
          @myEvent="emmitReceiver"
        >
        </router-view>
        <GeneralTestingPage v-if="viewTestingPage"> </GeneralTestingPage>
      </v-main>
    </v-app>
  </div>
</template>
<script>
//import ContentHeader from "@/components/ContentHeader";
import GeneralTestingPage from "@/components/GeneralTestingPage";

export default {
  components: {
    GeneralTestingPage,
    //ContentHeader,
  },
  data: () => ({
    customHeaderText: "Text for header 2",
    clientName: "Fred",
    viewTestingPage: true,
  }),
  methods: {
    emmitReceiver() {
      console.log(`Hello ${this.clientName}`);
    },
  },
  props: {},
  mount: {},
};
</script>
