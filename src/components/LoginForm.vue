<template>
  <div class="form__inner">
    <h2 class="text__center">Login</h2>
  <form @submit.prevent="signInUser" class="myForm">
    <vs-input place-h="email" type="text" v-model="user.email"/>
    <vs-input place-h="password" type="password" v-model="user.password"/>
    <v-btn class="btn__margin" type="submit" color="secondary">Войти</v-btn>
    <div>not reg? <router-link to="/register">create account?</router-link></div>
  </form>
  </div>
</template>
<script>
import VsInput from "@/components/UI/VsInput";
export default {
  name: 'LoginForm',
  components: {VsInput},
  emits: ['loginU'],
  data(){
    return {
      user: {
        email: '',
        password: ''
      },
    }
  },
  methods:{
    signInUser(){
      this.$emit('loginU',this.user)
    }
  }
}
</script>
<style>
.form__inner{
  padding: 20px;
  background: white;
}
.form__inner h2{
  color: #03dac6;
}


.btn__margin{
  margin: 30px 160px;
}
</style>