var http = require('http');
var url = require('url');

var server = http.createServer(function(req, res) {
  console.log(url.parse(req.url,true));
  res.end('Hello World\n');
});

server.listen(9000, function() {
  console.log('server started at port 9000');
})
