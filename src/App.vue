<template>
  <v-app>
    <app-header></app-header>
    <v-main>
      <router-view></router-view>
    </v-main>
  </v-app>
</template>

<script>
import Header from './components/Header.vue';
import startData from './startData.json';

export default {
  components:{appHeader: Header},
  name: 'App',
  created: function(){
    this.$store.dispatch("loadData");
    if(this.$store.getters.getStocks.length == 0){
      const store= this.$store;
      store.dispatch("saveData", startData)
      .then(function(){
        store.dispatch("loadData");
      })
    }
  }
};
</script>

