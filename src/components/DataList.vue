<template>
  <div>
    <!--TODO DataList Items Create -->

    <slot
      v-for="listItem in Items"
      name="listitem"
      :ItemData="enforcetitle(listItem)"
      :onselect="onselect"
      
      
      
    >
    </slot>
  </div>
</template>
<script>
export default {
  methods: {
    onselect(val) {
      console.log("datalist");
      console.log(val);
      this.$emit("onselect", val);
    },
    enforcetitle(val) {
      val.title = val[this.keyforlabel] || "no value";
      return val;
    },
  },
  data: function () {
    return {};
  },

  props: ["Items", "keyforlabel"],
};
</script>

<style scoped></style>
