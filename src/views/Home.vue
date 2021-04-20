<template>
    <div>
Home
<component :is="current_component"></component>

    </div>
</template>
<script>
import AboutUs from "@/components/AboutUs.vue";
import ClientSelect from "@/components/ClientSelect.vue";
export default {
    

    data:function(){
        return {
            getKeyToComponent:{ 
                aboutus: "AboutUs",
                clientselect:"ClientSelect"
            }
        }

    },
    components:{
        AboutUs:AboutUs,
        ClientSelect:ClientSelect
        
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