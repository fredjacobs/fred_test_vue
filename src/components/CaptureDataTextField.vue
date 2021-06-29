<template>
  <div class="">
    <v-card class="pa-6"  elevation="2">
      <component
        :is="type"
        :label="label"
        v-model="data_input"
        clearable
        :prepend-icon="icon"
        :append-outer-icon="click_icon"
        @click:append-outer="add_item"
        v-bind="extra_attributes"
      ></component>

      <v-list-item
        class="grey lighten-3 pa-2 mb-2"
        align="center"
        justify="space-around"
        v-for="cur_entry in data_items"
        :key="cur_entry.key"
      >
        <v-list-item-content>
          <v-list-item-title>{{ cur_entry.value }}</v-list-item-title>
          <div class="d-flex justify-center">
            <v-checkbox
              :input-value="active"
              label="Primary"
              append-icon="mdi-trash-can-outline"
              @click:append="delete_item($event,cur_entry)"
            ></v-checkbox>
          </div>
        </v-list-item-content>
      </v-list-item>
      <v-list-item>no entries yet</v-list-item>
    </v-card>
  </div>
</template>
<script>
export default {
  data: function () {
    return {
      data_input: null,
      data_items: {},
      data_key: 1,
    };
  },
  props: [
    "label",
    "value",
    "icon",
    "click_icon",    
    "active",
    "type",
    "extra_attributes",
  ],
  methods: {
    add_item() {
      if (
        this.data_input === null ||
        this.data_input === undefined ||
        this.data_input === ""
      ) {
        console.log("Input Not Valid");
        return;
      }

      for (let prop in this.data_items) {
        var item = this.data_items[prop];
        if (item.value === this.data_input) {
          console.log("Item already exist");
          return;
        }
      }

      let key = `entry_${this.data_key}`;
      this.data_items[key] = {
        value: this.data_input,
        primary: false,
        key: key,
      }; //--------------------------------
      this.data_key++;

      this.data_items = { ...this.data_items };

      this.$emit("add_contact_details", this.data_items);
      this.data_input = "";
    },
    delete_item($event, $target) {

      delete this.data_items[$target.key];

      this.data_items = { ...this.data_items };

      this.$emit("add_contact_details", this.data_items);
    },
  },
};
</script>

<style scoped></style>
