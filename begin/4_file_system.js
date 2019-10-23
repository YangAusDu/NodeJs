const chalk = require('chalk')
const notes = require('./note.js')
const yargs = require('yargs')


//const green_msg = chalk.green.inverse.bold('success!')
//console.log(green_msg)
yargs.version('1.10.0')
//argv from terminal

yargs.command({
    command:'add',
    describle:'adding a note',
    builder: {
        title: {
            describle: 'title added',
            demandOption: true,
            type: 'string'
        },
        body:{
            describle:'Note body',
            demandOption: true,
            type: 'string'
        }
    },
    handler: function(argv){
        notes.addNotes(argv.title, argv.body)
    }
})

yargs.command({
    command:'remove',
    describle:'removing a note',
    builder: {
        title: {
            describle: 'title added',
            demandOption: true,
            type: 'string'
        }
    },
    handler: function(argv){
        notes.removeNotes(argv.title)
    }
})

yargs.command({
    command:'list',
    describle:'listing a note',
    handler: function(){
        notes.listNotes()
    }
})

yargs.command({
    command:'read',
    describle:'reading a note',
    builder: {
        title: {
            describle: 'title read',
            demandOption: true,
            type: 'string'
        }
    },
    handler: function(argv){
        notes.readNotes(argv.title)
    }
})


//console.log(process.argv)
//console.log(yargs.argv)
yargs.parse()