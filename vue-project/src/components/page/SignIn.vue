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
                            <v-text-field v-model="email" :rules="emailRules" prepend-icon="mdi-email-outline"
                                label="E-mail" required></v-text-field>
                        </v-col>

                        <v-col cols="12">
                            <v-text-field v-model="password" :rules="passwordRules" prepend-icon="mdi-lock-outline"
                                :counter="12" label="password" required></v-text-field>
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
import { mapState, mapActions, mapGetters } from 'vuex';
import { getUsers } from '../../helper/UserHelper';
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
        ...mapGetters(['getUser']),
        async submit(event) {
            this.loading = true
            const result = await event
            this.loading = false

        },

        Login(event) {
            this.loading = true
            event.preventDefault();

            if (this.email !== '' && this.password !== '') {
                const user = {
                    email: this.email,
                    password: this.password,
                };
                getUsers(user).then((res) => {
                    var user = res.data.user

                    this.updateUser(user);

                    this.loading = false

                    if (user.signin === true) {
                        this.$router.push('/home')
                    }
                }).catch((error) => {
                    console.log(error)
                })



            } else {
                // 登入失敗，顯示錯誤信息
                this.loading = false
                alert(' username or password is empty');
                // alert(this.email + '\n' + this.password)
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