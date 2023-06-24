<script >
import { store } from './components/store/store.js'
import LeftBar from './components/bar/LeftBar.vue';
export default {

  computed: {

  },
  data: () => {
    return {

      store,
    };
  },
  components: { LeftBar }
}
</script>
<template>
  <head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <link href="/dist/output.css" rel="stylesheet">
  </head>

  <div v-if="store.user.signin">

    <LeftBar></LeftBar>
  </div>

  <div class="mainDivShow">
    <router-view></router-view>
  </div>
</template>
<style lang="sass" scoped>
.mainDivShow
  padding-left: 56px
</style>


