
const fs = require('fs')
const path  = require('path')
const fsPromisses = require('fs').promises;

//////////////////////////////
// fs.readFile('./files/starter.txt', (err, data) => {
//     if (err) throw err;
//     console.log(data)
//     console.log(data.toString())

// })

//////////////////////////////

// fs.readFile('./files/starter.txt', 'utf8', (err, data) => {
//     if (err) throw err;
//     console.log(data)
//     console.log(data)

// })

/////////////////////////////////
// fs.readFile(path.join(__dirname, 'files', 'starter.txt'), 'utf8', (err, data) => {
//     if (err) throw err;
//     console.log(data)
//     console.log(data)

// })

// /////////////////////////////////
// fs.readFile(path.join(__dirname, 'files', 'start.txt'), 'utf8', (err, data) => {
//     if (err) throw err;
//     console.log(data)
//     console.log(data)

// })

// console.log('Hello...');

// process.on('uncaughtException', err => {
//     console.error(`There was an uncaught error: ${err}`)
//     process.exit(1)
// })

// /////////////////////////////////
// fs.readFile(path.join(__dirname, 'files', 'starter.txt'), 'utf8', (err, data) => {
//     if (err) throw err;    
//     console.log(data);

// })

// console.log('Hello...');

// fs.writeFile(path.join(__dirname, 'files', 'reply.txt'), 'Nice to meet you.', (err) => {
//     if (err) throw err;
//     console.log('Write complete');
// })


// fs.appendFile(path.join(__dirname, 'files', 'test.txt'), 'Testing test.', (err) => {
//     if (err) throw err;
//     console.log('Append complete');
// })


// process.on('uncaughtException', err => {
//     console.error(`There was an uncaught error: ${err}`)
//     process.exit(1)
// })


// /////////////////////////////////
// fs.readFile(path.join(__dirname, 'files', 'starter.txt'), 'utf8', (err, data) => {
//     if (err) throw err;    
//     console.log(data);

// })

// console.log('Hello...');

// fs.writeFile(path.join(__dirname, 'files', 'reply.txt'), 'Nice to meet you.', (err) => {
//     if (err) throw err;
//     console.log('Write complete');

//     fs.appendFile(path.join(__dirname, 'files', 'reply.txt'), '\n\nYes it is.', (err) => {
//         if (err) throw err;
//         console.log('Append complete');
//     })
// })

// process.on('uncaughtException', err => {
//     console.error(`There was an uncaught error: ${err}`)
//     process.exit(1)
// })

// /////////////////////////////////
// fs.readFile(path.join(__dirname, 'files', 'starter.txt'), 'utf8', (err, data) => {
//     if (err) throw err;    
//     console.log(data);

// })

// console.log('Hello...');

// fs.writeFile(path.join(__dirname, 'files', 'reply.txt'), 'Nice to meet you.', (err) => {
//     if (err) throw err;
//     console.log('Write complete');

//     fs.appendFile(path.join(__dirname, 'files', 'reply.txt'), '\n\nYes it is.', (err) => {
//         if (err) throw err;
//         console.log('Append complete');
    
//         fs.rename(path.join(__dirname, 'files', 'reply.txt'), path.join(__dirname, 'files', 'newReply.txt'), (err) => {
//             if (err) throw err;
//             console.log('Rename complete');
//         })
//     })
// })

// process.on('uncaughtException', err => {
//     console.error(`There was an uncaught error: ${err}`)
//     process.exit(1)
// })


// /////////////////////////////////

const fileOps = async () => {
    try {
        const data = await fsPromisses.readFile(path.join(__dirname, 'files', 'starter.txt'), 'utf8')
        console.log(data)
        await fsPromisses.writeFile(path.join(__dirname, 'files', 'promiseWrite.txt'), data)
        await fsPromisses.writeFile(path.join(__dirname, 'files', 'promiseWrite.txt'), '\n\nNice to meet you.')
        await fsPromisses.rename(path.join(__dirname, 'files', 'promiseWrite.txt'), path.join(__dirname, 'files', 'promiseComplete.txt'))
        const newData = await fsPromisses.readFile(path.join(__dirname, 'files', 'promiseComplete.txt'), 'utf8')
        console.log(newData)

    }catch (err) {
        console.log(err)
    }
}

fileOps()







