<template>
  <div>
    <v-card class="ma-2 pa-4">
      <v-radio-group :data-formId="formId" v-model="radioGroup">
        <div class="group-label">{{ fieldlabel }}</div>
        <v-radio label="Choice 1" value="1"></v-radio>
        <v-radio label="Choice 2" value="2"></v-radio>
        <v-radio label="Choice 3" value="3"></v-radio>
      </v-radio-group>
      <v-btn @click="displayForm" rounded>EDIT</v-btn>
    </v-card>
  </div>
</template>
<script>
export default {
  data: function () {
    return {
      radioGroup: null,

      label: "",
    };
  },
  methods: {
    displayForm(e) {
      const id = e.currentTarget.closest(".field_component").dataset.id;
      this.$emit("edit_field", id);
    },
    submit(e) {
      const id = e.currentTarget.closest(".field_component").dataset.id;
      const label = this.label;

      const args = {
        label: label,
        id,
      };

      this.$emit("submit-form-edit", args);
      console.log(e.currentTarget);
    },
  },
  props: ["formId", "fieldlabel"],
};
</script>

<style scoped></style>
