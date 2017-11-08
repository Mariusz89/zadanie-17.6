var express = require('express');
var app = express();

app.use(express.static(__dirname + '/public'));


app.set('view engine', 'pug');
app.set('views','./views');


app.get('/', function(req, res){
	res.render('login');
});

app.get('/auth/google', function(req, res){
    res.render('auth');
});


app.listen(8000);

 



