const express = require('express');
const mongoose = require('mongoose');
const app = express();

//mongoDB connection string
const url = "mongodb+srv://admin:admin@cluster0-wt5eh.mongodb.net/retryWrites=true&w=majority"

app.use(express.json())

const apiroutes = require('./routes/api-routes');
app.use('/', apiroutes); //using routes specified externally
mongoose.connect(url,{useNewUrlParser: true, useUnifiedTopology: true})
  .then(()=>{
    app.listen(process.env.PORT || 3000);
    console.log('database connected!');})
  .catch(err => console.log(err));


