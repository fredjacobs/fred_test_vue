<template>
  <div class="container">
    <div>Creating Contacts</div>

    <v-container>
      <v-row class="d-flex">
        <v-col cols="12" md="6" class="flex-grow-1">
          <v-card class="pa-6" elevation="2">
            <v-text-field
              label="name"
              v-model="contact_name"
              clearable
              prepend-icon="mdi-account"
              append-outer-icon="mdi-google-play"
              @click:append-outer="add_contact"
            ></v-text-field>

            <v-list-item>{{ contact_name }}</v-list-item>
          </v-card>
        </v-col>

        <!--########class="flex-grow-1"#########-->

        <v-col cols="12" md="6" class="flex-grow-1">
          <v-card class="pa-6" elevation="2">
            <v-text-field
              label="email"
              v-model="contact_email"
              clearable
              prepend-icon="mdi-email"
              append-outer-icon="mdi-google-play"
              @click:append-outer="add_email"
            ></v-text-field>

            <v-list-item
              v-for="email_entry in email_list"
              :key="email_entry.key"
              
            >
              <v-list-item-content>
                <v-list-item-title>{{
                  email_entry.email_address
                }}---- {{email_entry.key}}</v-list-item-title>

                <v-checkbox
                  :input-value="active"
                  label="Primary"
                  append-icon="mdi-trash-can-outline"
                  @click:append="delete_email"
                ></v-checkbox>

                
              </v-list-item-content>
            </v-list-item>
          </v-card>
        </v-col>

        <!--#################-->
      </v-row>
      <v-row>
        <v-col cols="12" md="6" x>
          <CaptureDataTextField />
        </v-col>
        <v-col cols="12" md="6">
          <CaptureDataTextArea />
        </v-col>
      </v-row>
    </v-container>
  </div>
</template>

<script>
import CaptureDataTextField from "@/components/CaptureDataTextField.vue";
import CaptureDataTextArea from "@/components/CaptureDataTextArea.vue";

export default {
  components: {
    CaptureDataTextField,
    CaptureDataTextArea,
  },
  data: function () {
    return {
      email_counter: 1,
      contact_email: null,
      contact_name: null,
      email_list: {},
      active: true,
    };
  },
  methods: {
    add_email(e) {
      this.email_list[`entry_${this.email_counter}`] = {
        email_address: this.contact_email,
        primary: false,
        key: this.email_counter,
      };
      this.contact_email = "";
      this.email_counter++;
    },
    delete_email(e) {
      delete this.email_list["entry_1"];
      this.email_list = Object.assign({}, this.email_list, {});
      
    },
    add_contact(e) {
      console.log(this.contact_name);
    },
  },
};
</script>

<style scoped></style>
