<template>
  <div id="app">
    <v-app>
      <v-main>
        <ContentHeader
          :headerText="customHeaderText"
          headericon="mdi-account-circle"
          @myevent="emmitReceiver"
        ></ContentHeader>

        <!-- How do you add more components to this Router tag?-->
        <router-view @myevent="emmitReceiver"> </router-view>
        {{ $store.state.color_data.name }}

        <GeneralTestingPage
          v-if="viewTestingPage"
          @submittedcolor="displayfavcolor"
        >
        </GeneralTestingPage>
      </v-main>
    </v-app>
  </div>
</template>
<script>
//import ContentHeader from "@/components/ContentHeader";
import GeneralTestingPage from "@/components/GeneralTestingPage.vue";
import ContentHeader from "@/components/ContentHeader.vue";

export default {
  components: {
    GeneralTestingPage,
    ContentHeader,

    //ContentHeader,
  },
  data: () => ({
    customHeaderText: "Text for header",
    clientName: "Fred",
    viewTestingPage: true,
    name: null,
    color: null,
    favColorInfo: [],
    message: null,
  }),
  methods: {
    emmitReceiver() {
      console.log(`Hello ${this.clientName}`);
    },
    displayfavcolor(favColor) {
      this.$store.commit("color_data/updateColor", favColor);
    },
  },
  props: {},
};
</script>
