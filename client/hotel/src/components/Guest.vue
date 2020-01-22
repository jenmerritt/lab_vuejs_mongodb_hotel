<template lang="html">
  <div>
    <h2>{{ guest.name }}</h2>
    <h3 v-if="guest.status">Checked-In</h3>
    <h3 v-if="!guest.status">Awaiting Check-In</h3>
    <p>{{ guest.email }}</p>
    <button v-on:click="deleteThisGuest">Delete</button>
    <button v-if="!guest.status" v-on:click="updateThisGuest">Check-In</button>
  </div>
</template>

<script>
import {eventBus} from '../main.js';
import GuestsService from '../../services/GuestsService';

export default {
  name: "guest",
  props: ['guest'],
  methods:{

    deleteThisGuest(){
      GuestsService.deleteGuest(this.guest._id)
      .then(() => eventBus.$emit('guest-deleted', this.guest._id))
    },

    updateThisGuest(){

      const payload = {
        name: this.guest.name,
        email: this.guest.email,
        status: true
      }

    //   GuestsService.updateGuest(this.guest._id, payload)
    //    .then( () => eventBus.$emit('guest-updated', this.guest._id));
    // }

    GuestsService.updateGuest(this.guest._id, payload)
     .then( () => eventBus.$emit('guest-updated', this.guest._id));
  }

  }
}
</script>

<style lang="css" scoped>
</style>
