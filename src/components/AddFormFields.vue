<template>
  <v-card class="pa-2" align="center" justify="space-around">
    <v-card-title>Add New Form Fields From Here</v-card-title>

    <!--#####################################-->

    <v-btn
      v-for="item in fieldslist"
      :key="item.fieldName"
      @click="addField"
      :data-field="item.slug"
      class="btn_fieldname ma-2"
      large
      rounded
      >{{ item.fieldName }}</v-btn
    >
    <!--#####################################-->
  </v-card>
</template>
<script>
export default {
  data: function () {
    return {
      addedfields:[],
      fieldslist: [
        {
          fieldName: "Text Field",
          slug: "textfield",
        },
        {
          fieldName: "Text area",
          slug: "textarea",
        },
        {
          fieldName: "Drop Down",
          slug: "dropdown",
        },
        {
          fieldName: "Radio Buttons",
          slug: "radiobuttons",
        },
        {
          fieldName: "Checkboxes",
          slug: "checkboxes",
        },
        {
          fieldName: "Date",
          slug: "date",
        },
        {
          fieldName: "Address",
          slug: "address",
        },
        {
          fieldName: "Email",
          slug: "email",
        },
        {
          fieldName: "File Upload",
          slug: "fileupload",
        },
        {
          fieldName: "Page",
          slug: "page",
        },
      ],
    };
  },
  methods: {
    addField(e) {
      console.log(e.currentTarget.dataset.field);
    },
  },
};
</script>

<style scoped>
.btn_fieldname {
  width: 45%;
}
</style>
