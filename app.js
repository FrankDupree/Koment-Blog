var express = require('express');
var app = express();
var db = require('./db');

var bodyParser = require('body-parser');


var UserController = require('./user/UserController');
var UserData = require('./user/user');


var CommentController = require('./comment/CommentController');
var CommentData = require('./comment/comment');


app.use('/users', UserController);
app.use('/comments', CommentController);


app.use(bodyParser.urlencoded({extended:true}));
app.use('/static', express.static('public'));
app.set('view engine', 'ejs');

app.get('/', function(req, res){
  UserData.find({}, function(err, data) {
      if (err){
        res.status(500).send(err);
        console.log(err);     
      }else{
       res.render('index.ejs', {users: data})
      }     
  });
});

app.get('/user/add', function(req, res){
	res.render('add.ejs')
});

app.get('/user/all', function(req, res){
  UserData.find({}, function(err, data) {
      if (err){
        res.status(500).send(err);
        console.log(err);     
      }else{
       res.render('users.ejs', {users: data})
      }     
  });
});

app.get('/user/edit/:id', function(req, res){
	var id = req.params.id;
  UserData.findById(id, function(err, data) {
      if (err){
        res.status(500).send(err);
        console.log(err);     
      }else{
        console.log(data);
       res.render('edit.ejs', {user: data})
      }      
  });
});

module.exports = app;