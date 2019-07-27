//combines all models and export them as database interface 
//to Express application

const mongoose =require('mongoose');
DATABASE_URL='mongodb://localhost:27017/myapp'

const User =require('./user.js');
const Message =require('./message.js');

// mongoose.connect(DATABASE_URL,{useNewUrlParser: true});

// var connectDb=mongoose.connection;
// connectDb.on('error', function(err){
//     console.log(error("Mongoose default connection has occured "+err+" error"));
// });
    
//const connectDb=mongoose.connection;

const models={User,Message};

module.exports= {connectDb};
module.exports=  models;
