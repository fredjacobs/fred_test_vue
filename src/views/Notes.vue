<template>
  <div>
    <v-btn @click="addNote">Add Note</v-btn>
    <v-text-field v-model="newnote" label="New Note"></v-text-field>
    <div class="mainDiv">Notes</div>
  </div>
</template>
<script>
export default {
     data: function () {
    return {
      newnote:'',
    };
  },
  methods: {
    addNote() {
      const newDiv = document.createElement("div");
      newDiv.innerText = this.newnote;
      document.querySelector(".mainDiv").appendChild(newDiv);
    },
  },
};
</script>
<style scoped></style>
