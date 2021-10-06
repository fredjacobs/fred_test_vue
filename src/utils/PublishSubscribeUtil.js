/* const PublishSubscribeUtil = {
  sayHello: function () {
    console.log("Hello Util");
  },
}; */
let PS = function () {
  this.events = {};
};

//this.events["ev1"] = "imspecial1";

PS.prototype = {
  //Check if eventListener exist
  hasListener() {},

  //Send Event
  dispatchEvent: function (evntnm, payload) {
    if (this.events[evntnm]) {
      for (let i = 0; i < this.events[evntnm].length; i++) {
        this.events[evntnm][i](payload);
      }
    }
  },

  //Remove all Event Listeners/*  */
  removeAllEventListeners: function () {
    this.events = {};
  },

  //Add event listeners to the events object
  addEventListener: function (eventName, fn) {
    if (!this.events[eventName]) {
      this.events[eventName] = [];
    }

    this.events[eventName].push(fn);
    //console.log(this.events);
  },
};

let mypsinstance = new PS();
export default mypsinstance;
