<script >
import { mapGetters, mapMutations } from 'vuex';

export default {
    computed: {
        ...mapGetters(['getUser']),
        ...mapMutations(['clearUser']),
        user() {
            return this.getUser
        }
    },
    data: () => {

    },
    methods: {
        SignOut() {
            this.clearUser
            this.$router.push('/')
        }

    }
}
</script>
<template>
    <v-card>
        <v-layout>
            <v-navigation-drawer expand-on-hover rail>

                <v-list>
                    <router-link to="/profile">
                        <v-list-item prepend-avatar="https://randomuser.me/api/portraits/women/85.jpg" :title="user.email"
                            :subtitle="user.email"></v-list-item>
                    </router-link>
                </v-list>

                <v-divider></v-divider>

                <v-list density="compact" nav>
                    <router-link to="/home"><v-list-item prepend-icon="mdi-folder" title="主頁"
                            value="myfiles" /></router-link>
                    <router-link to="/home"><v-list-item prepend-icon="mdi-account-multiple" title="第二頁"
                            value="shared" /></router-link>
                    <router-link to="/home"><v-list-item prepend-icon="mdi-star" title="第三頁"
                            value="starred" /></router-link>
                </v-list>
                <template v-slot:append>
                    <div class="pa-2">
                        <v-btn block @click="SignOut">
                            Logout
                        </v-btn>
                    </div>
                </template>
            </v-navigation-drawer>
            <v-main>
                <!-- adfasasdfhjk -->
            </v-main>
        </v-layout>
    </v-card>
</template>