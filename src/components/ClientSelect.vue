<template>
    <div>
Client Select
<DataList :Items="myData"
></DataList>

    </div>
</template>
<script>
import DataList from "@/components/DataList.vue";

export default {
    data:function(){
        return {
           myData:[{
               title: "item1",
           },{
               title: "item2",
           }] 
        }

    },
    components:{
       
        DataList:DataList
        
    },
    
}
</script>

<style scoped>

</style>