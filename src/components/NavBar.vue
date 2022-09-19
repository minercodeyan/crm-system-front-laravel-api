<template>
  <div>
    <v-toolbar
        prominent
        src="https://cdn.vuetifyjs.com/images/backgrounds/vbanner.jpg"
    >
      <v-app-bar-nav-icon></v-app-bar-nav-icon>

      <v-toolbar-title>Vuetify</v-toolbar-title>
      <v-spacer>{{authorizedUsername}}</v-spacer>
      <v-btn icon>
        <v-icon>mdi-export</v-icon>
      </v-btn>
    </v-toolbar>
  </div>
</template>

<script>
import { mapGetters } from "vuex"

export default {

  name: "NavBar",
  computed: mapGetters(['authorizedUsername']),

}
</script>

<style scoped>

</style>