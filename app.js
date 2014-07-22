var express = require('express'),
	ejs = require('ejs'),
	bodyParser = require('body-parser'),
	app = express();

var articles = [];

app.use(bodyParser.urlencoded());

app.set('view engine', 'ejs');

app.get('/', function(req,res){
	res.render('articles/home');
});
app.get('/about', function(req,res){
	res.render('articles/about');
});
app.get('/contact', function(req,res){
	res.render('articles/contact')
});

app.get('/article', function(req, res){
	res.render('articles/index', {articles: articles});
});
app.get('/articles/new', function(req, res) {
	res.render('articles/new');
});
app.get('/articles/:id', function(req,res){
	var index = req.params.id;
	var article = articles[index];
	res.render('articles/show', {article: article});
});

app.post('/articles', function(req,res){
	console.log(req.body)
	articles.push(req.body.article)
	res.redirect('/articles/new');
});

app.listen(3000, function(){

});