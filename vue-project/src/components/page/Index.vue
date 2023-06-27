<template>
    <div class="center-container">
        <!-- <router-link to="/signin"> -->
        <v-row>

            <v-col cols="12"  class="text-center">
                <router-link to="/signin"> 
                <v-btn>
                    SignIn
                </v-btn>
                </router-link>
            </v-col>
            <v-col cols="12" class="text-center">
                <router-link to="/registration"> 
                <v-btn>
                    Registration
                </v-btn>
                </router-link>
            </v-col>

        </v-row>

        <!-- </router-link> -->
    </div>
    <div class="full-page-image">

        <v-img :aspect-ratio="16 / 9" cover src="https://cdn.vuetifyjs.com/images/parallax/material.jpg" />

    </div>
    
</template>
<script setup>

</script>



<style>
.full-page-image {
    position: fixed;
    top: 0;
    left: 0;
    width: 100%;
    height: 100%;
    z-index: -1;
}

.center-container {
    width: 100%;
    display: flex;
    justify-content: center;
    align-items: center;
    height: 100vh;
    z-index: 1;
}
</style>