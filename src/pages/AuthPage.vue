<template>
<auth-form @loginU="onLoginUser"></auth-form>
</template>

<script>
import AuthForm from "@/components/AuthForm";
import { mapActions} from "vuex"
export default {
  name: "AuthPage",
  components: {AuthForm},
  methods: {
    ...mapActions(["loginUser"]),
    onLoginUser(data){
      this.loginUser(data)
    }
  }
}
</script>

<style scoped>

</style>