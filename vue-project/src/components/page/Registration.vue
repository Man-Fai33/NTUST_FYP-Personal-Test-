<script >
// import {  } from 'vuex';
import { createUser } from '../../helper/UserHelper'
export default {

    computed: {
        
    },
    data() {
 
        return {
    
            username: '',
            email: '',
            password: '',
            emailRules: [
                value => {
                    if (value) return true
                    return 'E-mail is requred.'
                },
                value => {
                    if (/.+@.+\..+/.test(value)) return true
                    return 'E-mail must be valid.'
                },

            ],
            passwordRules: [
                value => {
                    if (value) return true
                    return 'Password is requred.'
                },
                value => {
                    if (value?.length <= 12) return true
                    return 'Password must be less than 12 characters.'
                },
            ],
        };
    },
    methods: {
        register(event) {
            event.preventDefault();
            if (!this.username && !this.email && !this.password) {
                const user = {
                    username: this.username,
                    email: this.email,
                    password: this.password
                }
                //api example
                // createUser(user).then(req => {
                //     console.log(req.data)
                // }).catch(error => {
                //     console.error(error);
                // })



                alert(this.username + "\n" + this.email + "\n" + this.password)
            } else {
                alert(sdkjfksj)
            }
        }
    }
};
</script>

<template>
    <div class="registerForm">
        <v-container>

            <v-form v-model="valid" @submit="register">
                <v-row>
                    <v-col cols="4">

                    </v-col>
                    <v-col cols="4">
                        <p class="text-h1"
                            style="justify-content: center; justify-self: center;width: 100%; text-align: center; padding-bottom: 2rem;">
                            註冊</p>
                        <v-col cols="12">
                            <v-text-field v-model="email" :rules="emailRules" label="E-mail" required></v-text-field>
                        </v-col>
                        <v-col cols="12">
                            <v-text-field v-model="username" label="Username" :counter="20" required></v-text-field>
                        </v-col>

                        <v-col cols="12">
                            <v-text-field v-model="password" :rules="passwordRules" :counter="12" label="Password"
                                required></v-text-field>
                        </v-col>

                        <v-col cols="12">
                            <v-btn :loading="loading" type="submit" block class="mt-2" text="註冊"></v-btn>
                        </v-col>
                    </v-col>
                    <v-col cols="4"></v-col>
                </v-row>

            </v-form>
        </v-container>
    </div>
</template>
<style lang="sass" scoped>
.registerForm
    width: 100%
    margin-top: 10rem
</style>