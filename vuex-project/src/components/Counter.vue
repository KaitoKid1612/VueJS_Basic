<template lang="">
  <div>
    <button class="btn btn-success" @click.prevent="increment">
      Increment
    </button>
    <button class="btn btn-success" @click.prevent="decrement">
      Decrement
    </button>
  </div>
</template>
<script>
export default {
  data() {
    return {};
  },
  methods: {
    increment() {
      this.$store.commit("optionIncrement", 20);
    },
    decrement() {
      this.$store.state.result--;
    }
  }
};
</script>
<style lang=""></style>
