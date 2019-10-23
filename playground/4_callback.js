


// const name = ['andrew','beta', 'gamma']
// const short_name = name.filter((name) => {
//     return name.length < 5
// })

// const geocode = (address, callback) =>{
//     setTimeout(() =>{
//         const data = {
//             lat: 0,
//             lon: 0
//         }
//         callback(data)
//     },2000) 
// }

// geocode('Edmonoton', (data) => {
//     console.log(data)
// })


//
// Goal: Mess around with the callback pattern
//
// 1. Define an add function that accepts the correct arguments
// 2. Use setTimeout to simulate a 2 second delay
// 3. After 2 seconds are up, call the callback function with the sum
// 4. Test your work!


const add = (n1,n2,callback) => {
    setTimeout(()=>{
        const sum = n1+n2
        callback(sum)
    },
    2000)
}
//callback(sum):
//    console.log(sum)


add(1, 4, (sum) => {
    console.log(sum) // Should print: 5
})