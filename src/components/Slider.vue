<template>
  <v-container>
    <v-slider v-model="slide_value"></v-slider>
    <p>{{ slide_value }}</p>
  </v-container>
</template>

<script>
export default {
  data: function () {
    return {
      slide_value: "",
    };
  },
  methods: {},
};
</script>
