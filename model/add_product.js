
var mongoose = require('mongoose');
var Schema = mongoose.Schema;

var newstorage = new Schema({
        pictures :  {type:Array},
        merchant_id :{type:Schema.Types.ObjectId},
    store_id :  {type:Schema.Types.ObjectId},
    category_id :{type:Schema.Types.ObjectId },
    bar_code : { type : String,required: true },
    product_name : {type :String ,required: true},
    MRP : {type :Number,required: true},
    selling_price : {type : Number ,required: true},
    piece : {type : Number ,required: true},
    product_details : {type : String ,required: true},
    available : {type : Number ,required: true},
   add_size_color :{type : Number ,default : 1},
   choose_size : {type : String,required: true},
   choose_color : {type :String,required: true},
   created : {type : Date , default : Date.now()},
   updated : {type :Date , default : Date.now()},
   status :  {type : Number , default : 1}
})

//  module.exports = mongoose.Schema('newstore',newstorage);
 var storeModel=new mongoose.model('addproductpic',newstorage);
 module.exports=storeModel;