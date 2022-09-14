<template>
    <nav-bar></nav-bar>
    <v-layout>
      <v-navigation-drawer color="grey-darken-2" permanent></v-navigation-drawer>
      <v-main>
        <router-view/>
      </v-main>
    </v-layout>
</template>

<script>
import NavBar from "@/components/NavBar";
export default {
  name: "MainLayout",
  components: {NavBar}
}
</script>

<style scoped>

</style>