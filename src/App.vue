<template>
<div>
  <Header v-if="loggedIn"></Header>
  <router-view />
</div>
</template>

<script>
import Header from "./components/Header"
export default {
  name: "App",
  data: () => ({
    //
  }),
  components: {
    Header
  },
  computed: {
    loggedIn() {
      return this.$store.getters.idToken;
    }
  }  
};
</script>
