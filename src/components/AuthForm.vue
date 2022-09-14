<template>
  form
  <form @submit.prevent="signInUser" class="myForm">
    <input type="text" v-model="user.email">
    <input type="password" v-model="user.password">
    <button class="btn mt-2" type="submit">Войти</button>
  </form>
</template>
<script>
export default {
  name: 'AuthForm',
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