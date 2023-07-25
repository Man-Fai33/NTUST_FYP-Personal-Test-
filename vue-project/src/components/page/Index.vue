<template>
    <v-row no-gutters justify="end">

        <v-col cols="4" class="text-right">


            <router-link to="/signin">
                <v-btn>
                    SignIn
                </v-btn>
            </router-link>


            <router-link to="/registration">
                <v-btn>
                    Registration
                </v-btn>
            </router-link>


        </v-col>
    </v-row>

    <div class="center-container">
        <!-- <router-link to="/signin"> -->
        <v-row>



            <v-col cols="12" class="text-center">
                <router-link to="/about">
                    <v-btn>
                        About Me
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



<style lang="sass" scoped>
.full-page-image  
    position: fixed
    top: 0
    left: 0
    width: 100%
    height: 100%
    z-index: -1


.center-container 
    width: 100%
    display: flex
    justify-content: center
    align-items: center
    height: 100vh
    z-index: 1


.tl_btn 
    width: 100%
    display: flex


</style>