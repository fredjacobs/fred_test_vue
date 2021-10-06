<template>
  <v-card class="pa-2" align="center" justify="space-around">
    <v-card-title>Add New Form Fields From Here</v-card-title>

    <!--#####################################-->

    <v-btn
      v-for="item in fieldslist"
      :key="item.fieldName"
      @click="addField"
      :data-field="item.slug"
      :data-fieldtype="item.type"
      class="btn_fieldname ma-2"
      large
      rounded
      :disabled="item.disabled"
      >{{ item.fieldName }}</v-btn
    >
    <!--#####################################-->
  </v-card>
</template>
<script>
export default {
  data: function () {
    return {
      fieldID: 0,
      addedfields: [],
      fieldslist: [
        {
          fieldName: "Text Field",
          slug: "textfield",
          type: "TextFieldComponent",
          disabled: false,
          label: "",
        },
        {
          fieldName: "Text area",
          slug: "textarea",
          type: "TextAreaComponent",
          disabled: false,
          label: "",
        },
        {
          fieldName: "Radio Buttons",
          slug: "radiobuttons",
          type: "RadioButtonComponent",
          disabled: false,
        },
        {
          fieldName: "Checkboxes",
          slug: "checkboxes",
          type: "CheckBoxComponent",
          disabled: false,
        },
        {
          fieldName: "Drop Down",
          slug: "dropdown",
          type: "",
          disabled: true,
        },
        {
          fieldName: "Date",
          slug: "date",
          type: "",
          disabled: true,
        },
        {
          fieldName: "Address",
          slug: "address",
          type: "",
          disabled: true,
        },
        {
          fieldName: "Email",
          slug: "email",
          type: "",
          disabled: true,
        },
        {
          fieldName: "File Upload",
          slug: "fileupload",
          type: "",
          disabled: true,
        },
        {
          fieldName: "Page",
          slug: "page",
          type: "",
          disabled: true,
        },
      ],
    };
  },
  methods: {
    addField(e) {
      //console.log(e.currentTarget.dataset.field);
      //this.$emit("getfield", e.currentTarget.dataset.field);
      ++this.fieldID;

      let fieldInfo = {
        field_id: this.fieldID.toString(),
        field_name: e.currentTarget.dataset.field,
        field_type: e.currentTarget.dataset.fieldtype,
        field_label: "Label Here",
      };
      this.$store.commit("addFormFields", fieldInfo);
    },
  },
};
</script>

<style scoped>
.btn_fieldname {
  width: 45%;
}
</style>
