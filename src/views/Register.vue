<template>
  <div class="register">
    新規登録
      <label for="">メールアドレス:<input type="email" v-model="email"></label>
      <label for="">パスワード:<input type="text" v-model="password"></label>
      <button @click="reqisterd">登録する</button>
  </div>
</template>

<script>
import axios from "axios";
export default {
  name: "Register",
  data() {
    return {
      email:"",
      password:""
    }
  },
  components: {},
  methods: {
    reqisterd() {
      axios.post(`https://identitytoolkit.googleapis.com/v1/accounts:signUp?key=${process.env.VUE_APP_FIREBASE_API_KEY}`,
      {
        email:this.email,
        password:this.password,
        returnSecureToken:true
      })
      .then((res) => {
        console.log(res)
      })
      .catch((error)=> {
        if (error.response) {
          console.log(error.response.data);
        } else if (error.request) {
          console.log(error.request);
        } else {
          console.log("Error", error.message);
        }       
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
