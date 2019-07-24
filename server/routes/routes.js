var express = require('express');
var router = express.Router();
const mysql = require('mysql');

const connection = mysql.createConnection({
  host: 'localhost',
  user: 'root',
  password: 'imagecategorizer',
  database: 'simple-react-sql-db'
});

/* connection.connect(function (err)){
  (err) ? console.log(err) : console.log(connection);
}); */

/* GET home page. */
router.get('/', function (req, res, next) {
  res.send({ title: 'Express' });
});

router.get('/test', function (req, res, next) {
  res.send("hello from test");
});

/*    connection.connect();
  connection.query('SELECT 1 + 1 AS solution', function (error, results, fields) {
    if (error) throw error;
    console.log('The solution is: ', results[0].solution);
  });
  res.render('index', { title: 'Express' });
  connection.end(); 
}); */




module.exports = router;
