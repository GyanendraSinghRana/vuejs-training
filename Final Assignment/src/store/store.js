import Vue from 'vue';
import Vuex from 'vuex';
import stocksData from '../data/stocks.json'

Vue.use(Vuex);

export default new Vuex.Store({
    state: {
        stocks: {
            funds: stocksData.funds,
            totalStocks: stocksData.total,
            boughtStocks: stocksData.bought
        },
        showLoader: false
    },
    mutations: {
        buyStock: ( state, payload) => {
            state.showLoader = true;

            const { id, vol } = payload;
            const { totalStocks, boughtStocks } = state.stocks;
            const stockExist = boughtStocks.find((stock) => stock.id === id);
            const boughtStock = totalStocks.find((stock) => stock.id === id);

            setTimeout(
                () => {
                    if(stockExist) {
                        stockExist.volume += vol;
                    } else {
                        const stock = {
                            id,
                            volume: vol
                        };
                        boughtStocks.push(stock);
                    }
        
                    boughtStock.volume -= vol;
                    state.stocks.funds -= boughtStock.value * vol;
                    state.showLoader = false;
                },
                2000
            );
        },
        sellStock: (state, payload) => {
            state.showLoader = true;

            const { id, vol } = payload;
            const { boughtStocks, totalStocks } = state.stocks;
            const soldStock = totalStocks.find((stock) => stock.id === id);

            setTimeout(
                () => {
                    boughtStocks.find((stock) => stock.id === id).volume -= vol;
                    soldStock.volume += vol;
                    state.stocks.funds += soldStock.value * vol;
                    state.showLoader = false;
                },
                2000
            );
        },
        updateStocks: (state) => {
            state.showLoader = true;

            setTimeout(
                () => {
                    state.stocks.totalStocks.forEach(stock => {
                        stock.value = Math.floor(Math.random() * 191) + 10; 
                    });

                    state.showLoader = false;
                },
                2000
            );
        },
        load: (state, payload) => {
            setTimeout(
                () => {
                    state.stocks = payload;
                    state.showLoader = false;
                },
                2000
            );
        }
    },
    actions: {
        save({state}) {
            state.showLoader = true;

            Vue.http.put(
                "https://stocks-vuejs.firebaseio.com/stocks.json",
                state.stocks
            )
            .then(
                response => {
                    console.log("success", response);
                },
                error => {
                    console.log("error", error);
                }
            );
            
            setTimeout(
                () => {
                    state.showLoader = false;
                },
                2000
            );
        },
        fetch({commit, state}) {
            state.showLoader = true;

            Vue.http.get("https://stocks-vuejs.firebaseio.com/stocks.json").then(
                response => {
                    return response.json();
                },
                error => {
                    console.log("error", error);
                }
            ).then(data => {
                commit('load', data);
            });
        }
    }
});