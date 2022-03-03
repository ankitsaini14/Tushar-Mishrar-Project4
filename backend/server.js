const app = require('./app');

const dotenv = require('dotenv');


// Handling Uncaugth Exception
process.on("uncaughtException",(err)=>{
    console.log(`Error:${err.message}`);
    console.log(`Shuting down the server due to uncaught Exception`)
    process.exit(1);
})

// use dotenv file
dotenv.config('./backend/config/config.env');


// database require.
const connectDatabase = require('./db/databse')




// connection 
connectDatabase();


// listen port
 const server = app.listen(PORT,()=>{
    console.log(`Server is workingon http://localhost:${PORT}`);
 
});


// umhandled Promise Rejection

process.on("unhandledRejection",err=>{
    console.log(`Error:${err.message}`);
    console.log("Shuting down the server due to unhandled Promise Rejection");
server.close(()=>{
    process.exit(1);
});

});
