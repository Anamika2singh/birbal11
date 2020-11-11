
var mongoose = require('mongoose');
var Schema = mongoose.Schema;

var newstorage = new Schema({
    merchant_id : {type : Schema.Types.ObjectId},
    profile : {type : String ,required: true },
    business_name :{type : String,required: true},
    business_type :{type : String,required: true},
    description :  {type : String,required: true},
   mobile_number : {type : Number,required: true},
    whatsapp_support : {type : Number,required: true},
    business_email : {type : String,required: true},
    store_address : {type : String,required: true},
    city : {type : String,required: true},
   state : {type : String,required: true},
    nation : {type : String,required: true},
    zip_code : {type : Number,required: true},
    created : {type : Date , default : Date.now()},
    updated : {type :Date , default : Date.now()},
    status :  {type : Number , default : 1}

})

//  module.exports = mongoose.Schema('newstore',newstorage);
 var storeModel=new mongoose.model('newstore',newstorage);
 module.exports=storeModel;