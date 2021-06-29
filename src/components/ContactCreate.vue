<template>
  <v-container class="">
    <v-card
      class="d-flex justify-center amber accent-4 white--text py-2 text-h4 mb-6"
      >Contact Create</v-card
    >
    <TextDivider text="Client Details" />
    <v-alert
      v-if="string_empty === true"
      border="top"
      color="red lighten-2"
      dark
      dismissible
      @click.native="clear_alert"
    >
      Please enter a value before submitting.
    </v-alert>
    <v-alert
      v-if="isDuplicate === true"
      border="top"
      color="red lighten-2"
      dark
      dismissible
      @click.native="clear_alert"
    >
      Already entered that email address.
    </v-alert>
    <v-row class="d-flex">
      <!--#################-->

      </v-row>

    <v-row class="d-flex">
      <v-col cols="12" md="6" class="">
        <CaptureDataTextField
          type="v-text-field"
          label="name"
          icon="mdi-phone"
          click_icon="mdi-google-play"
          @add_contact_details="update_phone"
        />
      </v-col>

      <v-col cols="12" md="6" class="">
        <CaptureDataTextField
          type="v-text-field"
          label="email"
          enter_value="email"
          icon="mdi-home-map-marker"
          click_icon="mdi-google-play"
          @add_contact_details="update_address"
          :extra_attributes="{
            outlined: true,
          }"
        />
      </v-col>
    </v-row>

      <!--#################-->
    

    <v-row class="d-flex">
      <v-col cols="12" md="6" class="">
        <CaptureDataTextField
          type="v-text-field"
          label="phone"
          icon="mdi-phone"
          click_icon="mdi-google-play"
          @add_contact_details="update_phone"
        />
      </v-col>

      <v-col cols="12" md="6" class="">
        <CaptureDataTextField
          type="v-textarea"
          label="address"
          enter_value="address"
          icon="mdi-home-map-marker"
          click_icon="mdi-google-play"
          @add_contact_details="update_address"
          :extra_attributes="{
            outlined: true,
          }"
        />
      </v-col>
    </v-row>



    <v-row align="center" justify="space-around">
      <v-btn
        width="300px"
        large
        class="amber accent-4 white--text px-lg-8"
        @click="create_contact"
        >CREATE</v-btn
      >
    </v-row>
  </v-container>
</template>

<script>
import CaptureDataTextField from "@/components/CaptureDataTextField.vue";
import TextDivider from "@/components/TextDivider.vue";
//import CaptureDataTextArea from "@/components/CaptureDataTextArea.vue";

export default {
  components: {
    CaptureDataTextField,
    TextDivider,
    //CaptureDataTextArea,
  },
  data: function () {
    return {
      phone_number: null,
      email_counter: 1,
      contact_email: null,
      contact_name: null,
      contact_phone_number: null,

      new_contact: null,
      phone_number_list: {},
      address_list: {},
      email_data: {},
      active: true,
      currentKey: null,
      temp_email_holder: [],
      temp_phone_holder: [],
      string_empty: false,
      isDuplicate: false,
    };
  },
  methods: {
    create_contact() {
      //
    },

    /*   add_phone_number() {
      this.contact_phone_number = this.phone_number;
    }, */

    clear_alert() {
      this.string_empty = false;
      this.contact_email = "";
    },
    update_phone(value) {
      this.phone_number_list = value;
    },
    update_address(value) {
      this.address_list = value;
    },
  },
  props: ["getKey"],
};
</script>

<style scoped></style>
