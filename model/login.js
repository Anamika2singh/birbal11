const { schema } = require('./signup');

const mongoose= require('mongoose');
var Schema=mongoose.Schema;


var login=new  Schema({
  mobile_number:{type: Number,required: true},
  password:{type:String ,required: true},
  created : {type : Date , default : Date.now()},
  updated : {type :Date , default : Date.now()},
  status :  {type : Number , default : 1}
});
module.exports=mongoose.model('loginuser',login);