// user login or register models designing
import { Schema } from "mongoose";
import mongoose from "mongoose";

const userSchema = new Schema({
    username:{
        type:String,
        auto:true,
        required:true,
        unique:true,
        lowercase:true,
        trim:true,
        index:true,
    },
    password: {
        type: String,
        required: [true, "Password is required"],
        minlength: 8,
    },
    refreshToken: {
        type: String,
        default: null
    },
    isVerified: {
        type: Boolean,
        default: false
    },
    isBlocked: {
        type: Boolean,
        default: false
    },
   
    email:{
        type: String,
        required: true,
        unique: true,
        lowercase:true,
        trim: true
    },
    fullname: 
    {
        type: String,
        required: true,
        trim: true,
        minlength: 3,
        maxlength: 50,
        index:true 
    },
    avatar:{
        type: String, // cloudinary url
        required: true
    }
    }
,{timestamps:true})

export const User = mongoose.model("User",userSchema);