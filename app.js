const chalk = require('chalk');
const validator = require('validator')

const getNotes = require('./notes.js')

const msg = getNotes()

console.log(validator.isEmail('mobeen-k@hotmail.com'))
 
const ink = chalk.inverse.underline.blue('Hello world!!!')
console.log(ink);


// const getNotes = require('./notes.js')

// const msg = getNotes()

// console.log(msg)


