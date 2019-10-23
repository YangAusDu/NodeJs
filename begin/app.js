const chalk = require('chalk')
const getNotes = require('./note.js')
const yargs = require('yargs')

const msg = getNotes()
console.log(msg)

const green_msg = chalk.green.inverse.bold('success!')
console.log(green_msg)
yargs.version('1.10.0')
//argv from terminal

yargs.command({
    command:'add',
    describle:'adding a note',
    handler: function(){
        console.log('Note added')
    }
})

yargs.command({
    command:'remove',
    describle:'removing a note',
    handler: function(){
        console.log('Note removed')
    }
})

yargs.command({
    command:'add',
    describle:'adding a note',
    handler: function(){
        console.log('Note added')
    }
})

yargs.command({
    command:'add',
    describle:'adding a note',
    handler: function(){
        console.log('Note added')
    }
})


console.log(process.argv)
console.log(yargs.argv)
