<script>
import { mapGetters, mapMutations } from 'vuex';
import { searchItem } from '../../helper/SearchHelper'
export default {
    computed: {
        ...mapGetters(['getUser']),
        user() {
            return this.getUser
        }
    },
    data: () => ({
        loaded: false,
        loading: false,
        searchValue: "",
        date: new Date().toJSON().slice(0, 10).replace(/-/g, '/')
    }),
    methods: {
        onClick() {
            this.loading = true

            var searchForm = ({
                searchUser: this.user.name,
                searchItem: this.searchValue,
                searchTime: this.date
            })

            searchItem(searchForm).then((res) => {

                if (res.data.state == 'sucess') {
                    localStorage.setItem('search_item', JSON.stringify(res.data))
                }
            })
            setTimeout(() => {
                this.loading = false
                this.loaded = true
                this.searchValue = ""
                this.$router.push('/search-result')
            }, 2000)

        },
    }
}
</script>
<template>
    <!-- <v-card class="mx-auto"  > -->
    <v-card-text>
        <v-text-field :loading="loading" v-model="searchValue" density="compact" variant="solo" label="Search templates"
            append-inner-icon="mdi-magnify" single-line hide-details @click:append-inner="onClick"> </v-text-field>
    </v-card-text>
    <!-- </v-card> -->
</template>

