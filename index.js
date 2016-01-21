var fs = require('fs');
var http = require('http');
var server;

server = http.createServer(function(req, res) {
	console.log(req.url);
	var tpl = fs.createReadStream('views/index.htm');

	res.writeHead(200, {'Content-type': 'text/html'});
	tpl.pipe(res);

	//res.writeHead(200, {'Content-type': 'application/json'});

});

server.listen(80);

console.log('Server started.');
