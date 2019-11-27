const url = 'https://api.coinmarketcap.com/v1/ticker/'
// const options = document.querySelector('.pirce_usd')
// const currency = ['USD' ,'RUB', 'EURO', 'GBP', 'JPY', 'CHF']
// let item = document.createElement('option')
// let price_usd = document.querySelectorAll('.price_usdConv')

function load() {    
    fetch(url)
    .then((response) => {
        return response.json()
    })
    .then((data) => {
        let table = document.querySelector('#currency')
        let count = 1
        let html = data.map((item)=>{
            return '<tr class="info">' + '<th>'+ count++ + '</th>' + '<th>'+ item.name + '</th>' + '<th class="price_usdConv">' + item.price_usd + '</th>' + '<th>'+ item.price_btc + '</th>' + '<th>'+ item.total_supply + '</th>' + '<th>'+ item.max_supply + '</th>' + '<th>'+ item.percent_change_1h + '</th>' + '<th>'+ item.percent_change_24h + '</th>' + '<th>'+ item.percent_change_7d + '</th>' + '</tr>'
        })
        
        table.insertAdjacentHTML('beforeEnd', html.join(' '))


    })
}
load()



// currency_select()

// function converterUsd() {
//     fetch(url)
//         .then((response) => {
//             return response.json()
//         })
//         .then((data) => {
//             let price_usdConvert = data.map((item) => {
//                 return item.price_usd
//             })
//             return price_usdConvert     
//         })              
// }

// converterUsd()

// function converter(price) {
//     options.addEventListener('change', () => {
//         if(options.value == 'RUB'){
//             for(let i = 0; i < price.length; i++)
//             return price[i] * 63 
//         } else {
//             return price.forEach(element => {
//                 return element
//             });
//         }
//     })
// }