<template>
  <div class="d-flex justify-content-center align-items-center">
    <form action="">
      <input type="text" placeholder="Todo item" v-model="item">
      <input class="btn btn-primary" type="button" value="Submit" @click.prevent="addItem">
    </form>
  </div>
</template>

<script>
export default {
  data: function () {
    return {
      item: ''
    }
  },
  methods: {
    addItem: function () {
      this.$emit('itemAdded', this.item);
      this.item = ''
    }
  },
}
</script>

<style scoped></style>
