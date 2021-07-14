const actions = {
  loadData(context) {
    fetch(
      "https://stocktrader-f5810-default-rtdb.firebaseio.com/savedData.json"
    )
      .then(function(response) {
        if (response.ok) {
          return response.json();
        }
      })
      .then(function(data) {
        if (data != null) {
          context.commit("setPortfolio", data.portfolio);
          context.commit("setFunds", data.funds);
          context.commit("setStocks", data.stocks);
        }
      });
  },

  saveData(context, payload) {
    return new Promise((res, rej) => {
      fetch("https://stocktrader-f5810-default-rtdb.firebaseio.com/savedData.json",
        {
          method: "PUT",
          header: {
            "Content-Type": "application/json",
          },
          body: JSON.stringify(payload),
        }).then(()=>{
          res();
        }).catch(()=>{
          rej();
        })
    });
  },
};

export default {
  actions,
};
