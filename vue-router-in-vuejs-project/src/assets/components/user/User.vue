<template lang="">
  <div>
    <h1>User</h1>
    <hr />
    <button class="btn btn-danger" @click.prevent="backHome">
      Back to home
    </button>
    <button class="btn btn-warning" @click.prevent="pageDetail">Detail</button>
    <button class="btn btn-success" @click.prevent="pageDetailAdmin">
      Detail Admin
    </button>
    <router-view></router-view>
    <user-details></user-details>
  </div>
</template>
<script>
import UserDetails from "./UserDetails.vue";
export default {
  data() {
    return {};
  },
  methods: {
    backHome() {
      this.$router.push("/");
    },
    pageDetail() {
      this.$router.push("/user/1");
    },
    pageDetailAdmin() {
      this.$router.push("/user/10");
    }
  },
  computed: {},
  components: {
    // UserDetails
  }
};
</script>
<style lang=""></style>
