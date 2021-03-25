var http = require('http');
console.log('Server is listening...');

http.createServer(function (req, res) {
  res.writeHead(200, {'Content-Type': 'text/plain'});
  res.end('Hello World! from the server');
}).listen(8080);
