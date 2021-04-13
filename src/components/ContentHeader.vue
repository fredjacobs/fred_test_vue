<template>
    <div style="width:100%;">
        <div class="text-h5 text-center mb-4 content-header-1">
<v-icon color='#fff' class="text-h5 vertical-align" large> 
    {{headericon}}
</v-icon> 
{{headerText}}

        </div>


    </div>
</template>

<script>
export default {
    props:['headerText', 'headericon'],
    mounted(){
     this.$emit('myEvent', 'Hello Emit');
    }

}
</script>

<style scoped>
.content-header-1 {
background-color: #232323;
color:#ffffff;
}
</style>