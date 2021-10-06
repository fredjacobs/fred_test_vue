<template>
  <v-card class="pa-4 light-blue lighten-3">
    <div v-if="!inEditMode" class="d-flex">
      <v-text-field
        label="Form Name"
        v-model="new_form_name"
        class="mx-6"
      ></v-text-field>
      <v-btn rounded large class="mx-6" @click="saveForm">Save Form</v-btn>
    </div>
    <div class="current_form_name" v-if="inEditMode">
      <span>Editing Form: {{ current_form_name }} | Id No: {{ id }}</span>
      <v-btn @click="update_form" class="mx-4" rounded>UPDATE FORM</v-btn>
    </div>
    <Component
      :formFields="formFields"
      v-for="item in formFields"
      :key="item.field_id"
      :is="item.field_type"
      class="field_component"
      :data-id="item.field_id"
      :formId="item.field_id"
      :fieldlabel="item.field_label"
      @edit_field="edit_field"
    >
    </Component>
  </v-card>
</template>
<script>
import TextFieldComponent from "@/components/InputFields/TextFieldComponent";
import RadioButtonComponent from "@/components/InputFields/RadioButtonComponent";
import CheckBoxComponent from "@/components/InputFields/CheckBoxComponent";
import TextAreaComponent from "@/components/InputFields/TextAreaComponent";

export default {
  data: function () {
    return {
      new_form_name: "",
    };
  },
  components: {
    TextFieldComponent,
    RadioButtonComponent,
    CheckBoxComponent,
    TextAreaComponent,
  },
  props: ["formFields", "current_form_name", "id", "inEditMode"],
  methods: {
    edit_field(id) {
      this.$emit("show_edit_field", id);
    },

    async saveForm(e) {
      e.preventDefault();
      const savedForm = {
        form_name: this.new_form_name,
        fields: this.$store.state.formFields,
      };
      console.log(savedForm);
      await this.$http({
        method: "POST",
        url: "http://localhost:3000/forms",
        data: savedForm,
      });

      await this.$store.commit("clearFields");
      this.$emit("clearFormFields");
      this.new_form_name = "";

      //#####################
      this.$emit("updateForms");

      //################
    },

    async update_form(e) {
      const id = this.id;
      const updatedForm = {
        form_name: this.current_form_name,
        fields: this.$store.state.formFields,
      };

      await this.$http({
        method: "PUT",
        url: `http://localhost:3000/forms/${id}`,
        data: updatedForm,
      });
      await this.$store.commit("clearFields");
      this.$emit("clearFormFields");
    },

    mounted() {
      this.fieldType = this.$store.state.formFields;
      //console.log(this.fieldType);
    },
  },
};
</script>

<style scoped>
/* .field_component {
  border-bottom:1px solid grey;
} */
</style>
