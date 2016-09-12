const http = require('http');
const port = 8124;

http.createServer((req, res) => {
  res.writeHead(200, {'Content-Type': 'text/plain'});
  res.end('Hello World!\n');
}).listen(8124, '127.0.0.1');

console.log(`Running on 127.0.0.1:${port}`);