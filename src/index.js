// require("dotenv").config({path:"./env"});
import dotenv from "dotenv";
import mongoose from "mongoose";
import connectToDatabase from "./db/icabDb.js";

dotenv.config({ path:'./env' });

connectToDatabase();
/*import express from 'express';
const app = express();
(async ()=>{
    try{
   await mongoose.connect(`${process.env.MONGO_URI}/${DB_NAME}`){
    app.on('error', (error) => {
        console.error('MongoDB connection error:', error);
        throw error;
    })
    
    app.listen(process.env.PORT,() =>{
        console.log(`Server is running on port ${process.env.PORT}`);
        {process.env.PORT}
    })
   }
    }catch(error){
        console.log(error.message);
        throw error;
    }
})()
    */