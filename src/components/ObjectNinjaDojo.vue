<template>
  <div>Object Ninja Dojo</div>
</template>
<script>
export default {
  data: function () {
    return {
      dataDojo: {},
      objOne: {},
      monthdata: [
        {
          year: 2021,
          month: 7,
          monthStr: "August",
          monthStrAbr: "Aug",
          date: 1,
          day: 0,
          dayStr: "sunday",
          dayStrAbr: "S",
        },
        {
          year: 2021,
          month: 7,
          monthStr: "August",
          monthStrAbr: "Aug",
          date: 2,
          day: 1,
          dayStr: "Monday",
          dayStrAbr: "M",
        },
        {
          year: 2021,
          month: 7,
          monthStr: "August",
          monthStrAbr: "Aug",
          date: 3,
          day: 2,
          dayStr: "Tuesday",
          dayStrAbr: "T",
        },
        {
          year: 2021,
          month: 7,
          monthStr: "August",
          monthStrAbr: "Aug",
          date: 4,
          day: 3,
          dayStr: "Wednesday",
          dayStrAbr: "W",
        },
        {
          year: 2021,
          month: 7,
          monthStr: "August",
          monthStrAbr: "Aug",
          date: 5,
          day: 4,
          dayStr: "Thursday",
          dayStrAbr: "T",
        },
        {
          year: 2021,
          month: 7,
          monthStr: "August",
          monthStrAbr: "Aug",
          date: 6,
          day: 5,
          dayStr: "Friday",
          dayStrAbr: "F",
        },
        {
          year: 2021,
          month: 7,
          monthStr: "August",
          monthStrAbr: "Aug",
          date: 7,
          day: 6,
          dayStr: "Saturday",
          dayStrAbr: "S",
        },
        {
          year: 2021,
          month: 7,
          monthStr: "August",
          monthStrAbr: "Aug",
          date: 8,
          day: 0,
          dayStr: "sunday",
          dayStrAbr: "S",
        },
        {
          year: 2021,
          month: 7,
          monthStr: "August",
          monthStrAbr: "Aug",
          date: 9,
          day: 1,
          dayStr: "Monday",
          dayStrAbr: "M",
        },
        {
          year: 2021,
          month: 7,
          monthStr: "August",
          monthStrAbr: "Aug",
          date: 10,
          day: 2,
          dayStr: "Tuesday",
          dayStrAbr: "T",
        },
        {
          year: 2021,
          month: 7,
          monthStr: "August",
          monthStrAbr: "Aug",
          date: 11,
          day: 3,
          dayStr: "Wednesday",
          dayStrAbr: "W",
        },
        {
          year: 2021,
          month: 7,
          monthStr: "August",
          monthStrAbr: "Aug",
          date: 12,
          day: 4,
          dayStr: "Thursday",
          dayStrAbr: "T",
        },
        {
          year: 2021,
          month: 7,
          monthStr: "August",
          monthStrAbr: "Aug",
          date: 13,
          day: 5,
          dayStr: "Friday",
          dayStrAbr: "F",
        },
        {
          year: 2021,
          month: 7,
          monthStr: "August",
          monthStrAbr: "Aug",
          date: 14,
          day: 6,
          dayStr: "Saturday",
          dayStrAbr: "S",
        },
        {
          year: 2021,
          month: 7,
          monthStr: "August",
          monthStrAbr: "Aug",
          date: 15,
          day: 0,
          dayStr: "sunday",
          dayStrAbr: "S",
        },
        {
          year: 2021,
          month: 7,
          monthStr: "August",
          monthStrAbr: "Aug",
          date: 16,
          day: 1,
          dayStr: "Monday",
          dayStrAbr: "M",
        },
        {
          year: 2021,
          month: 7,
          monthStr: "August",
          monthStrAbr: "Aug",
          date: 17,
          day: 2,
          dayStr: "Tuesday",
          dayStrAbr: "T",
        },
        {
          year: 2021,
          month: 7,
          monthStr: "August",
          monthStrAbr: "Aug",
          date: 18,
          day: 3,
          dayStr: "Wednesday",
          dayStrAbr: "W",
        },
        {
          year: 2021,
          month: 7,
          monthStr: "August",
          monthStrAbr: "Aug",
          date: 19,
          day: 4,
          dayStr: "Thursday",
          dayStrAbr: "T",
        },
        {
          year: 2021,
          month: 7,
          monthStr: "August",
          monthStrAbr: "Aug",
          date: 20,
          day: 5,
          dayStr: "Friday",
          dayStrAbr: "F",
        },
        {
          year: 2021,
          month: 7,
          monthStr: "August",
          monthStrAbr: "Aug",
          date: 21,
          day: 6,
          dayStr: "Saturday",
          dayStrAbr: "S",
        },
        {
          year: 2021,
          month: 7,
          monthStr: "August",
          monthStrAbr: "Aug",
          date: 22,
          day: 0,
          dayStr: "sunday",
          dayStrAbr: "S",
        },
        {
          year: 2021,
          month: 7,
          monthStr: "August",
          monthStrAbr: "Aug",
          date: 23,
          day: 1,
          dayStr: "Monday",
          dayStrAbr: "M",
        },
        {
          year: 2021,
          month: 7,
          monthStr: "August",
          monthStrAbr: "Aug",
          date: 24,
          day: 2,
          dayStr: "Tuesday",
          dayStrAbr: "T",
        },
        {
          year: 2021,
          month: 7,
          monthStr: "August",
          monthStrAbr: "Aug",
          date: 25,
          day: 3,
          dayStr: "Wednesday",
          dayStrAbr: "W",
        },
        {
          year: 2021,
          month: 7,
          monthStr: "August",
          monthStrAbr: "Aug",
          date: 26,
          day: 4,
          dayStr: "Thursday",
          dayStrAbr: "T",
        },
        {
          year: 2021,
          month: 7,
          monthStr: "August",
          monthStrAbr: "Aug",
          date: 27,
          day: 5,
          dayStr: "Friday",
          dayStrAbr: "F",
        },
        {
          year: 2021,
          month: 7,
          monthStr: "August",
          monthStrAbr: "Aug",
          date: 28,
          day: 6,
          dayStr: "Saturday",
          dayStrAbr: "S",
        },
        {
          year: 2021,
          month: 7,
          monthStr: "August",
          monthStrAbr: "Aug",
          date: 29,
          day: 0,
          dayStr: "sunday",
          dayStrAbr: "S",
        },
        {
          year: 2021,
          month: 7,
          monthStr: "August",
          monthStrAbr: "Aug",
          date: 30,
          day: 1,
          dayStr: "Monday",
          dayStrAbr: "M",
        },
        {
          year: 2021,
          month: 7,
          monthStr: "August",
          monthStrAbr: "Aug",
          date: 31,
          day: 2,
          dayStr: "Tuesday",
          dayStrAbr: "T",
        },
        null,
        null,
        null,
        null,
        null,
        null,
        null,
        null,
        null,
        null,
        null,
      ],
      eventdata: [
        {
          id: 7,
          start: {
            hour: "11",
            date: "11",
            month: "08",
            year: "2021",
          },
          end: {
            hour: "13",
            date: "11",
            month: "08",
            year: "2021",
          },
          confirmed: "2021-08-11 22:42:24",
          declined: null,
          title: "contact_11",
          contact_id: 12,
          project_id: 2,
          process_title: "Manage Sales Appointment",
          laravel_through_key: 1,
        },
        {
          id: 11,
          start: {
            hour: "11",
            date: "12",
            month: "08",
            year: "2021",
          },
          end: {
            hour: "13",
            date: "12",
            month: "08",
            year: "2021",
          },
          confirmed: "2021-08-12 13:33:39",
          declined: null,
          title: "contact_17",
          contact_id: 18,
          project_id: 6,
          process_title: "Manage Sales Appointment",
          laravel_through_key: 1,
        },
        {
          id: 8,
          start: {
            hour: "15",
            date: "12",
            month: "08",
            year: "2021",
          },
          end: {
            hour: "17",
            date: "12",
            month: "08",
            year: "2021",
          },
          confirmed: null,
          declined: null,
          title: "contact_15",
          contact_id: 16,
          project_id: 3,
          process_title: "Manage Sales Appointment",
          laravel_through_key: 1,
        },
        {
          id: 12,
          start: {
            hour: "17",
            date: "12",
            month: "08",
            year: "2021",
          },
          end: {
            hour: "19",
            date: "12",
            month: "08",
            year: "2021",
          },
          confirmed: null,
          declined: null,
          title: "contact_3",
          contact_id: 4,
          project_id: 7,
          process_title: "Manage Sales Appointment",
          laravel_through_key: 1,
        },
        {
          id: 9,
          start: {
            hour: "17",
            date: "13",
            month: "08",
            year: "2021",
          },
          end: {
            hour: "19",
            date: "13",
            month: "08",
            year: "2021",
          },
          confirmed: null,
          declined: null,
          title: "contact_10",
          contact_id: 11,
          project_id: 4,
          process_title: "Manage Sales Appointment",
          laravel_through_key: 1,
        },
        {
          id: 10,
          start: {
            hour: "15",
            date: "14",
            month: "08",
            year: "2021",
          },
          end: {
            hour: "17",
            date: "14",
            month: "08",
            year: "2021",
          },
          confirmed: null,
          declined: null,
          title: "contact_16",
          contact_id: 17,
          project_id: 5,
          process_title: "Manage Sales Appointment",
          laravel_through_key: 1,
        },
      ],
    };
  },
  mounted() {
    for (let i = 0; i < 10; i++) {
      var ob = (this.dataDojo["scene_" + i] = {}); //dataDojo.scene_1 = {}
      let ninjas = (ob.ninjas = []);
      for (let j = 0; j < (Math.random() * 10 + 1) << 0; j++) {
        var ob2 = {};
        ob2.name = "scene_" + i + " ninja_" + j;
        ninjas.push(ob2);
      }
    }

    console.log(this.dataDojo);
    console.log(this.getNinja(5, 1));

    const testArray = [{}, {}, {}];
    console.log(testArray);
    console.log(testArray.length);
    testArray[0].objOneKey = "ValueOne";
    console.log(this.dataDojo.scene_0.ninjas[0].name);

    /* console.log(this.monthdata);
    console.log(this.eventdata); */

    ////EXperiment CODE
    //#######################
    this.objOne["key_1"] = {};
    this.objOne["key_2"] = {};
    this.objOne["key_3"] = {};
    this.objOne["key_4"] = {};

    this.objOne.key_1.value = [];
    this.objOne.key_2.value = [];
    this.objOne.key_3.value = [];
    this.objOne.key_4.value = [];

    this.objOne.key_1.value[0] = {};
    this.objOne.key_2.value[0] = {};
    this.objOne.key_3.value[0] = {};
    this.objOne.key_4.value[0] = {};

    this.objOne.key_1.value[0].innerValue = 1;
    this.objOne.key_2.value[0].innerValue = 1;
    this.objOne.key_3.value[0].innerValue = 1;
    this.objOne.key_4.value[0].innerValue = 1;

    //console.log(this.objOne);
    this.getDateEventData(this.eventdata, this.monthdata);
  },
  methods: {
    getNinja(sceneIndex, ninjaIndex) {
      var scene = this.dataDojo["scene_" + sceneIndex];
      if (scene === null || scene === undefined) {
        return "No such scene";
      }
      var validIndex = ninjaIndex + 1 <= scene.ninjas.length;
      if (!validIndex) {
        return "No such ninja";
      }
      return scene.ninjas[ninjaIndex].name;
    },

    /* getDateEventData(events, dates) {
      let count = 0;
      events.forEach((el_e) => {
        dates.forEach((el_d) => {
          if (el_d !== null && el_d !== undefined) {
            let event = Number(el_e.start.date);
            if (event === el_d.date) {
              el_d.events = el_e;
              console.log(el_d);
            }
          }
          count++;
        });
        console.log(this.monthdata);
      });
      console.log(`Count: ${count}`);
    } ,*/

    getDateEventData(events, dates) {
      dates.forEach((el_d) => {
        if (el_d !== null && el_d !== undefined) {
          el_d.eventData = [];
          events.forEach((el_e) => {
            if (el_e !== null && el_e !== undefined) {
              let event = Number(el_e.start.date);
              if (event === el_d.date) {
                el_d.eventData.push(el_e);
              }
            }
          });
        }
      });

      console.log(this.monthdata);
    },

    printIt() {
      return "Hello Printer";
    },
  },
};
//this.getDateEventData(this.eventdata, this.monthdata);
</script>

<style scoped></style>
