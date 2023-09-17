const fs = require('fs');
const my_modul = require('./my_modul');
fs.unlink('./new_file/lm.txt', () => {
  fs.rmdir('./new_file'), () => {};
});
