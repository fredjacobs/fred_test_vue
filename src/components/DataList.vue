<template>
  <div>
    <!--TODO DataList Items Create -->
    <v-card max-width="90%" class="mx-auto">
      <v-list>
        <slot
          v-for="listItem in Items"
          name="listitem"
          :ItemData="listItem"
          @onselect="onselect"
        >
        </slot>
      </v-list>
    </v-card>
  </div>
</template>
<script>
export default {
  methods: {
    onselect(val) {
      this.$emit("onselect", val);
    },
  },
  data: function () {
    return {};
  },

  props: ["Items"],
};
</script>

<style scoped></style>
