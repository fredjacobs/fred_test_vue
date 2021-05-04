<template>
  <div>
    Client Select
    <DataList :Items="myData"></DataList>
  </div>
</template>
<script>
import DataList from "@/components/DataList.vue";

export default {
  data: function () {
    return {
      myData: [
        {
          title: "item1",
          description: "Wash car",
        },
        {
          title: "item2",
          description: "Do exercise",
        },
      ],
    };
  },
  components: {
    DataList: DataList,
  },
};
</script>

<style scoped></style>
