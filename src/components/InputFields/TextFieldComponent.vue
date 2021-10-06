<template>
  <div>
    <v-card class="ma-2 pa-4">
      <v-text-field :id="formId" outlined :label="fieldlabel"></v-text-field>
      <v-btn @click="displayForm" rounded>EDIT FIELD</v-btn>
    </v-card>
  </div>
</template>
<script>
export default {
  data: function () {
    return {};
  },
  props: ["fieldlabel", "formId"],
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

      this.display = false;
      this.editButtonText = "EDIT";
    },
  },
};
</script>

<style scoped></style>
