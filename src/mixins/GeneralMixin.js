import Vue from "vue";

Vue.mixin({
    methods:{
        isSmallerScreens(){
            return this.$vuetify.breakpoint.smAndDown;  
        }
    }
})