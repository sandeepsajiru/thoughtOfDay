var express = require('express')
	mongoose = require('mongoose');

	
var db = mongoose.connect('mongodb://localhost/thoughtOfDay');

var thought = require('./models/thoughtModel');


var app = express();

app.get('/', function(req, res){
	res.send('Welcome to RESTful');
});

var thoughtsRouter = express.Router();
	thoughtsRouter.route('/thoughts')
			  .get(function(req, res){
				  thought.find(function(err, thoughts){
					  if(err)
						  res.status(500).send(err);
					  else
						  res.json(thoughts);
				  });
});

app.use('/api', thoughtsRouter);

app.listen(3000, function()
{
	console.log('Server started on http://localhost:3000');
});