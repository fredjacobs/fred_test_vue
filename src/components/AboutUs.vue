<template>
    <div>
About US
    </div>
    
</template>
<script>

import {getFunction} from "@/request/Post";
export default {
    data:function(){
        return {
            
        }

    },
    mounted(){
        getFunction({
            url: "1https://reqres.in/api/users?page=2",
            data:{}
        })
        .then(function(response){
            console.log(response);
        }.bind(this))
        .catch(function(error){
            console.log(error)
        }.bind(this))
    }
    
}
</script>

<style scoped>

</style>