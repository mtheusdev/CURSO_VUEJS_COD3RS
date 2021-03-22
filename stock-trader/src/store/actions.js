import Vue from 'vue'

export default{

    loadData({commit}){
        Vue.prototype.$http.get('data.json').then(res => {
            const data = res.data
            if(data){
                commit('setStocks', data.stocks)
                commit('setPortfolio',{
                    funds: data.funds,
                    stockPortifolio: data.stockPortifolio
                })
            }
        })
    }

}