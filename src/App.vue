<template>
  <div id="app">
    <v-app>
      <v-main>
      
    

<ContentHeader :headerText='customHeaderText' headericon='mdi-account-circle'></ContentHeader>

</v-main>
</v-app>
  </div>


</template>
<script>
     

import ContentHeader from '@/components/ContentHeader';

export default {
  components:{   
    ContentHeader
  },
  data: () => ({
    customHeaderText: "Text for header 2"

    }),

}
</script>




