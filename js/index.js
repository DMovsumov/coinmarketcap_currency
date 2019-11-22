function load() {
    let url = 'https://api.coinmarketcap.com/v1/ticker/'
    fetch(url)
    .then((response) => {
        return response.json()
    })
    .then((data) => {
        let table = document.querySelector('#currency')
        let count = 1
        let html = data.map((item)=>{
            return '<tr>'+ '<th>'+ count++ + '</th>' + '<th>'+ item.name + '</th>' + '<th>'+ item.price_usd +'$' + '</th>' + '<th>'+ item.price_btc + '</th>' + '<th>'+ item.total_supply + '</th>' + '<th>'+ item.max_supply + '</th>' + '<th>'+ item.percent_change_1h + '</th>' + '<th>'+ item.percent_change_24h + '</th>' + '<th>'+ item.percent_change_7d + '</th>' + '</tr>'
        })
        

        table.insertAdjacentHTML('afterbegin', html.join(' '))
        console.log(data)        
    })
}
load()