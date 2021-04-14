<template>
  <div>
    <h2>Test Page</h2>
    <!-- v-bind shorthand : -->
    <v-btn class=""
      ><a class="black--text" :href="homeLink">Back Home</a></v-btn
    >
  </div>
</template>

<script>
export default {
  data: () => ({
    homeLink: "/",
  }),
};
</script>
