var express = require('express');
const mysql = require('mysql');

const connection = mysql.createConnection({
  host: 'localhost',
  user: 'root',
  password: 'root',
  database: 'imagecategorizer'
});

connection.connect(function(err){
  
  if(!err) {
      console.log("Database is connected ... nn");
      
  } else {
      console.log("Error connecting database ... nn");
  }


});  




/* router.get('/test', function (req, res, next) {
  connection.connect();
  connection.query('SELECT * FROM users', function (error, results, fields) {
    if (error) throw error;
    console.log('The solution is: ', results);
    res.send(results);
    
  }); 
  connection.end();
  */





module.exports = connection;
