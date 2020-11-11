
var mongoose = require('mongoose');
var Schema = mongoose.Schema;

var addcategory = new Schema({
        
    category_name : {type : String},
    created : {type : Date , default : Date.now()},
    updated : {type :Date , default : Date.now()},
    status :  {type : Number , default : 1}

})

 var cate=new mongoose.model('category',addcategory);
 module.exports=cate;