<template>
  <div>
    <h3 class="text-center pt-6">Please Select a Client:</h3>
    <p class="text-center">
      <v-btn @click="toggleView">Toggle View</v-btn>
    </p>
    <DataList :Items="myData" @onselect="onselect">
      <template #listitem="slotProps">
        <DataListItem
          v-if="showListOne"
          :ItemData="slotProps.ItemData"
          @onselect="onselect"
        >
        </DataListItem>
        <DataListItem2
          v-if="showListTwo"
          :ItemData="slotProps.ItemData"
          @onselect="onselect"
        >
        </DataListItem2>
      </template>
    </DataList>
  </div>
</template>
<script>
import DataList from "@/components/DataList.vue";
import DataListItem from "@/components/DataListItem.vue";
import DataListItem2 from "@/components/DataListItem2.vue";

export default {
  methods: {
    onselect(val) {
      console.log(val);
      this.$store.commit("updateCurrentClient", val.title);
      this.$router.push("/client");
    },
    toggleView() {
      if (this.showListOne) {
        this.showListOne = false;
        this.showListTwo = true;
      } else {
        this.showListOne = true;
        this.showListTwo = false;
      }
    },
    checkForTitle() {},
  },
  data: function () {
    return {
      showListOne: true,
      showListTwo: false,
    };
  },
  components: {
    DataList: DataList,
    DataListItem: DataListItem,
    DataListItem2: DataListItem2,
  },
  computed: {
    myData() {
      const dataSet = this.$store.state.myData;
      dataSet.forEach((obj) => (obj["title"] = obj["name"]));

      return dataSet;
    },
  },
};

/* const myArr = [
  {
    name: "John",
    job: "Devleoper",
  },
  {
    name: "Peter",
    job: "Muso",
  },
];

const firstElement = Object.keys(myArr[0])[0];

const hasGot = myArr.every((el) => firstElement in el);

document.querySelector("p").textContent = hasGot; */
</script>

<style scoped></style>
