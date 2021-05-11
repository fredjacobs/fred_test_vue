<template>
  <div>
    Client Select
    <DataList :Items="myData" @onselect="onSelect">
      <template #listitem="slotprops">
        <DataListItem2
          :ItemData="slotprops.ItemData"
          @onselect="slotprops.onSelect"
        >
        </DataListItem2>
      </template>
    </DataList>
  </div>
</template>
<script>
import DataList from "@/components/DataList.vue";
import DataListItem2 from "@/components/DataListItem2.vue";

export default {
  methods: {
    onSelect(val) {
      console.log(val);
    },
  },
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
    DataListItem2: DataListItem2,
  },
};
</script>

<style scoped></style>
