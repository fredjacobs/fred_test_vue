<template>
  <div>
    <!--TODO DataList Items Create -->
    <slot v-for="(listItem) in Items" name="listitem"
    
     :ItemData="listItem"
     @onselect="onSelect"
     >
     
    </slot>
  </div>
</template>
<script>


export default {
   methods:{
        onSelect(val){
            this.$emit("onselect",val)
        }
    },
  data: function () {
    return {};
  },
  
  props: ["Items"],
};
</script>

<style scoped></style>
