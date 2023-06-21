<template>
  <div class="container">
    <app-header></app-header>
    <hr>
    <p>{{ test }}</p>
    <contact-component></contact-component>
    <div class="row">
      <server></server>
      <app-server-details></app-server-details>
    </div>
    <hr>
    <app-footer></app-footer>
  </div>
</template>

<script>
import Header from './components/Header.vue'
import Footer from './components/Footer.vue'
import Server from './components/Server.vue'
import ServerDetails from './components/ServerDetails.vue'

export default {
  components: {
    appHeader: Header, //When compiled app-header
    Server, //When compiled server
    'app-server-details': ServerDetails,
    'app-footer': Footer
  },
  data: function() {
    return {
      test: 'Xin chào'
    }
  }
}
</script>

<style>

</style>
