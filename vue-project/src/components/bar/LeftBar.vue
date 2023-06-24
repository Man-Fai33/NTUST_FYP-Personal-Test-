<script >
import { store } from '../store/store';
export default {
    data: () => {
        return {
            store,
        }
    },
    methods: {
        SignOut() {
            store.user = {}
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
                    <v-list-item prepend-avatar="https://randomuser.me/api/portraits/women/85.jpg" :title="store.user.email"
                        :subtitle="store.user.email"></v-list-item>
                </v-list>

                <v-divider></v-divider>

                <v-list density="compact" nav>
                    <router-link to="/"><v-list-item prepend-icon="mdi-folder" title="My Files"
                            value="myfiles" /></router-link>
                    <router-link to="/"><v-list-item prepend-icon="mdi-account-multiple" title="Shared with me"
                            value="shared" /></router-link>
                    <router-link to="/"><v-list-item prepend-icon="mdi-star" title="Starred"
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