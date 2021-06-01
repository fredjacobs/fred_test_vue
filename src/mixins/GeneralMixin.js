import Vue from "vue";

Vue.mixin({
    methods:{
        isSmallerScreens(){
            return this.$vuetify.breakpoint.smAndDown;  
        },
        getTheme(){
            return{
                "theme--dark" : this.$vuetify.theme.isDark,
                "theme--light": !this.$vuetify.theme.isDark
            }
        },
        getIconThemeColor(){
            
        }
    }
})