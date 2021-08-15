<template>
  <div class="login">
    ログインしてください
      <label for="">email:<input type="text" v-model="email"></label>
      <label for="">PASS:<input type="text" v-model="password"></label>
      <button @click="login">ログインする</button>
  </div>
</template>

<script>
import axios from "axios"; 
export default {
  name: "Login",
  data() {
    return {
      email:"",
      password:""
    }
  },
  components: {},
  methods: {
    login() {
      axios.post(`https://identitytoolkit.googleapis.com/v1/accounts:signInWithPassword?key=${process.env.VUE_APP_FIREBASE_API_KEY}`,
      {
        email:this.email,
        password:this.password,
        returnSecureToken: true
      })
      .then((res)=>{
        console.log(res)
      })
    }
  }
};
</script>
<style lang="scss">
  label {
    display: block;
  }
</style>
