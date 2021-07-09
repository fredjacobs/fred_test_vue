<template>
  <div>
    <v-radio-group v-model="radioGroup">
      <v-radio label="Choice 1" value="1"></v-radio>
      <v-radio label="Choice 2" value="2"></v-radio>
      <v-radio label="Choice 3" value="3"></v-radio>
    </v-radio-group>
  </div>
</template>
<script>
export default {
  data: function () {
    return {
      radioGroup: null,
    };
  },
};
</script>

<style scoped></style>
