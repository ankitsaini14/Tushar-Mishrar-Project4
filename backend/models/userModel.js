const mongoose = require('mongoose');
const validator = require('validator');
const bcrypt = require('bcryptjs');
// const jwt = require('');
const { modelName } = require('./productModel');


const userSchema = new mongoose.Schema({
    name:{
        type:String,
        required:[true,"Please enter your name."],
        maxLength:[20,"Name cannot exceed 20 characters."],
        minlength:[3,"Name must be more than 3 charcaters."]
    },
    email:{
        type:String,
        required:[true,"Please enter your email."],
        unique:true,
        validate:[validator.isEmail,"Please enter a valid email."]
    },
    password:{
        type:String,
        required:[true,"Please enter your password."],
        minlength:[8,"Password should be greater then 8 characters"],
        select:false
    },
    avatar:{
        public_id:{
            type:String,
            required:true
        },
        url:{
            type:String,
            required:true
        }
    },
    role:{
        type:String,
        default:"user"
    },
    resetPasswordToken:String,
    resetPasswordExpire:Date


});

module.exports = mongoose.model("User",userSchema);