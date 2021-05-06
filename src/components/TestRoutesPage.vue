<template>
  <div>
    <h2>Test Page</h2>
    <!-- v-bind shorthand : -->
    <v-btn class=""
    :to="homeLink"
      >Back Home</v-btn
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
