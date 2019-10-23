const fs = require('fs')


const book = {
    title:'ego is the enemy',
    author:'Ryan Holiday'
}

const bookJSON = JSON.stringify(book)
console.log(bookJSON)
const bookOBJ = JSON.parse(bookJSON)
console.log(bookOBJ.title)

//creating JSON file
fs.writeFileSync('1_json.json', bookJSON)
const dataBuffer = fs.readFileSync('1_json.json')
const data = JSON.parse(dataBuffer)
console.log(data.author)

