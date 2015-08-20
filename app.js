var express = require('express');

var app = express();

app.get('/', function(req, res){
	res.send('Welcome to RESTful');
});

app.listen(3000, function()
{
	console.log('Server started on http://localhost:3000');
});