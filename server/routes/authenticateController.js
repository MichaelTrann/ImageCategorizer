var connection = require('./routes');
exports.authenticate=function(req,res){
    var email=req.body.email;
    var password=req.body.password;
   
    connection.query('SELECT * FROM users WHERE email = ?',[email], function (error, results, fields) {
      if (error) {
          res.json({
            status:false,
            message:'there are some error with query'
            })
      }else{
       
        if(results.length >0){
            if(password==results[0].password){
                res.json({
                    status:true,
                    message:'successfully authenticated',
                    "code":400
                })
            }else{
                res.json({
                  status:false,
                  message:"Email and password does not match",
                  "code":200

                 });
            }
          
        }
        else{
          res.json({
              status:false,    
            message:"Email does not exits"
          });
        }
      }
    });
}