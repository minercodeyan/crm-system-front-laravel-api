<template>
<v-container>
  <div class="center">
    <div v-if="errors.message" class="error">{{errors.message}}</div>
    <login-form @loginU="onLoginUser" v-if="$route.fullPath==='/login'"></login-form>
    <registration-form @regU="onRegUser" v-if="$route.fullPath==='/registration'"></registration-form>
  </div>
</v-container>
</template>

<script>
import LoginForm from "@/components/LoginForm";
import { mapActions,mapGetters} from "vuex"
import RegistrationForm from "@/components/RegistrationForm";
export default {
  name: "AuthPage",
  components: {RegistrationForm, LoginForm},
  computed: mapGetters(["errors"]),
  methods: {
    ...mapActions(["loginUser"]),
    onLoginUser(data){
      this.loginUser(data)
    },
    onRegUser(data){
      this.loginUser(data)
    }
  }
}
</script>

<style scoped>
.center{
  padding: 100px;
  display: flex;
  justify-content: center;
  align-content: center;
}

.error{
  text-align: center;
  width: 400px;
  position: absolute;
  background: red;
  color: white;
  padding: 4px;
}
</style>