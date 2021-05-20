<template>
  <div>
    <v-container fluid fill-height>
      <row no-gutters :class="{ 'd-block': isSmallerScreens() }">
        <v-col> Whaaaaaat</v-col>

        <v-col> </v-col>
      </row>
    </v-container>
  </div>
</template>
<script>
//Notes:
//Use 2/3 1/3 columns on row
//use tabs
export default {
  data: function () {
    return {};
  },
};
</script>

<style scoped></style>
