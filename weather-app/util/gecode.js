
const request = require('request')

const geocode = (address,callback) => {
    const url = 'https://api.mapbox.com/geocoding/v5/mapbox.places/'+ encodeURIComponent(address)+'.json?access_token=pk.eyJ1Ijoib3NzaWUiLCJhIjoiY2syMWoyeDlzMDl3cjNtb2NrNzg3emMyZyJ9.OJCCpN4RXmIAbrO0MaXxTw'

    request({url: url, json:true}, (error, response) => {
        if (error){
            callback('internet error', undefined)
        }else if(response.body.features.length === 0){
            callback('not enough info', undefined)
        }else{
            callback(undefined, {
                lat: response.body.features[0].center[0],
                lon: response.body.features[0].center[1],
                loc: response.body.features[0].place_name
            })
        }
    })
}

module.exports = geocode