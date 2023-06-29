<template>
  <div class="container">
    <app-header></app-header>
    <app-items-layout :items="items" @itemRemoved="removeItem"></app-items-layout>
    <app-footer></app-footer>
  </div>
</template>

<script>
import Header from './components/Header.vue';
import ItemsLayout from './components/ItemsLayout.vue';
import Footer from './components/Footer.vue'

export default {
  props: [''],
  data: function () {
    return {
      items: [],
      maxItems: 10
    }
  },
  methods: {
    removeItem(index) {
      this.items.splice(index, 1)
    }
  },
  components: {
    appHeader: Header,
    appItemsLayout: ItemsLayout,
    appFooter: Footer
  }
}
</script>

<style scoped></style>
