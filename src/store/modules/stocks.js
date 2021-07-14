const state={
    stocks: [],
}

const getters = {
    getStocks(state){
        return state.stocks
    },
    getStockmarketData (state, getters){
        return getters.getStocks.map(stock => {
            return {
                id: stock.id,
                name: stock.name,
                price: stock.price,
                change: stock.change
            }
        })
    },
}

const mutations={
    endDay(state){
        state.stocks.forEach(stock=>{
            const priceBefore = stock.price;
            if(stock.price > 10){
                stock.price = Math.floor(stock.price*(Math.random()*(1.3-0.7)+0.7));
            }
            if(stock.price<priceBefore){
                stock.change ="lower"
            }else if(stock.price>priceBefore){
                stock.change ="higher"
            }else{
                stock.change ="equal"
            }
        })
    },
    setStocks(state, stocks){
        state.stocks = stocks;
    }
}

const actions={
    endDay(context){
        context.commit('endDay');
    }
}

export default{
    state, 
    getters,
    mutations,
    actions,
}