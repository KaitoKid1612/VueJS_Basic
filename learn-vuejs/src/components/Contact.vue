<template>
  <div>
    <h1>This is Contact page</h1>
    <button @click="counter++">Increase Value <span>{{ counter }}</span></button>
  </div>
</template>

<script>
export default {
  data: function() {
    return {
      counter: 0
    }
  },
  destroyed: function() {
    console.log('destroyed')
  },
  deactivated: function() {
    console.log('deactivated')
  },
  activated: function() {
    console.log('activated')
  }
}
</script>

<style scoped>

</style>
