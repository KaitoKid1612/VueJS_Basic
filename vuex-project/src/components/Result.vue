<template lang="">
  <div>
    <p>This is results: {{ result }}</p>
  </div>
</template>
<script>
export default {
  data() {
    return {};
  },
  computed: {
    result() {
      // console.log(this.$store.state.result);
      return this.$store.getters.tenResult;
    }
  }
  // props: ["result"]
};
</script>
<style lang=""></style>
