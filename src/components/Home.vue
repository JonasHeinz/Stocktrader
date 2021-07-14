<template>
  <v-card elevation="4" class="card" color="pink darken-2">
    <h1>Trade or View you Portfolio</h1>
    <p>You may Save & Load you Data</p>
    <p>Click on 'End Day' to begin a new Day!</p>
    <h3>Your Funds: {{getFunds}}<span></span></h3>
  </v-card>
</template>

<script>
export default {
  computed: {
    getFunds() {
      return this.$store.getters.getFunds;
    },
  },
};
</script>

<style scoped>
.card {
  margin: 10vh;
  padding: 5vh;
}
</style>
