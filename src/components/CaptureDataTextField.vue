<template>
  <div>
    <v-card class="pa-6" elevation="2">
     
      <v-text-field :label="name"></v-text-field>
      <v-list-item></v-list-item>
    </v-card>
  </div>
</template>
<script>
export default {
  data: function () {
    return {};
  },
  props:["name"],
};
</script>

<style scoped></style>
