//express app
//connects database asynchronously 
const express=require("express")
//other imports
const mongoose =require('mongoose');
// import models,{connectDb} from './models';

const models = require("./models/index")
//const {connectDb}=require("./models/index")
const app=express();

DATABASE_URL='mongodb://localhost:27017/myapp'
mongoose.connect(DATABASE_URL,{useNewUrlParser: true});

const connectDb=mongoose.connection;

connectDb.on('error', function(err){
    console.log(error("Mongoose default connection has occured "+err+" error"));
});

app.use(async(req,res,next)=>{
    req.context={
        models,
        me:await models.User.findByLogin('topgyal'),
    };
    next();
});

//middlewares,routes

//to reinitialize database on every Express server start
const eraseDatabaseOnSync=true;
 
connectDb.then(async()=>{
    if(eraseDatabaseOnSync){
        await Promise.all([
            models.User.deleteMany({}),
            models.Message.deleteMany({}),
        ]);
        createUsersWithMessages();
    }
    app.listen(process.env.PORT,()=>
        console.log(`App listening on port ${process.env.PORT}`),
        );
});

//seed database
const createUsersWithMessages=async()=>{
    const firstUser=new models.User({
        username:'topgyal',
    });

    //associate message with user by reference user identifier
    const firstMessage=new models.Message({
        text:'First app to learn mongoose and mongodb',
        user:firstUser.id,
    })

    const message2=new models.Message({
        text:'this is fun',
        user:firstUser.id,
    })
    await firstMessage.save();
    await message2.save();
    await firstUser.save();
}