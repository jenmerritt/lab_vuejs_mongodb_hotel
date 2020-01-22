<template lang="html">
  <form v-on:submit="addGuest">
    <h1>Add Guest</h1>
    <label for="name">Name:</label>
    <input type="text" id="name" v-model="name" />
    <label for="email">Email:</label>
    <input type="text" id="email" v-model="email" />
    <label for="status">Status:</label>
    <select v-model="status">
      <option v-bind:value="true">Checked-In</option>
      <option v-bind:value="false">Awaiting Check-In</option>
    </select>
    <input type="submit" value="Add Guest"/>
  </form>
</template>

<script>
import {eventBus} from '../main';
import GuestsService from '../../services/GuestsService';
export default {
  name: "guest-form",
  data(){
    return{
      name: "",
      email: "",
      status: null
    }
  },
  methods: {

    addGuest(event){
      event.preventDefault();

      const payload = {
        name: this.name,
        email: this.email,
        status: this.status
      };

      GuestsService.postGuest(payload)
        .then( guest => {
        eventBus.$emit('guest-added', guest)
      })

      this.name = "";
      this.email = "";
      this.status = null;
    }

  }
}
</script>

<style lang="css" scoped>
</style>
