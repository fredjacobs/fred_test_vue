<template>
  <div>Object Ninja Dojo</div>
</template>
<script>
export default {
  data: function () {
    return {
dataDojo:{},

    };
  },
  mounted(){

    for(let i=0;i<10;i++){
        var ob = this.dataDojo["scene_"+i] = {};
        let ninjas = ob.ninjas = [];
        for(let j=0;j<(((Math.random()*10)+1)<<0);j++){
            var ob2 = {};
            ob2.name = "scene_"+i + " ninja_"+j;
            ninjas.push(ob2);
           

        }

    };


    console.log(this.dataDojo);
    console.log(this.getNinja(5,2))




  },
  methods:{
      getNinja(sceneIndex, ninjaIndex){
          var scene = this.dataDojo["scene_"+sceneIndex];
          if(scene === null || scene === undefined){
              return 'No such scene';
          }
          var validIndex = (ninjaIndex + 1 ) <=  scene.ninjas.length;
          if(!validIndex){
              return 'No such ninja';
          }
          return scene.ninjas[ninjaIndex].name;

      }
  }

};
</script>

<style scoped></style>
