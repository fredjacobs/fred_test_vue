<template>
  <div>
    <v-container fluid fill-height pa-0 stretch>
      <v-row
        no-gutters
        :class="{ 'd-block': isSmallerScreens() }"
        height="100%"
      >
        <v-col
          class="blue darken-4 home-logo-container d-flex"
          align-self="center"
        >
          <v-img src="@/assets/KINGDOM.png" width="300" height="300"></v-img>
        </v-col>

        <v-col
          class="white lighten-3 pa-10 d-flex"
          :class="isSmallerScreens() ? 'full-form' : 'form-minimum'"
        >
          <v-form ref="form" lazy-validation>
            <v-text-field label="Name" required></v-text-field>

            <v-text-field label="E-mail" required></v-text-field>

            <v-select label="Item" required></v-select>

            <v-checkbox label="Do you agree?" required></v-checkbox>

            <v-btn color="success" class="mr-4"> SEND </v-btn>
          </v-form>
        </v-col>
      </v-row>
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

<style scoped>
.form-minimum {
  max-width: 640px;
}
.full-form {
  width: 100%;
}
.home-logo-container {
  max-width: calc(100% - 640px);
}
</style>
