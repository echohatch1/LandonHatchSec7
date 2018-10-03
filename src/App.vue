<template>
  <v-container>
    <v-layout column fill-height>

      <v-flex gutter-3>
    <top-header>Header</top-header>
    <hr>
      </v-flex>

    <v-layout align-start justify-start row fill-height>
      <v-flex>
      <servers></servers>
      </v-flex>
      <v-flex>
      <server-details></server-details>
      </v-flex>
    </v-layout>

    <v-flex gutter-3>
      <hr>
    <bottom-footer></bottom-footer>
    </v-flex>
    </v-layout>
  </v-container>
</template>

<script>
import Header from './components/Header.vue'
import Footer from './components/Footer.vue'
import ServerDetails from './components/ServerDetails.vue'
import Servers from './components/Servers.vue'

export default {
  name: 'app',
  components: {
    'top-header': Header,
    'bottom-footer': Footer,
    ServerDetails,
    Servers
  }
}
</script>

<style>
#app {
  font-family: 'Avenir', Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: left;
  color: #2c3e50;
  margin-top: 20px;
}
.gutter-3 {
    margin: 30px 0 30px 0;
}
</style>
