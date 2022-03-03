const mongoose = require('mongoose');
require('../config/config.env')
// mongoose.connect(process.env.DB_URL,{useNewUrlParser:true,useUnifiedTopology:true,useCreateIndex:true}).then((data)=>{
//     console.log(` MongoDb Connected with server : ${data.connection.host} `);
// }).catch((err)=>{
//     console.log(err);
// });


const connectDatabase = () => {
    mongoose.connect("mongodb://localhost:27017/Ecommerce", { useNewUrlParser: true, useUnifiedTopology: true}).then((data) => {
        console.log(` MongoDb Connected with server : ${data.connection.host} `);
    })
   
}

module.exports = connectDatabase;