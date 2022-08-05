var express = require('express');
var path = require('path');
var cookieParser = require('cookie-parser');
var logger = require('morgan');
var cors = require('cors');

var IndexRouter = require('./routes/indexRoutes');
var UsersRouter = require('./routes/usersRoutes');

var App = express();

// view engine setup
App.set('views', path.join(__dirname, 'views'));
App.set('view engine', 'jade');

App.use(logger('dev'));
App.use(express.json());
App.use(express.urlencoded({ extended: false }));
App.use(cookieParser());
App.use(express.static(path.join(__dirname, 'public')));
App.use(cors());

// Routes
App.use('/', IndexRouter);
App.use('/users', UsersRouter);

// catch 404 and forward to error handler
App.use(function(req, res, next) {
  res.status(404).send("Not Found");
});

// error handler
App.use(function(err, req, res, next) {
  res.status(500).send("Internal Server Error");
});

module.exports = App;
