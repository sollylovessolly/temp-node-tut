const {readFileSync, writeFileSync} = require('fs')
//same as
// const fs = require('fs')
// fs.readFileSync
// fs.writeFileSync

const first = readFileSync('./content/first.txt','utf8')
const second = readFileSync('./content/second.txt','utf8')

console.log(first, second);

writeFileSync('./content/result-sync.txt', `here is the result: \n ${first} , ${second}`, {flag: 'a'})
//FLAGS
// a- append to the file
