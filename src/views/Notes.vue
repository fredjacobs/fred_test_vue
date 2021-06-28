<template>
  <div>
    <v-btn @click="addNote">Add Note</v-btn>
    <v-text-field v-model="newnote" label="New Note"></v-text-field>
    <div class="mainDiv">Notes</div>
    <p>CSS Classes</p>
    <p>Local Storage - Remember Theme</p>
    <ul>
      <li><a href="https://vue-chartjs.org/">https://vue-chartjs.org/</a></li>
      <li><a href="https://saigesp.github.io/vue-d3-charts/#/">https://saigesp.github.io/vue-d3-charts/#/</a></li>
      <li></li>
    </ul>
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
