<template>
  <div>
    <v-card
      max-width="90%"
      class="mx-auto"
      :class="showinfo ? 'my-2' : ''"
      :elevation="showinfo ? 24 : 2"
    >
      <v-list>
        <v-list-item>
          <v-list-item-icon>
            <v-icon>mdi-account-circle</v-icon>
          </v-list-item-icon>

          <v-list-item-content>
            <v-list-item-title style="color: #000000" @click="onselect">
              {{ ItemData.title }}
            </v-list-item-title>
          </v-list-item-content>

          <v-list-item-action v-if="ItemData.description">
            <v-btn icon @click="showinfo = !showinfo">
              <v-icon color="grey lighten-1">mdi-information</v-icon>
            </v-btn>
          </v-list-item-action>
        </v-list-item>

        <v-list-item v-if="showinfo" class="more-info">
          <v-list-item-content>
            {{ ItemData.description }}
          </v-list-item-content>
        </v-list-item>
      </v-list>
    </v-card>
  </div>
</template>
<script>
export default {
  data: function () {
    return {
      showinfo: false,
    };
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
