
const state = {
    stockPortfolio: [],
    funds: null
}

const getters={
    getPortfolioData (state, getters){
        return state.stockPortfolio.map(portfolioStock => {
            const marketStock = getters.getStocks.find(elem => portfolioStock.id==elem.id)
            return {
                id: portfolioStock.id,
                quantity: portfolioStock.quantity,
                name: marketStock.name,
                price: marketStock.price,
                change: marketStock.change
            }
        })
    },

    getFunds(state){
        return state.funds;
    },
    getPortfolio(){
        return state.stockPortfolio;
    }
}
const actions={
    sellStock(context, payload){
        context.commit('sellStock', payload);
    },
    buyStock(context, payload){
        context.commit('buyStock', payload);
    } 
}

const mutations={
    sellStock(state, payload){
        state.stockPortfolio.map((stock, index)=>{
            if(stock.id == payload.id){
                stock.quantity-=payload.quantity;
                if(stock.quantity <= 0){
                    state.stockPortfolio.splice(index, 1)
                }
                state.funds += payload.quantity * payload.price;

            }
        })
    },
    
    buyStock(state, payload){
        let stockFound = false;
        state.stockPortfolio.map(stock=>{
            if(stock.id == payload.id){
                stock.quantity+=parseInt(payload.quantity);      
                stockFound = true;   
            }
        })
        if(!stockFound){
            state.stockPortfolio.push({id: payload.id, quantity: payload.quantity});
            console.log(state.stockPortfolio);
        }
        state.funds -= payload.quantity * payload.price;
    },

    setPortfolio(state, portfolio){
        console.log(portfolio);
        state.stockPortfolio = portfolio;
    },
    setFunds(state, funds){
        state.funds = funds;
    }
}
export default{
    state,
    getters,
    actions,
    mutations
}