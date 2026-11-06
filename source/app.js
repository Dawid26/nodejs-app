var express = require('express');

var app = express();

app.get('/', function(req, res){
	res.send('DevOps - Strona startowa!');
	console.log('Zażądano strony Start');
});

app.get('/services', function(req, res){
	res.send('DevOps - strona Serivices!');
	console.log('Zażądano strony Serivices');
});

app.get('/info', function(req, res){
	res.send('DevOps - strona info!');
	console.log('Zażądano strony info');
});

app.get('/users', function(req, res){
	res.send('DevOps - strona Users!');
	console.log('Zażądano strony Users');
});

app.listen(3001, function(){
	console.log('Aplikacja OK');
}); 