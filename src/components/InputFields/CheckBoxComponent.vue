<template>
  <div>
    <v-card class="ma-2 pa-4">
      <v-checkbox
        :label="fieldlabel"
        value="Check Me"
        :data-formId="formId"
      ></v-checkbox>

      <div>
        <v-btn @click="displayForm" rounded>EDIT</v-btn>
      </div>
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
