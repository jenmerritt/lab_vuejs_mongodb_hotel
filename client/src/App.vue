<template>
  <div id="app">
    <guest-form />
    <guests-grid />
  </div>
</template>

<script>
import GuestForm from './components/GuestForm.vue';
import GuestsGrid from './components/GuestsGrid.vue';

export default {
  name: 'app',
  components: {
    'guest-form': GuestForm,
    'guests-grid': GuestsGrid
  }
}
</script>

<style>
#app {
  font-family: 'Avenir', Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  margin-top: 60px;
}
</style>
