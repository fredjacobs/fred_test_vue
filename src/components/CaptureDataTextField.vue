<template>
  <div >
  
    <v-card class="pa-6 " elevation="2">
      <v-text-field
        :label="label"
        v-model="input"
        clearable
        :prepend-icon="icon"
        :append-outer-icon="click_icon"
        @click:append-outer="add_function"
      ></v-text-field>

      

      <v-list-item
        class="grey lighten-3 pa-2 mb-2"
        align="center"
        justify="space-around"
        v-for="cur_entry in form_data"
        :key="cur_entry.key"
      >
        <v-list-item-content>
          <v-list-item-title>{{ cur_entry.entry }}</v-list-item-title>
          <div class="d-flex justify-center">
            <v-checkbox
              :input-value="active"
              label="Primary"
              append-icon="mdi-trash-can-outline"
              @click:append="delete_entry"
            ></v-checkbox>
          </div>
        </v-list-item-content>
      </v-list-item>
      <v-list-item 
        >no entries yet</v-list-item
      >
    </v-card>
  </div>
</template>
<script>
export default {
  data: function () {
    return {
      input: null,
    };
  },
  props: ["label", "value", "icon", "click_icon", "form_data", "active"],
  methods: {
    add_function() {
      this.$emit("add_contact_details", this.input);
      this.input = "";
    },
    delete_entry() {},
  },
};
</script>

<style scoped></style>
