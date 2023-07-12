<template lang="">
  <div class="container">
    <h1>Vuex Section</h1>
    <app-result></app-result>
    <app-other></app-other>
    <hr />
    <app-counter></app-counter>
  </div>
</template>
<script>
import AppCounter from "./components/Counter.vue";
import AppResult from "./components/Result.vue";
import AppOther from "./components/Other.vue";

export default {
  data() {
    return {};
  },
  components: {
    AppCounter,
    AppResult,
    AppOther
  }
};
</script>
<style lang=""></style>
