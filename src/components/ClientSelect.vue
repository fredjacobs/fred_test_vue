<template>
  <div>
    <h3 class="text-center pt-6">Please Select a Client:</h3>
    <p class="text-center">
      <v-btn @click="toggleView">Toggle View</v-btn>
    </p>
    <DataList :Items="$store.state.myData" @onselect="onselect" keyforlabel='acc'>
      <template #listitem="slotProps">
        <Component :is="componentType"
         
          :ItemData="slotProps.ItemData"
          @onselect="slotProps.onselect"
        >
        </Component>
        
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
      console.log('clienselect');
      console.log(val);
      this.$store.commit("updateCurrentClient", val.title);
      this.$router.push("/client");
    },
    toggleView() {
     
        this.componentType =  this.componentType == "DataListItem"?'DataListItem2':'DataListItem';
     
    },
    checkForTitle() {},
  },
  data: function () {
    return {
    componentType:"DataListItem"
    };
  },
  components: {
    DataList: DataList,
    DataListItem: DataListItem,
    DataListItem2: DataListItem2,
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
