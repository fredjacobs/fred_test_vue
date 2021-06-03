<template>
  <div class="wh-max">
    <v-container fluid fill-height pa-0>
      <v-row
        no-gutters
        :class="{ 'd-block': isSmallerScreens() }"
        height="100%"
        class="fill-height"
      >
        <v-col
          class="blue darken-4 d-flex wh-max justify-center align-center col-12"
          align-self="center"
          :class="{ 'home-logo-container': !isSmallerScreens() }"
        >
          <v-img
            src="@/assets/KINGDOM.png"
            width="300"
            height="300"
            contain
          ></v-img>
        </v-col>

        <v-col
          class="pa-10 d-flex justify-center align-center bg-1"
          :class="
            Object.assign(getTheme(), {
              'full-form': isSmallerScreens(),
              'form-minimum': !isSmallerScreens(),
            })
          "
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
.wh-max {
  width: 100%;
  height: 100%;
}
</style>
