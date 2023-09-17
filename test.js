const os = require('os');
const fs = require('fs');
let rec = os.platform();
console.log(rec);
const my_modul = require('./my_modul');
let str = my_modul.add('Hellp', ' World!');
console.log(str);
