<template>
  <ul class="stockList">
    <portfolio-stock :key="stock.name" v-for="stock in getPortfolioData" :stockData="stock"></portfolio-stock>
  </ul>
</template>

<script>
import Stock from './stock'
export default {
  components: {
    portfolioStock: Stock,  
  },
  computed: {
    getPortfolioData() {
        return this.$store.getters.getPortfolioData;
    },
  },
};
</script>

<style>
.stockList{
  margin-bottom: 10vh;
}
</style>
