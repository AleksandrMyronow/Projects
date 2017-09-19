var http = require('http');
var static = require('node-static');
var mime = require('mime-types');
var file = new static.Server('.');

http.createServer(function(req, res){
	file.serve(req, res);
}).listen(8080);

console.log('server running on port 8080');