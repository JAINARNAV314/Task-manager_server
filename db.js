const mongoose=require("mongoose");
const dotenv=require('dotenv')
dotenv.config()
// const mongoURI="mongodb://127.0.0.1:27017/manager?readPreference=primary&appname=MongoDB%20Compass&directConnection=true&ssl=false"
const mongoURI=`mongodb+srv://${process.env.USERNAME}:${process.env.PASSWORD}@cluster0.agn0jto.mongodb.net/projectrepo?retryWrites=true&w=majority`
const connectToMongo=()=>{
    mongoose.connect(mongoURI,()=>{
        console.log("connected to mongo successfully");
    })
}
module.exports=connectToMongo;