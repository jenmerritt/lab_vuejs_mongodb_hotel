<template lang="html">
  <div>
    <guest v-for="guest in guests" v-bind:guest="guest" />
  </div>
</template>

<script>
import Guest from './Guest.vue';
import GuestsService from '../../services/GuestsService';
import { eventBus } from '../main';

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

    eventBus.$on('guest-added', guest => this.guests.push(guest));

    eventBus.$on('guest-deleted', (id) => {
      let index = this.guests.findIndex(guest => guest._id === id)
      this.guests.splice(index, 1)
    })

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
