<template>
  <div class="col">
    <h1>You may edit the User here</h1>
    <p>Edit me!</p>
    <p>My age: {{ userAge }}</p>
    <button @click="editAge()">Change Age</button>
  </div>
</template>

<script>
import { eventBus } from '../main.js';
export default {
  props: {
    userAge: {
      type: Number
    }
  },
  // data: function() {
  //   return {
  //     age: 23
  //   }
  // },
  methods: {
    editAge: function() {
      this.userAge = 30,
      // this.$emit('ageWasEdit', this.userAge)
      // eventBus.$emit('ageWasEdit', this.userAge)
      eventBus.changeAge(this.userAge)
    }
  }
}
</script>

<style scoped>
  div {
    height: 200px;
    background-color: rgb(28, 122, 28);
    padding: 20px 50px 0px;
    margin: auto;
  }
</style>
