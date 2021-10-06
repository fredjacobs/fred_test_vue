<template>
  <v-container>
    <v-card
      class="d-flex justify-center amber accent-4 white--text py-2 text-h4 mb-6"
      >Create Your Form</v-card
    >
    <div class="edit_form_list my-4">
      <span>Edit Form: </span
      ><span v-for="form in forms" :key="form.id"
        ><v-btn
          @click="display_form"
          :data-id="form.id"
          small
          rounded
          class="mx-2"
          >{{ form.form_name }}</v-btn
        >
      </span>
    </div>
    <v-row>
      <v-col cols="12" sm="8" class="">
        <FormFieldsCollection
          @show_edit_field="show_field"
          :formFields="formfields"
          :current_form_name="formName"
          :id="formId"
          :inEditMode="editMode"
          @clearFormFields="clearFormList"
          @updateForms="updateForms"
        />
      </v-col>

      <v-col cols="4" class="">
        <AddFormFields />
        <FormFieldEdit
          v-if="showEditField"
          :id="editFieldId"
          @submit-form-edit="editField"
        />
      </v-col>
    </v-row>
  </v-container>
</template>
<script>
import AddFormFields from "@/components/AddFormFields.vue";
import FormFieldsCollection from "@/components/FormFieldsCollection.vue";
import FormFieldEdit from "@/components/FormFieldEdit.vue";

export default {
  data: function () {
    return {
      formfields: [],
      showEditField: false,
      editFieldId: null,
      forms: [],
      formName: null,
      formId: null,
      editMode: false,
    };
  },
  methods: {
    clearFormList() {
      this.formfields = this.$store.state.formFields;
    },
    show_field(id) {
      this.showEditField = true;
      this.editFieldId = id;
    },
    editField(args) {
      this.$store.commit("updateFormField", args);
    },
    display_form(e) {
      //this.$store.commit("clearFields");
      const id = e.currentTarget.dataset.id;
      const curForm = this.forms.find((form) => form.id.toString() === id);
      const fields = curForm.fields;
      fields.forEach((field) => this.$store.commit("addFormFields", field));

      this.formName = curForm.form_name;
      this.formId = curForm.id;
      this.editMode = true;

      console.log(curForm);
    },

    async updateForms() {
      this.forms = [];
      const response = await this.$http.get("http://localhost:3000/forms");
      const data = response.data;

      data.map((el) => this.forms.push(el));
    },
  },
  components: {
    AddFormFields,
    FormFieldsCollection,
    FormFieldEdit,
  },

  async mounted() {
    this.formfields = this.$store.state.formFields;

    const response = await this.$http.get("http://localhost:3000/forms");
    const data = response.data;

    data.map((el) => this.forms.push(el));

    /*  this.$http
      .get("http://localhost:3000/forms")
      .then((response) => console.log(response.data))
      .then((data) => this.forms.push(data.map((el) => el.name)))
      .catch((err) => console.log(err.message)); */
  },
};
</script>
<style scoped></style>
