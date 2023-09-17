const fs = require('fs');
const my_modul = require('./my_modul');
fs.writeFileSync('some.txt', 'Hello world!');
let result = fs.readFileSync('some.txt', 'utf-8');
console.log(result);
fs.mkdir('new_file', () => {
  fs.writeFile('./new_file/lm.txt', 'This is a good one', () => {});
});
fs.unlink('./new_file/lm.txt', () => {
  fs.rmdir('./lm.txt'), () => {};
});
