<template>
    <div>
About US
    </div>
    
</template>
<script>
import axios from "axios";

export default {
    data:function(){
        return {
            
        }

    },
    mounted(){
        axios.get("https://reqres.in/api/users?page=2")
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