const request = require('request')

const forecast = (lat, lon,callback) => {
    const url = 'https://api.darksky.net/forecast/ee60ef6cdc3ec750061ab37b7742abe2/' + encodeURIComponent(lat) + ',' + encodeURIComponent(lon) 
    request({url: url, json:true}, (error, response) => {
        if (error){
            callback('internet error', undefined)
        }else if(response.length === 0){
            callback('not enough info', undefined)
        }else{
            callback(undefined, "today's temperature is " + response.body.currently.temperature)
        }
    })
}

module.exports = forecast