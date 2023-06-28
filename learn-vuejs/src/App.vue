<template>
  <div id="app">
    <div class="container">
      <div class="row">
        <div class="col-sm-12">
          <button class="btn btn-outline-danger" @click="selectedComponent = 'appCard'">Card</button>
          <button class="btn btn-outline-danger" @click="selectedComponent = 'appAbout'">About</button>
          <button class="btn btn-outline-danger" @click="selectedComponent = 'appContact'">Contact</button>
        </div>
      </div>
      <div class="row">
        <div class="col-sm-12">
          <!-- <div><p>{{ selectedComponent }}</p></div> -->
          <app-card card-words="Cat">
            <h2 slot="title">{{ cardTitle }}</h2>
            <p>White cat is so noob!</p>
          </app-card>
          <keep-alive>
            <component :is="selectedComponent"></component>
          </keep-alive>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import Card from "./components/Card.vue";
import About from "./components/About.vue";
import Contact from "./components/Contact.vue";

export default {
  data: function() {
    return {
      cardTitle: 'White Cat',
      selectedComponent: 'appCard'
    }
  },
  components: {
    appCard: Card,
    appAbout: About,
    appContact: Contact,
  }
}
</script>

<style>
</style>
