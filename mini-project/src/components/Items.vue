<template>
  <div class="col-sm-6 col-md-4 col-lg-3">
    <div class="card mt-3">
      <div class="card-body">
        <slot></slot>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  methods: {
  }
}
</script>

<style scoped>
  .card-body {
    font-family: 'Times New Roman', Times, serif;
    font-size: 24px;
    color: #585858;
  }

  .item {
    cursor: pointer;
  }

  .item:hover {
    background-color: #fff;
  }
</style>
