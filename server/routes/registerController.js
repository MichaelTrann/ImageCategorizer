var connection = require('./routes');
exports.register=function(req,res){
/*      res.json({
        test:"tester"
    })  */
     var users={
        "name":req.body.name,
        "email":req.body.email,
        "password":req.body.password,
    }
    

    connection.query('INSERT INTO users SET ?',users, function (error, results, fields) {
        if (error) {
          console.log("error ocurred",error);
          res.send({
            "code":400,
            "failed":"error ocurred"
          })
        }else{
          console.log('The solution is: ', results);
          res.send({
            "code":200,
            "success":"user registered sucessfully"
              });
        }
        });
}