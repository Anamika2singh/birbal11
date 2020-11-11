const express = require('express');
const app=express();
const bodyparser=require('body-parser');
const mongoose = require('mongoose');
mongoose.set('useFindAndModify', false);
 var usersRouter = require('./routes/users');
app.use(bodyparser.json({extended : true}));
app.use(bodyparser.urlencoded({extended : true}));



//database coonection with mongodb
mongoose.Promise=global.Promise;
mongoose.connect('mongodb://localhost:27017/newproject',{useNewUrlParser:true ,useUnifiedTopology: true})
.then(()=>console.log('connection successful'))
.catch((err)=>console.error(err))

 app.use('/',usersRouter);




app.listen(3000,()=>{
    console.log("listening port 3000");
});
