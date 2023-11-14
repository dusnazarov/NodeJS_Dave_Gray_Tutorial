// How NodeJs differs from vanilla JS
// 1) Node runs on a server -not in a browser (backend not frontend)
// 2) The console is the terminal window
// console.log('Hello World)
// 3) global object instead of window object
// console.log(global)
// 4) Has Common Core modules that we will explore
// 5) CommonJS modules instead of ES6 modules
// const os = require('os')




/////////////////////////
// const os = require('os')

// console.log(os.type())
// console.log(os.version())
// console.log(os.homedir())

// console.log(__dirname)
// console.log(__filename)

/////////////////////////
// const path = require('path')

// console.log(path.dirname(__filename))
// console.log(path.basename(__filename))
// console.log(path.extname(__filename))

// console.log(path.parse(__filename))


// 1)  ///////////////////////
// const math = require('./maths')


// console.log(math.add(3, 2))
// console.log(math.subtract(3, 2))
// console.log(math.multiply(3, 2))
// console.log(math.divide(3, 2))

// 2)  ///////////////////////
const {add, subtract, multiply, divide } = require('./maths')


console.log(add(3, 2))
console.log(subtract(3, 2))
console.log(multiply(3, 2))
console.log(divide(3, 2))

