const http = require('http');
let server = http.createServer((req, res) => {
  rec.writeHead(200, {'Content-Type': 'text/plain; charset=utf-8'});
  rec.end('Hello JS');
});
const PORT = 3000;
const HOST = 'localhost';
server.listen(PORT, HOST, () => {
  console.log(`Сервер запущен : http://${HOST}:${PORT}`);
});
