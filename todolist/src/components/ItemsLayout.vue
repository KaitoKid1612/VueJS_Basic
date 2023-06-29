<template>
  <div class="row">
    <div class="d-flex justify-content-center align-items-center mt-3">
      <img src="../assets/logo.png" alt="">
      <h1 class="">Vue.Js Todo List</h1>
    </div>
    <app-new-item @itemAdded="addItem"></app-new-item>
    <app-items v-for="(item, index) in items" @remove="removeItem(index)" :key="index" :index="index">{{
      item }}</app-items>
  </div>
</template>

<script>
import NewItem from './NewItem.vue';
import Items from './Items.vue'

export default {
  props: ['items'],
  data: function () {
    return {

    }
  },
  components: {
    appItems: Items,
    appNewItem: NewItem
  },
  methods: {
    addItem: function (item) {
      this.items.push(item);
    },
    removeItem: function (index) {
      this.items.splice(index, 1);
    }
  }
}
</script>

<style scoped>
.row div {
  flex-direction: column;
}

.row div img {
  width: fit-content;
}
</style>
