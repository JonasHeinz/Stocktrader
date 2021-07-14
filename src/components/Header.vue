<template>
  <nav>
    <v-toolbar>
      <v-toolbar-title @click="navigateHome">
        <h2>Stock <span class="grey--text">Trader</span></h2>
      </v-toolbar-title>
      <v-spacer></v-spacer>
      <v-btn plain class="pink--text mr-5" @click="endDay">End day</v-btn>
      <v-menu>
        <template v-slot:activator="{ on, attrs }">
          <v-btn plain class="pink--text mr-5" v-bind="attrs" v-on="on">
            <span>Save/Load/Restart</span>
          </v-btn>
        </template>
        <v-list>
          <v-list-item>
            <v-list-item-title>
              <v-btn plain class="pink--text" @click="saveData">Save</v-btn>
            </v-list-item-title>
          </v-list-item>
          <v-list-item>
            <v-list-item-title>
              <v-btn plain class="pink--text mr-5" @click="loadData">Load</v-btn>
            </v-list-item-title>
          </v-list-item>
                    <v-list-item>
            <v-list-item-title>
              <v-btn plain class="pink--text mr-5" @click="restart">Restart</v-btn>
            </v-list-item-title>
          </v-list-item>
        </v-list>
      </v-menu>

      <div overline>
        <b>Funds: {{ getFunds }}</b
        ><span></span>
      </div>
    </v-toolbar>
    <v-tabs centered fixed-tabs>
      <v-tab to="/portfolio">Portfolio</v-tab>
      <v-tab to="/stockmarket">Stocks</v-tab>
    </v-tabs>
  </nav>
</template>

<script>
import startData from '../startData.json';
export default {
  
  methods: {
    navigateHome() {
      this.$router.push("/");
    },
    endDay() {
      this.$store.dispatch("endDay");
    },
    saveData() {
      this.$store.dispatch('saveData', {
            stocks: this.$store.getters.getStocks,
            funds: this.$store.getters.getFunds,
            portfolio: this.$store.getters.getPortfolio,
      });
    },
    restart(){
      const store= this.$store;
      store.dispatch("saveData", startData)
      .then(function(){
        store.dispatch("loadData");
      })
    },
    loadData(){
     this.$store.dispatch("loadData");
    }
  },
  computed: {
    getFunds() {
      return this.$store.getters.getFunds;
    },
  },
};
</script>
