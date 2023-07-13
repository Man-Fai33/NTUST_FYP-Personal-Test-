<script >
import { mapGetters } from 'vuex';
import LeftBar from './components/bar/LeftBar.vue';
export default {
  computed: {
    ...mapGetters(['getUser']),
    user() {
      return this.getUser;
    },
  },
  data() {

    return {

    };
  },
  methods: {
    isSignin() {
      if (user.signin != undefined && user.signin == true) {
        alert(user.signin)
        return user.signin
      } else {
        return false
      }

    }
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

  <div v-if="user.signin">
    <LeftBar></LeftBar>
  </div>
  <div class="mainDivShow">
    <router-view></router-view>
  </div>
  <!-- <v-footer></v-footer> -->
</template>
<style lang="sass" scoped>
.mainDivShow
  padding-left: 56px
</style>


