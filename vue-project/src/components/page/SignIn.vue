<template>
    <div class="signinForm">



        <v-container>
            <v-form v-model="valid" @submit="Login">
                <v-row>
                    <v-col cols="4">

                    </v-col>
                    <v-col cols="4">
                        <p class="text-h1"
                            style="justify-content: center; justify-self: center;width: 100%; text-align: center; padding-bottom: 2rem;">
                            SignIn</p>
                        <v-col cols="12">
                            <v-text-field v-model="email" :rules="emailRules" label="E-mail" required></v-text-field>
                        </v-col>

                        <v-col cols="12">
                            <v-text-field v-model="password" :rules="passwordRules" :counter="12" label="password"
                                required></v-text-field>
                        </v-col>

                        <v-col cols="12">
                            <v-btn :loading="loading" type="submit" block class="mt-2" text="Submit"></v-btn>
                        </v-col>
                    </v-col>
                    <v-col cols="4"></v-col>
                </v-row>
            </v-form>
        </v-container>
    </div>
</template>
<script  >
import { mapState, mapActions } from 'vuex';

export default {
    computed: {
        ...mapState(['user']),
    },
    data: vm => ({
        loading: false,

        timeout: null,
        valid: false,
        password: '',
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
        email: '',
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

    }),

    methods: {
        ...mapActions(['updateUser']),
        async submit(event) {
            this.loading = true
            const result = await event
            this.loading = false
            // alert(JSON.stringify(result, null, 2))

        },

        Login(event) {
            this.loading = true
            event.preventDefault();
            if (this.email === '123@gmail.com' && this.password === '123') {
                // alert(this.email + '\n' + this.password)
                const user = {
                    email: this.email,
                    password: this.password,
                    signin: true
                };
                this.updateUser(user);
                this.loading = false
                this.$router.push('/home')
            } else {
                // 登入失敗，顯示錯誤信息
                this.loading = false
                // alert('Invalid username or password');
                alert(this.email + '\n' + this.password)
            }

        }
    }
}
</script>
<style lang="sass" scoped>
.signinForm
    width: 100%
    margin-top: 10rem
</style>