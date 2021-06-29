<template>
  <v-container class="">
    <v-card
      class="d-flex justify-center amber accent-4 white--text py-2 text-h4 mb-6"
      >Contact Create</v-card
    >
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
      <v-col cols="12" md="6" class="">
        <!-- ######### Name ##############-->

        <v-card class="pa-6 fill-height" elevation="2">
          <v-text-field
            label="name"
            v-model="contact_name"
            clearable
            prepend-icon="mdi-account"
            append-outer-icon="mdi-google-play"
            @click:append-outer="add_contact"
          ></v-text-field>

          <v-list-item>
            <v-list-item-content>
              <v-list-item-title>{{ new_contact }}</v-list-item-title>
              <v-btn icon> 
                <v-icon>mdi-trash-can-outline</v-icon>
                 </v-btn>
            </v-list-item-content>
          </v-list-item>
        </v-card>

        <!-- ######### END Name ##############-->
      </v-col>

      <!--#################-->

      <v-col cols="12" md="6" class="">
        <!-- ######### Email ##############-->

        <v-card class="pa-6 fill-height" elevation="2">
          <v-text-field
            label="email"
            v-model="contact_email"
            clearable
            prepend-icon="mdi-email"
            append-outer-icon="mdi-google-play"
            @click:append-outer="add_email"
          ></v-text-field>
          <v-list-item v-if="Object.keys(this.email_list).length === 0"
            >no entries yet</v-list-item
          >
          <v-list-item
            class="grey lighten-3 pa-2 mb-2"
            align="center"
            justify="space-around"
            v-for="email_entry in email_list"
            :key="email_entry.key"
            v-model="email_entry.key"
          >
            <v-list-item-content>
              <v-list-item-title>{{ email_entry.entry }}</v-list-item-title>
              <div class="d-flex justify-center">
                <v-checkbox
                  :input-value="active"
                  label="Primary"
                  append-icon="mdi-trash-can-outline"
                  @click:append="delete_email"
                ></v-checkbox>
              </div>
            </v-list-item-content>
          </v-list-item>
        </v-card>
      </v-col>

      <!--#################-->
    </v-row>

    <v-row class="d-flex">
      <v-col cols="12" md="6" class="">
        <CaptureDataTextField
          label="phone"
          icon="mdi-phone"
          click_icon="mdi-google-play"
          @add_contact_details="update_phone"
          :form_data="phone_number_list"
        />
      </v-col>

      <v-col cols="12" md="6" class="">
        <CaptureDataTextField
          label="address"
          enter_value="address"
          icon="mdi-home-map-marker"
          click_icon="mdi-google-play"
          @add_contact_details="update_address"
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
//import CaptureDataTextArea from "@/components/CaptureDataTextArea.vue";

export default {
  components: {
    CaptureDataTextField,
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
      email_list: {},
      active: true,
      currentKey: null,
      temp_email_holder: [],
      temp_phone_holder: [],
      string_empty: false,
      isDuplicate: false,
    };
  },
  methods: {
    add_email(e) {
      this.isDuplicate = this.temp_email_holder.some((val) =>
        val === this.contact_email ? true : false
      );

      if (this.contact_email != null && this.contact_email != "") {
        if (!this.isDuplicate) {
          this.email_list[`entry_${this.email_counter}`] = {
            entry: this.contact_email,
            primary: false,
            key: this.email_counter,
          };

          this.temp_email_holder.push(this.contact_email);
          this.contact_email = "";
          this.email_counter++;
          this.string_empty = false;
        }
      } else {
        this.string_empty = true;
      }
    },
    delete_email(e) {
      delete this.email_list["entry_2"];
      this.email_list = Object.assign({}, this.email_list, {});
      console.log("Delete");
    },
    add_contact(e) {
      if (this.contact_name != null) {
        this.new_contact = this.contact_name;
      } else {
        this.string_empty = true;
      }
    },
  /*   add_phone_number() {
      this.contact_phone_number = this.phone_number;
    }, */
    create_contact() {
      console.log("Creating Contact");
    },
    clear_alert() {
      this.string_empty = false;
      this.contact_email = "";
    },
    update_phone(input) {
      console.log("Add Phone");
      this.phone_number_list[`entry_${this.email_counter}`] = {
        entry: input,
        primary: false,
        key: this.email_counter,
      };

      this.temp_phone_holder.push(this.contact_email);
      this.phone_number = "";
      this.email_counter++;
      this.string_empty = false;
    },
    update_address() {
      console.log("Add Address");
    },
  },
  props: ["getKey"],
};
</script>

<style scoped></style>
