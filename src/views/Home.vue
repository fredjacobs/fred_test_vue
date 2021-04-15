<template>
    <div>
Home
<component :is="current_component"></component>
<v-btn 
@click="loadContact"
></v-btn>
    </div>
</template>
<script>
import AboutUs from "@/components/AboutUs.vue";
import ContactUs from "@/components/ContactUs.vue";
export default {
    

    data:function(){
        return {
            getKeyToComponent:{
                aboutus: "AboutUs",
                contactus:"ContactUs"
            }
        }

    },
    components:{
        AboutUs:AboutUs,
        ContactUs:ContactUs
        
    },
    methods:{
        loadContact(){
            this.$router.push({
                path:" contactus",
            })
        }

    },
    mounted(){
       // console.log(this.$route.params.getKey)
    },
    computed:{
        current_component(){
return this.getKeyToComponent[this.$route.params.getKey]
        }
    }
    
}
</script>

<style scoped>

</style>