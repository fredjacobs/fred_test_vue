<template>
    <div>
<v-btn style="color:#0000ff;"
@click="onSelect"
>{{ItemData.title}}</v-btn>
    </div>
</template>
<script>
export default {
    data:function(){
        return {
            
        }

    },
    props:[
        "ItemData"
    ],
    methods:{
        onSelect(){
            this.$emit("onselect",this.ItemData)
        }
    }
    
}
</script>

<style scoped>

</style>