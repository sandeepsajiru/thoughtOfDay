var express = require('express');

var app = express();

app.get('/', function(req, res){
	res.send('Welcome to RESTful');
});

var thoughtsRouter = express.Router();
thoughtsRouter.route('/thoughts')
			  .get(function(req, res){
				  res.json({'thought':'What a lovely weather',
				  'date':'2015/08/21'});
			  });
app.use('/api', thoughtsRouter);

app.listen(3000, function()
{
	console.log('Server started on http://localhost:3000');
});