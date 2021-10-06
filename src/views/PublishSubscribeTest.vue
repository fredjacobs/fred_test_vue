<template>
  <div>
    <v-btn
      @click="
        sendAnEvent($event, eventNames[0], {
          message: 'im button 1',
          fnkey: 'imspecial1',
        })
      "
    >
      button 1
    </v-btn>
    <v-btn
      @click="
        sendAnEvent($event, eventNames[1], {
          message: 'im button 2',
          fnkey: 'imspecial2',
        })
      "
    >
      button 2
    </v-btn>
    <v-btn
      @click="
        sendAnEvent($event, eventNames[2], {
          message: 'im button 3',
          fnkey: 'imspecial3',
        })
      "
    >
      button 3
    </v-btn>
  </div>
</template>

<script>
import PublishSubscribeUtil from "@/utils/PublishSubscribeUtil";
export default {
  data: () => ({
    eventNames: ["ev1", "ev2", "ev3"],
  }),
  mounted() {
    //console.log(PublishSubscribeUtil.events);
    PublishSubscribeUtil.removeAllEventListeners();

    let index = 0;
    let ev = this.eventNames[index];
    while (ev) {
      PublishSubscribeUtil.addEventListener(
        ev,
        this.onButtonEventGeneric.bind(this)
      );
      ev = this.eventNames[++index];
    }

    //########### PUBLISH / SUBSCRIBE #######################
    //-----------Add Event name with function ---------------
    PublishSubscribeUtil.addEventListener("myEvent", this.sayHello);
    PublishSubscribeUtil.addEventListener("myEvent2", this.sayHello2);

    //-----------Call function by event name
    PublishSubscribeUtil.dispatchEvent("myEvent", "Hi");
    PublishSubscribeUtil.dispatchEvent("myEvent2", "Hello");

    //#######################################################
    //console.log(PublishSubscribeUtil.events);
  },
  methods: {
    sayHello(arg) {
      console.log(arg + " hello 1");
    },
    sayHello2(arg) {
      console.log(arg + " hello 2");
    },

    onButtonEventGeneric(payload) {
      this[payload.fnkey](payload);
    },
    sendAnEvent($event, evntnm, payload) {
      PublishSubscribeUtil.dispatchEvent(evntnm, payload);
    },
    imspecial1(payload) {
      console.log("imspecial1");
      console.log(payload);
      console.log("-------");
    },
    imspecial2(payload) {
      console.log("imspecial2");
      console.log(payload);
      console.log("-------");
    },
    imspecial3(payload) {
      console.log("imspecial3");
      console.log(payload);
      console.log("-------");
    },
  },
};
</script>
