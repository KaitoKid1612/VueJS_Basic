<template>
  <div class="col">
    <h1>Information User Details</h1>
    <p>List Details</p>
    <p>My name: {{ reverseName() }}</p>
    <p>My Age: {{ userAge }}</p>
    <button @click="resetName">Reset Name</button>
    <button @click="resetNameFn()">Reset Case Child</button>
  </div>
</template>

<script>
import { eventBus } from '../main.js';
export default {
  props: {
    customName: {
      type: Object,
      default: 'Viet'
    },
    resetNameFn: function() {

    },
    userAge: {
      type: Number
     }
  },
  methods: {
    reverseName: function() {
      return this.customName.split('').reverse().join('');
    },
    resetName: function() {
      this.customName = 'Viet';
      this.$emit('nameWasReset', this.customName);
    }
  },
  created: function() {
      eventBus.$on('ageWasEdit', (age) => {
        this.userAge = age;
      })
    }
}
</script>

<style scoped>
  div {
    height: 200px;
    background-color: rgb(161, 106, 33);
    padding: 20px 50px 0px;
    margin: auto;
  }
</style>
