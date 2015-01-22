var http        = require('http');
var alfalfabet  = require('node-alfalfabet');
var alfupperbet = require('node-alfupperbet');

http.createServer(function (req, res) {
  res.setHeader('Content-Type', 'application/json');

  if (req.url === '/api/v1/lowercase') {
    response = JSON.stringify(alfalfabet);
  }
  else if (req.url === '/api/v1/uppercase') {
    response = JSON.stringify(alfupperbet);
  }
  else {
    response = JSON.stringify({ error: 'Use /api/v1/<uppercase|lowercase>...'});
  }

  res.end(response);
}).listen(parseInt(process.env.PORT) || 5000);
