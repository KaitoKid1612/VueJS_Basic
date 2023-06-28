<template>
  <div class="row">
    <app-item v-for="(item, index) in items" :key="index" @click.native="removeItem(index)">{{ item }}</app-item>
  </div>
</template>

<script>
import Items from './Items.vue'
export default {
  props: ['items'],
  components: {
    appItem: Items
  },
  methods: {
    removeItem: function(index) {
      this.$emit('itemRemoved', index)
    }
  }
}
</script>

<style scoped>
  .row {
    margin: 10px 0px;
    display: flex;
    justify-content: center;
  }
</style>
