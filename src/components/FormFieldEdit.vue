<template>
  <v-container :id="id">
    <v-card class="pa-2" align="center" justify="space-around"
      ><h3>Edit Selected Field</h3>
      <form @submit.prevent="submit" class="edit-form">
        <v-text-field label="Change Field Label" v-model="label"></v-text-field>

        <v-btn type="submit" rounded elevation="2" x-small>SUBMIT</v-btn>
      </form>
    </v-card>
  </v-container>
</template>

<script>
export default {
  data: function () {
    return {
      label: "",
    };
  },
  props: ["id"],
  methods: {
    submit(e) {
      const id = this.id;
      const label = this.label;

      const args = {
        label: label,
        id,
      };

      this.$emit("submit-form-edit", args);
      this.label = "";
    },
  },
};
</script>

<style scoped></style>
