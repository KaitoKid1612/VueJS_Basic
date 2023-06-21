<template>
  <div class="row">
    <h1 class="text-center">Welcome to my app</h1>
    <p class="text-center">I'm {{ name }}. I am a Software Engineer</p>
    <app-user-detail></app-user-detail>
    <app-user-edit></app-user-edit>

    <div class="change-button">
      <button @click="changeName">Change my name</button>
    </div>

  </div>
</template>

<script>
import UserDetail from './UserDetail.vue'
import UserEdit from './UserEdit.vue'

export default {
  data: function() {
    return {
      name: 'Viet'
    }
  },
  components: {
    appUserDetail: UserDetail,
    appUserEdit: UserEdit,
  },
  methods: {
    changeName: function() {
      this.name = 'hihi'
    }
  }
}
</script>

<style scoped>
  div {
    margin: auto;
    padding: 0px;
  }

  .change-button {
    display: flex;
    margin: 10px;
    justify-content: center;
  }
</style>
