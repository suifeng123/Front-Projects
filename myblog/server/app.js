var createError = require('http-errors');
var express = require('express');
var path = require('path');
var cookieParser = require('cookie-parser');
var logger = require('morgan');

var indexRouter = require('./routes/index');
var usersRouter = require('./routes/users');

//使用session
var session = require('express-session');
var MongoStore = require('connect-mongo')(session);

//设置一个setting
var setting = {
  cookieSecret:'wang',
  db:'wblog',
  host: 'localhost',
  port: 27017
}

var app = express();

app.use(session({
  secret: setting.cookieSecret,
  key: setting.db, //cookie 名称
  cookie:{maxAge: 1000 * 3600}, // 一个小时的有效时间
  resave: false,
  saveUninitialized: true,
  store: new MongoStore({
    url:'mongodb://localhost/wblog'
  })
}));
//服务器使用跨域操作

// view engine setup
app.set('views', path.join(__dirname, 'views'));
app.set('view engine', 'jade');

app.use(logger('dev'));
app.use(express.json());
app.use(express.urlencoded({ extended: false }));
app.use(cookieParser());
app.use(express.static(path.join(__dirname, 'public')));

app.use('/', indexRouter);
app.use('/users', usersRouter);

// catch 404 and forward to error handler
app.use(function(req, res, next) {
  next(createError(404));
});

// error handler
app.use(function(err, req, res, next) {
  // set locals, only providing error in development
  res.locals.message = err.message;
  res.locals.error = req.app.get('env') === 'development' ? err : {};

  // render the error page
  res.status(err.status || 500);
  res.render('error');
});

module.exports = app;
