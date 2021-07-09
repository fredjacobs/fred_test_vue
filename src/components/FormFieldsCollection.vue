<template>
  <v-card class="px-4">
    <v-card-title>Form Fields Here</v-card-title>
    <Component v-for="item in fieldType" :key="item.type" :is="item.type" class="field_component">
    </Component>
  </v-card>
</template>
<script>
import TextFieldComponent from "@/components/InputFields/TextFieldComponent";
import RadioButtonComponent from "@/components/InputFields/RadioButtonComponent";
import CheckBoxComponent from "@/components/InputFields/CheckBoxComponent";

export default {
  data: function () {
    return {
      fieldType: [
        { type: "TextFieldComponent" },
        { type: "RadioButtonComponent" },
        { type: "CheckBoxComponent"}
      ],
    };
  },
  components: {
    TextFieldComponent,
    RadioButtonComponent,
    CheckBoxComponent,
  },
};
</script>

<style scoped>
/* .field_component {
  border-bottom:1px solid grey;
} */
</style>
