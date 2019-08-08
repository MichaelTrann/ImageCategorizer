const express = require('express');
const path = require('path');
const favicon = require('serve-favicon');
const logger = require('morgan');
const cookieParser = require('cookie-parser');
const bodyParser = require('body-parser');
const cors = require('cors'); // addition we make
const fileUpload = require('express-fileupload'); //addition we make
const routes = require('./routes/routes');
const users = require('./routes/users');
var authenticateController=require('./routes/authenticateController');
var registerController=require('./routes/registerController');


var app = express();

app.use(logger('dev'));
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));
app.use(cookieParser());




app.use('/public', express.static(__dirname + '/public'));

app.use(function(req, res, next) {
  res.header("Access-Control-Allow-Origin", "*");
  res.header("Access-Control-Allow-Headers", "Origin, X-Requested-With, Content-Type, Accept");
  next();
});
 var router = express.Router();


app.get('/test', (req, res) => {
  res.send("test");
});
// Added
/* app.post('/api/register', registerController.register);
app.post('/api/authenticate', authenticateController.authenticate);
console.log(authenticateController);
app.post('./routes/registerController', registerController.register);
app.post('./routes/authenticateController', authenticateController.authenticate);  */

/* app.post('/register', routes.register); */
app.use('/api', router);


// catch 404 and forward to error handler
app.use(function (req, res, next) {
  const err = new Error('Not Found');
  err.status = 404; 
  next(err);
});

// error handler
app.use(function (err, req, res, next) {
  // set locals, only providing error in development
  res.locals.message = err.message;
  res.locals.error = req.app.get('env') === 'development' ? err : {};

  // render the error page
  res.status(err.status || 500);
  res.send('error');
});


module.exports = app;
