const request = require('request')
const geocode = require('./util/gecode') 
const forecast = require('./util/forecast')

const address = process.argv[2]
if (!address){
    console.log('please type in an address')
}
else{
    geocode(address,(error,data)=>{
        if (error){
            console.log('Error', error)
        }
        forecast(data.lat, data.lon, (error, forecast_data) => {
            if(error){
                console.log('Error', error)
            }
            console.log(data.loc)
            console.log(forecast_data)
        })
    })

}
