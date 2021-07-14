<template>
  <base-card>
    <template v-slot:cardHeader>
      <div color="white">
        <span class="display-1 spanName">{{ stockData.name }}</span>
        <span class="spanPrice">(Price: {{ stockData.price }} | Quantity: {{ stockData.quantity }})</span>
         <v-icon class="ml-9 green--text" large v-if="stockData.change == 'higher'">mdi-arrow-top-right-thick</v-icon>
        <v-icon class="ml-9 bor red--text" large v-else-if="stockData.change == 'lower'">mdi-arrow-bottom-right-thick</v-icon>
        <v-icon class="ml-9 bor grey--text" large v-else>mdi-arrow-right-thick</v-icon>
      </div>
    </template>
    <template v-slot:cardBody>
      <v-row>
        <form @submit.prevent="sellStock()">
          <v-text-field
          class="inputQuantity"
            label="Quantity"
            type="number"
            :max="stockData.quantity"
            min="1"
            v-model="inputQuantity"
          ></v-text-field>
          <v-spacer></v-spacer>
          <v-btn plain outlined type="submit">Sell</v-btn>
        </form>
      </v-row>
    </template>
  </base-card>
</template>

<script>
import baseCard from "../UI/BaseCard";
export default {
  data() {
    return {
      inputQuantity: null,
    };
  },
  components: { baseCard },
  props: ["stockData"],
  methods: {
    sellStock() {
      this.$store.dispatch("sellStock", {
        id: this.stockData.id,
        quantity: this.inputQuantity,
        price: this.stockData.price,
      });
    },
  },
};
</script>

<style scoped>
.spanName {
  margin-right: 20px;
}
.inputQuantity{
  width: 10vw;
}
</style>
