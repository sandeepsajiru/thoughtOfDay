var express = require('express');

var app = express();

app.get('/', function(req, res){
	res.send('Welcome to RESTful');
});

var thoughtsRouter = express.Router();
thoughtsRouter.route('/thoughts')
			  .get(function(req, res){
				  var thoughts = [{'thought':'What a lovely weather',
				  'date':'2015/08/21'},
				  {'thought':'What a lovely day',
				  'date':'2015/08/20'},
				  {'thought':'What a lovely girl',
				  'date':'2015/08/19'},
				  {'thought':'What a lovely boy',
				  'date':'2015/08/18'}];
				  res.json({thoughts:thoughts});
			  });
app.use('/api', thoughtsRouter);

app.listen(3000, function()
{
	console.log('Server started on http://localhost:3000');
});