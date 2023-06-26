<template>
  <div id="app" class="container">
    <app-user></app-user>
  </div>
</template>

<script>
import User from './components/User.vue'

export default {
  components: {
    'app-user': User
  }
}
</script>

<style scoped>
  div {
    padding: 20px 0px 0px;
    background-color: pink;
    border: 1px solid black;
  }
</style>
