const ErrorHandler = require('../utils/errorhandler');
const catchAsynError = require('../middleware/catchAsynError');
const User = require('../models/userModel');

// Register a User
exports.registerUser = catchAsynError(async(req,res,next)=>{
    const {name,email,password} = req.body;

    const user =  await User.create({
        name,email,password,
        avatar:{
            public_id:"This is the sample id",
            url:"profileUrl"
        }
    });

    res.status(201).json({success:true,user})
}); 