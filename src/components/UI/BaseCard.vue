<template>
  <v-card elevation="2" class="card darken-2 pink">
      <div>
        <slot name="cardHeader"></slot>
      </div>
      <div class="cardbody">
        <slot name="cardBody"></slot>
      </div>
  </v-card>
</template>

<style scoped>
.cardbody {
    margin-top: 2vh;
}
.card {
  padding: 4vh;
  margin-top: 3vh;
  margin-left: 18vw;
  margin-right: 15vw;
}
</style>
