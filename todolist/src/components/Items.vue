<template>
  <div class="d-flex justify-content-center align-items-center mt-3">
    <div class="card" style="width: 100%;">
      <div class="card-body">
        <!-- <a href="#" class="btn btn-primary">Delete</a> -->
        <slot></slot>
        <button class="btn btn-primary" @click="removeItem">Remove Item</button>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  data: function () {
    return {

    }
  },
  methods: {
    removeItem(index) {
      this.$emit('remove', index)
    }
  }
}
</script>

<style scoped>
.card-body {
  display: flex;
  justify-content: space-around;
}
</style>
