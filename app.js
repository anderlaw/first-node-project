var createError = require('http-errors');
var express = require('express');
var cookieParser = require('cookie-parser')
var path = require('path');
var cookieParser = require('cookie-parser');
var logger = require('morgan');
var App = express();

//API模块
var ApiRouter = require("./api")

App.use(function(req,res,next){
  // res.header('Access-Control-Allow-Origin', 'http://127.0.0.1:5500');
  res.header('Access-Control-Allow-Origin', 'http://127.0.0.1:5500');
  res.header('Access-Control-Allow-Credentials','true');
  next();
})
// view engine setup
// App.set('views', path.join(__dirname, 'views'));
// App.set('view engine', 'jade');

App.use(logger('dev'));
App.use(cookieParser());
App.use(express.json());
App.use(express.urlencoded({ extended: false }));
App.use(cookieParser());

App.use('/static', express.static('assets'));//虚拟目录
App.use('/api', ApiRouter);

// catch 404 and forward to error handler
// App.use(function(req, res, next) {
//   next(createError(404));
// });

// error handler

App.use(function(err, req, res, next) {
  // set locals, only providing error in development
  res.locals.message = err.message;
  res.locals.error = req.app.get('env') === 'development' ? err : {};

  // render the error page
  res.status(err.status || 500);
  res.render('error');
});
module.exports = App;
