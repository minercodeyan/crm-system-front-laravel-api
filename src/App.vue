<template>
  <v-app>
    <component :is="layout">
      <router-view/>
    </component>
  </v-app>
</template>

<script>
import MainLayout from "@/layouts/MainLayout";
import AuthLayout from "@/layouts/AuthLayout";

export default {
  name: 'App',
  computed:{
    layout(){
      return (this.$route.meta.layout || 'main') + '-layout'
    }
  },
  components: {
    MainLayout,AuthLayout
  },

}
</script>


<style>
@import "assets/style.css";
</style>