<template lang="">
  <div>
    <p>This is results: {{ tenResult }}</p>
    <p>This is name result: {{ nameResult }}</p>
  </div>
</template>
<script>
import { mapGetters } from "vuex";
export default {
  data() {
    return {};
  },
  computed: {
    ...mapGetters(["tenResult", "nameResult"])
  }
};
</script>
<style lang=""></style>
