<template>
  <div>
    <v-card class="ma-2 pa-4">
      <v-textarea
        :data-formId="formId"
        outlined
        :label="fieldlabel"
      ></v-textarea>
      <v-btn @click="displayForm" rounded>EDIT</v-btn>
    </v-card>
  </div>
</template>
<script>
export default {
  data: function () {
    return {};
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
