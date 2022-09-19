<template>
  form
  <form @submit.prevent="signUpUser" class="myForm" >
    <input type="text" v-model="user.email">
    <input type="text" v-model="user.email">
    <input type="password" v-model="user.password">
    <v-btn color="secondary">Войти</v-btn><v-btn color="secondary">Регистрация</v-btn>
  </form>
</template>
<script>
export default {
  name: 'RegistrationForm',
  emits: ['reg-user'],
  data(){
    return {
      user: {
        name: '',
        email: '',
        password: ''
      },
    }
  },
  methods:{
    signUpUser(){
      this.$emit('reg-user',this.user)
    }
  }
}
</script>