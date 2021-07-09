<template>
  <div style="width: 100%">
    <div class="text-h5 text-center content-header-1 pt-2" style="height: 50px">
      <v-icon color="#fff" class="text-h5 vertical-align" large>
        {{ headericon }}
      </v-icon>
      {{ headerText }} {{ user }}
      <!-- v-bind shorthand : -->
      <v-btn class="ml-2" :to="{ path: '/' }">HOME</v-btn>
      <router-link
        to="/form"
        class="text-body-2 mx-6 font-weight-light white--text"
        >Form</router-link
      >
      <router-link
        to="/notes"
        class="text-body-2 mx-6 font-weight-light white--text"
        >My Notes</router-link
      >

      <router-link
        to="/contact-create"
        class="text-body-2 mx-6 font-weight-light white--text"
        >Contact Create</router-link
      >
      <router-link
        to="/testingstyling"
        class="text-body-2 mx-6 font-weight-light white--text"
        >Styling Test</router-link
      >
      <router-link
        to="/form-create"
        class="text-body-2 mx-6 font-weight-light white--text"
        >Create Form</router-link
      >
      <v-btn color="#ffffff" icon @click="changeTheme">
        <v-icon v-if="this.$vuetify.theme.isDark">mdi-lightbulb-on</v-icon>
        <v-icon v-if="!this.$vuetify.theme.isDark"
          >mdi-lightbulb-outline</v-icon
        >
      </v-btn>
    </div>
  </div>
</template>

<script>
export default {
  data: () => ({
    testlink: "test",
  }),
  props: ["headerText", "headericon", "user"],
  mounted() {
    //localStorage.setItem("isDarkThemeTrue", true);
    const themeState = localStorage.getItem("isDarkThemeTrue");
    //this.$store.commit("updateTheme", themeState);
    //this.$vuetify.theme.dark = this.$store.state.isDarkTheme;
    if (themeState === "true") {
      this.$vuetify.theme.dark = true;
    } else {
      this.$vuetify.theme.dark = false;
    }

    console.log("Theme State" + themeState);
    console.log("Dark Theme: " + this.$vuetify.theme.dark);

    this.$emit("myevent");
  },
  methods: {
    changeTheme() {
      if (this.$vuetify.theme.dark) {
        this.$vuetify.theme.dark = false;
        localStorage.setItem("isDarkThemeTrue", "false");
        //this.$store.commit("updateTheme", false);
      } else {
        this.$vuetify.theme.dark = true;
        localStorage.setItem("isDarkThemeTrue", "true");
        //this.$store.commit("updateTheme", true);
      }
    },
    increment() {
      this.$store.commit("increment");
    },
  },
};
</script>

<style scoped>
.content-header-1 {
  background-color: #232323;
  color: #ffffff;
}
</style>
