<template>
  <div style="width: 100%">
    <div
      class="text-h5 text-center mb-4 content-header-1 pt-2"
      style="height: 50px"
    >
      <v-icon color="#fff" class="text-h5 vertical-align" large>
        {{ headericon }}
      </v-icon>
      {{ headerText }}
      <!-- v-bind shorthand : -->
      <v-btn class="ml-2"
        ><a class="black--text" :href="testlink">Test Page</a></v-btn
      >
    </div>
  </div>
</template>

<script>
export default {
  data: () => ({
    testlink: "test",
  }),
  props: ["headerText", "headericon"],
  mounted() {
    this.$emit("myevent");
  },
};
</script>

<style scoped>
.content-header-1 {
  background-color: #232323;
  color: #ffffff;
}
</style>
