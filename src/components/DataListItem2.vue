<template>
  <div>
    <v-list-item>
      <v-list-item-icon>
        <v-icon>mdi-account-circle</v-icon>
      </v-list-item-icon>

      <v-list-item-content>
        <v-list-item-title>
          <v-btn style="color: #ff0000" @click="onselect">{{
            ItemData.title
          }}</v-btn>
        </v-list-item-title>
      </v-list-item-content>
      <v-list-item-content>
        {{ ItemData.description }}
      </v-list-item-content>
    </v-list-item>
  </div>
</template>
<script>
export default {
  data: function () {
    return {};
  },
  props: ["ItemData"],
  methods: {
    onselect() {
      this.$emit("onselect", this.ItemData);
    },
  },
};
</script>

<style scoped></style>
