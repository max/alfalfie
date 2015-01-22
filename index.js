var http        = require('http');
var alfalfabet  = require('node-alfalfabet');
var alfupperbet = require('node-alfupperbet');

http.createServer(function (req, res) {
  res.setHeader('Content-Type', 'application/json');
  res.end(JSON.stringify(alfalfabet));
}).listen(parseInt(process.env.PORT) || 5000);
