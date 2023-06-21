<template>
  <div>
    <p>My address: {{ address }}</p>
    <hr>
    <button @click="changePhone">Show my phone</button>
  </div>
</template>

<script>
export default {
  data: function() {
    return {
      address: '123 Main St'
    }
  },
  methods: {
    changePhone: function() {
      this.address = '012345678'
    }
  }
}
</script>

<style>
</style>
