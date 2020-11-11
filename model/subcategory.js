

var mongoose = require('mongoose');
var Schema = mongoose.Schema;

var addsubcategory= new Schema({
     category_id : {type:Schema.Types.ObjectId},
    subname : {type : String},
    created : {type : Date , default : Date.now()},
    updated : {type :Date , default : Date.now()},
    status :  {type : Number , default : 1}

})

module.exports=new mongoose.model('subcate',addsubcategory);