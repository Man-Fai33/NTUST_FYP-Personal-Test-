<script>
import SearchBar from '../bar/SearchBar.vue';
export default {
    data() {
        return {
            rep: null
        };
    },
    created() {
        this.loadStorage()
    }, methods: {
        loadStorage() {
            const data = localStorage.getItem('search_item')
            if (data !== null) {
                this.rep = JSON.parse(data)
            }
        }
    }
    , components: {
        SearchBar
    },

}
</script>
<template>
    <div class="base-layout-setting">
        <SearchBar></SearchBar>



        <div class="main-context-layout">
            {{rep.rep}}
        </div>
    </div>
</template>
<style lang="scss">
@import '../css/layout.scss';
</style>

