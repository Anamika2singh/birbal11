var mongoose = require('mongoose')
var Schema = mongoose.Schema

var orderplace = new Schema ({
    order_number : {type : Number},
    product : {type : Array},
    merchant_id : {type : Schema.Types.ObjectId},
    customer_id  : {type : Schema.Types.ObjectId},
    order_status : {type : Number , default : 1},
    delivery_charge : {type : Number},
    total_amount : {type : Number},
    discount : {type : Number },
    payment :{type : Number},//press 0 for cash on delivery and 1 for UPI
    delivery_type : {type : Number},//press 0 for pickup_at_store 1 for delivery 
    created : {type : Date , default : Date.now()},
    updated : {type :Date , default : Date.now()}
})
module.exports = new mongoose.model('orderplaced',orderplace)