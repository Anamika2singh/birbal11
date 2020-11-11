var mongoose = require('mongoose')
var Schema = mongoose.Schema;


var customer_details = new Schema({
    name : {type : String , required: true},
    mobile_number : {type : Number, required: true},
    email_id : {type : String, required: true},
    Address  : {type : String, required: true},
    pin_code : {type : Number, required: true}, 
    state : {type : String, required: true},
    country : {type : String, required: true},
    created : {type : Date , default : Date.now()},
    updated : {type :Date , default : Date.now()},
    status :  {type : Number , default : 1}
})
module.exports = new mongoose.model('customerdetail',customer_details)