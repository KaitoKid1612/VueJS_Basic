<template lang="">
  <div>
    <page-header></page-header>
    <router-view></router-view>
  </div>
</template>
<script>
import pageHeader from "./assets/components/layouts/Header.vue";

export default {
  data() {
    return {};
  },
  components: {
    pageHeader
  }
};
</script>
<style lang=""></style>
