<template>
  <div>
    <ul class="nav nav-pills nav-fill mt-2 mb-2">
      <li v-for="index in numbers" :key="index" class="nav-item">
        <a class="nav-link" :class="{'active': index === 1}" href="#">{{ index }}</a>
      </li>
    </ul>
  </div>
</template>

<script>
export default {
  data: function() {
    return {
      numbers: [1,2,3,4,5]
    }
  }
}
</script>

<style scoped>
  div {
    border: 1px solid #c65de6;
  }
</style>
