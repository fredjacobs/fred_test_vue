<template>
    <div class="stylepage">


<v-container no-gutters>
<v-layout row wrap no-gutters stretch>

    <v-flex sx12 md6 blue>
        <v-img src="@/assets/KINGDOM.png"></v-img>
    </v-flex>

    <v-flex xs12 md6>
         <v-form ref="form" lazy-validation>
            <v-text-field label="Name" required></v-text-field>

            <v-text-field label="E-mail" required></v-text-field>

            <v-select label="Item" required></v-select>

            <v-checkbox label="Do you agree?" required></v-checkbox>

            <v-btn color="success" class="mr-4"> Validate </v-btn>

            <v-btn color="error" class="mr-4"> Reset Form </v-btn>

            <v-btn color="warning"> Reset Validation </v-btn>
          </v-form>
    </v-flex>

</v-layout>

</v-container>
    </div>
</template>

<script>
export default {
    
}
</script>
 
 <style scoped>
 
 </style>