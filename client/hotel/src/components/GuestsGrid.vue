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
    });

    // eventBus.$on('guest-updated', (id) =>{
    //   let index = this.guests.findIndex(guest => guest._id === id)
    //   // console.log(JSON.parse(JSON.stringify(this.guests[index])));
    //   let guestToUpdate = this.guests.find(guest => guest._id === id)
    //   this.guests.splice(index, 1, guestToUpdate)
    //   // the original array of guests minus the old guest plus the updated guest
    // })

    eventBus.$on('guest-updated', (id) =>{
      // find the guest's index by looping for the id matching to the updated guests' id
      // let index = this.guests.findIndex(guest => guest._id === id)
      // grab the updatedGuest object
      this.fetchData();
      // let updatedGuest = this.guests.find(guest => guest._id === id)
      // splice by the index value of the updated guest, removing 1, and replacing it with the updated guest.
      // this.guests.splice(index, 1, updatedGuest)

      // which returns the original array of guests minus the old guest plus the updated guest
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
