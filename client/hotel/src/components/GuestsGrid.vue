<template lang="html">
  <div>
    <guest v-for="guest in guests" v-bind:guest="guest" />
  </div>
</template>

<script>
import Guest from './Guest.vue';
import GuestsService from '../../services/GuestsService';

export default {
  name: "guests-grid",
  data () {
    return {
    guests: []
   }
  },
  components: {
    'guest': Guest
  },
  mounted(){
    this.fetchData();
  },
  methods: {
    fetchData(){
      GuestsService.getGuests()
        .then(guests => this.guests = guests);
    }
  }
}
</script>

<style lang="css" scoped>
</style>
