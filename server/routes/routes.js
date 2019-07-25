var express = require('express');
var router = express.Router();
const mysql = require('mysql');

const connection = mysql.createConnection({
  host: 'localhost',
  user: 'root',
  password: 'root',
  database: 'imagecategorizer'
});

/* connection.connect(function (err)){
  (err) ? console.log(err) : console.log(connection);
}); */

/* GET home page. */
router.get('/', function (req, res, next) {
  res.send({ title: 'Express' });
});

router.get('/test', function (req, res, next) {
  connection.connect();
  connection.query('SELECT * FROM users', function (error, results, fields) {
    if (error) throw error;
    console.log('The solution is: ', results[0].password);
    res.send(results[0].password);
  });

  connection.end(); 
}); 




module.exports = router;
