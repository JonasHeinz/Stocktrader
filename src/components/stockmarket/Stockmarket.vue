<template>
  <ul class="stockList">
    <stockmarket-stock :key="stock.name" v-for="stock in getStockmarketData" :stockData="stock"></stockmarket-stock>
  </ul>
</template>

<script>
import Stock from './stock'
export default {
  components: {
    stockmarketStock: Stock,  
  },
  computed: {
    getStockmarketData() {
        return this.$store.getters.getStockmarketData;
    },
  },
};
</script>