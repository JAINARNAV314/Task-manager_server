// const connectToMongo=require("./db");
var cors = require('cors')
const express = require('express')
const mongoose=require("mongoose");

// connectToMongo();
require('dotenv').config()
const bodyParser =require('body-parser');



const app = express()
const port =process.env.PORT|| 5000
app.use(cors())
// app.use(express.json());
//heroku
const mongoURI=`mongodb+srv://${process.env.USERNAME}:${process.env.PASSWORD}@cluster0.agn0jto.mongodb.net/projectrepo?retryWrites=true&w=majority`

    mongoose.connect(mongoURI,
      { useNewUrlParser: true, useUnifiedTopology: true },()=>{
        console.log("connected to mongo successfully");
    })


//Available routes
app.use(bodyParser.json({ limit: '30mb', extended: true }))
app.use(bodyParser.urlencoded({ limit: '30mb', extended: true }))

app.use('/api/auth',require('./routes/auth'));
app.use('/api/project',require('./routes/project'));
app.use('/api/task',require('./routes/task'));
app.use('/api/media',require('./routes/media'));
// app.use('/api/media',require('./routes/media'))

app.get('/',(req,res)=>{
  res.send({msg:"success",status:400})
})

app.listen(port, () => {
  console.log(`project manager  listening at http://localhost:${port}`)
})