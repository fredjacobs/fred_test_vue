/* eslint-disable prettier/prettier */
<template>
  <div id="app">
    <v-app>
      <v-main>
        <ContentHeader
          :headerText="customHeaderText"
          :user="currentUser"
          headericon="mdi-account-circle"
          @myevent="emmitReceiver"
        ></ContentHeader>

        {{ $store.state.color_data.name }}{{ $store.state.color_data.color }}

        <!-- How do you add more components to this Router tag?-->
        <router-view @myevent="emmitReceiver"> </router-view>

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
    customHeaderText: "Welcome",
    currentUser: "Fred",
    viewTestingPage: false,
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
  mounted() {},
};
</script>
