<template>
  <div style="width: 100%">
    <div class="text-h5 text-center content-header-1 pt-2" style="height: 50px">
      <v-icon color="#fff" class="text-h5 vertical-align" large>
        {{ headericon }}
      </v-icon>
      {{ headerText }} {{ user }}
      <!-- v-bind shorthand : -->
      <v-btn class="ml-2" :to="{ path: '/' }">HOME</v-btn>
      <router-link to="/form" class="mx-6 font-weight-light white--text 0.2rem"
        >Form</router-link
      >
      <router-link to="/notes" class="mx-6 font-weight-light white--text 0.2rem"
        >My Notes</router-link
      >
      <router-link
        to="/testingstyling"
        class="mx-6 font-weight-light white--text 0.2rem"
        >Styling Test</router-link
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
    this.$emit("myevent");
    this.$vuetify.theme.dark = false;
  },
  methods: {
    changeTheme() {
      /* this.$vuetify.theme.dark = this.$vuetify.theme.isDark
        ? !this.$vuetify.theme.isDark
        : this.$vuetify.theme.isDark; */
      //#################//
      if (this.$vuetify.theme.dark) {
        this.$vuetify.theme.dark = false;
      } else {
        this.$vuetify.theme.dark = true;
      }
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
