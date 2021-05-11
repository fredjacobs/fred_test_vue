/* NOTES: NEXT Class ands Style binding */
<template>
  <div>
    <h1 :style="[styleHeaderObj1, styleHeaderObj2]">Test Everything</h1>
    <p :class="{ center: makeCenterText }">
      This be a testing ground - {{ myTitle }}
    </p>
    <h1>{{ randomNumber }}</h1>

    <v-container class="grey lighten-5">
      <v-row no-gutters class="my-10">
        <v-col cols="2" sm="4">
          <v-card class="pa-2" outlined tile>
            {{ setShowValue }}

            <p v-if="setShowValue === 'true'">This is a true v-if condition</p>
            <p v-else>This is a false v-if condition</p>
          </v-card>
        </v-col>
        <v-col cols="2" sm="4">
          <v-card class="pa-2" outlined tile>
            <v-radio-group v-model="setShowValue">
              <v-radio label="setTrue" value="true"></v-radio>
              <v-radio label="setFalse" value="false"></v-radio>
            </v-radio-group>
          </v-card>
        </v-col>
        <v-col cols="2" sm="4">
          <v-card v-show="showThis" class="pa-2" outlined tile>
            <h3>Using the V-Show Directive</h3>
          </v-card>
        </v-col>
      </v-row>

      <v-row no-gutters class="my-10">
        <v-col cols="2" sm="4">
          <div>
            <ul>
              <li v-for="person in people" :key="person.name">
                {{ `${person.name} is ${person.age} years old.` }}
              </li>
            </ul>
          </div>
        </v-col>
        <v-col cols="2" sm="4">
          <div>
            <ul>
              <li v-for="item in myList" :key="item">{{ item }}</li>
            </ul>
          </div>
        </v-col>
      </v-row>

      <v-row no-gutters class="my-10">
        <v-col cols="2" sm="4">
          <div>
            <v-btn v-on:click="addToCounter" block> Click to Increment </v-btn>
            <!-- use @ sign for v-on -->
          </div>
        </v-col>
        <v-col cols="2" sm="4">
          <div class="pl-10">
            {{ counter }}
          </div>
        </v-col>
      </v-row>

      <v-row no-gutters class="my-10">
        <v-col cols="2" sm="4">
          <div>
            <p @mouseover="showMessage('Happy')">Show Happy</p>
            <p @mouseover="showMessage('Sad')">Show Sad</p>
          </div>
        </v-col>
        <v-col cols="2" sm="4">
          <div class="pl-10">
            <h2>{{ message }}</h2>
          </div>
        </v-col>
      </v-row>
      <form @submit="onSubmit">
        <v-text-field v-model="name" label="Enter Name"></v-text-field>

        <v-text-field v-model="color" label="Fav Color"></v-text-field>

        <v-btn @click="onSubmit">Submit</v-btn>
      </form>

      <p>{{ color }}</p>
    </v-container>
  </div>
</template>

<script>
export default {
  data: () => ({
    setShowValue: "false",
    makeCenterText: "true",
    showThis: true,
    counter: 0,
    message: "",
    name: "",
    color: null,
    subject: "VUE",
    action: "Learning",
    myList: ["JavaScript", "HTML", "CSS3", "VUE"],
    favColor: [],
    people: [
      {
        name: "Fred",
        age: 46,
      },
      {
        name: "Ian",
        age: 44,
      },
    ],
    styleHeaderObj1: {
      fontWeight: 800,
      color: "red",
    },
    styleHeaderObj2: {
      textAlign: "center",
      fontSize: "48px",
    },
  }),
  methods: {
    display: () => console.log(this.setShowValue),
    addToCounter() {
      this.counter += 1;
      this.$store.commit("newNumber", this.counter);
    },
    showMessage(mood) {
      this.message = mood;
    },
    onSubmit() {
      let favColor = {
        name: this.name,
        color: this.color,
      };
      this.$emit("submittedcolor", favColor);

      /* this.name = null;
      this.color = null;
      this.favColor.push(favColor); */
    },
  },
  mounted: function () {},
  computed: {
    myTitle() {
      return `${this.action} ${this.subject}`;
    },
    randomNumber(){
      return this.$store.state.randomNumber;
    }
  },
};
</script>

<style scoped>
.center {
  text-align: center;
}
</style>
