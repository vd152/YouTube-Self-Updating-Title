
var mongoose = require('mongoose');
require("dotenv").config()

var URI = process.env.MONGO_URL_PROD;

const connectDB = async ()=>{
    await mongoose.connect(URI, {useUnifiedTopology: true ,useNewUrlParser: true});
    console.log("db connected");
}

module.exports = connectDB;