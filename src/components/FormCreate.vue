<template>
  <v-container>
    <v-card
      class="d-flex justify-center amber accent-4 white--text py-2 text-h4 mb-6"
      >Create Your Form</v-card
    >
    <v-row>
      <v-col cols="12" sm="8" class="">
        <FormFieldsCollection />
      </v-col>

      <v-col cols="4" class="">
        <AddFormFields />
      </v-col>
    </v-row>
  </v-container>
</template>
<script>
import AddFormFields from "@/components/AddFormFields.vue";
import FormFieldsCollection from "@/components/FormFieldsCollection.vue";

export default {
  data: function () {
    return {};
  },
  components:{
      AddFormFields,
      FormFieldsCollection,
  }
};
</script>
<style scoped></style>
