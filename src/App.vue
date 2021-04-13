<template>
  <div id="app">
    <v-app>
      <v-main>
      
    

<!-- <ContentHeader
 :headerText='customHeaderText'
  headericon='mdi-account-circle'
  @myEvent='emmitReceiver'
  ></ContentHeader> -->

  <router-view></router-view>

</v-main>
</v-app>
  </div>


</template>
<script>
     

//import ContentHeader from '@/components/ContentHeader';

export default {
  components:{   
    //ContentHeader
  }, 
  data: () => ({
    customHeaderText: "Text for header 2"

    }),
    methods:{
      emmitReceiver(val){
        console.log(val);
      }
    }

}
</script>




