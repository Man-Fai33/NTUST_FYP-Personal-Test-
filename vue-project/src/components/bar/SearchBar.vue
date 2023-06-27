<template>
    <!-- <v-card class="mx-auto"  > -->

        <v-card-text >
            <v-text-field :loading="loading" v-model="searchValue" density="compact" variant="solo" label="Search templates"
                append-inner-icon="mdi-magnify" single-line hide-details @click:append-inner="onClick"></v-text-field>
        </v-card-text>
    <!-- </v-card> -->
</template>
<script>
export default {
    data: () => ({
        loaded: false,
        loading: false,
        searchValue: ""
    }),
    methods: {
        onClick() {
            this.loading = true
            setTimeout(() => {
                this.loading = false
                this.loaded = true
                this.searchValue = ""
            }, 2000)
        },
    }
}
</script>
