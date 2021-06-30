var http = require('http');

var server = http.createServer(function(request, response) {
  response.writeHead(200, {'Content-Type': 'text/plain'});
  response.end('Wake up, Neo...');
});

// arrancamos el servidor
server.listen(1337, '127.0.0.1');
console.log('Servidro arrancado en 127.0.0.1:1337')