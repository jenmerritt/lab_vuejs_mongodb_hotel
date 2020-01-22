<template lang="html">
  <div>
    <h2>{{ guest.name }}</h2>
    <h3>{{ guest.status }}</h3>
    <p>{{ guest.email }}</p>
  </div>
</template>

<script>
export default {
  name: "guest",
  props: ['guest']
}
</script>

<style lang="css" scoped>
</style>
