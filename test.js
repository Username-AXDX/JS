const fs = require('fs');
const my_modul = require('./my_modul');
fs.writeFileSync('some.txt', 'Hello world!');
let result = fs.readFileSync('some.txt', 'utf-8');
console.log(result);
