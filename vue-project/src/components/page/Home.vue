<script >
import { mapGetters } from 'vuex';
import SearchBar from '../bar/SearchBar.vue';
export default {
  computed: {
    ...mapGetters['getUser'],
    user() {
      return this.getUser
    }
  },
  data: () => ({


  }),
  methods: {

  },
  components: {
    SearchBar
  },

}

</script>
<template>
  <div class="base-layout-setting">
    <SearchBar></SearchBar>


    <div class="main-context-layout">
      sdfs
    </div>
  </div>
</template>
<style lang="scss">
@import '../css/layout.scss';

.main-context-layout {
  padding-top: 1rem;
}
</style>