import Vue from 'vue';
import Vuex from 'vuex';
import portfolio from './modules/portfolio';
import stocks from './modules/stocks';
import loadData from './modules/database';


Vue.use(Vuex);
export default new Vuex.Store({
    modules:{
        stocks,
        portfolio,
        loadData,
    }, 
    
})

