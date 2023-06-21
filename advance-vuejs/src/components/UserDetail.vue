<template>
  <div class="col">
    <h1>Information User Details</h1>
    <p>List Details</p>
    <p>My name: {{ name }}</p>
  </div>
</template>

<script>
export default {
  props: ['name'],
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
