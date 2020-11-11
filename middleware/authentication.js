var jwt = require('jsonwebtoken');
module.exports=((req,res,next)=>{
    try{
        var token =req.body.token;
      console.log('token is '+token)
      var decoded = jwt.verify(token, 'KEY');
      req.userData=decoded
    //   console.log(decoded)
      next()
    }
    catch(error){
        res.status(404).json({"message":'token not exist'})
    }

})