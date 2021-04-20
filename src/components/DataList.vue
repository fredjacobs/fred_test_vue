<template>
    <div>
        <!--TODO DataList Items Create -->
        <div v-for="(listItem,index) in Items" :key="index"

        
        >
        {{listItem.title}}
        </div>

    </div>
</template>
<script>
export default {
    data:function(){
        return {
            
        }

    },
    props:[
        'Items'
    ]
    
}
</script>

<style scoped>

</style>