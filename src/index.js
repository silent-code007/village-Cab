// require("dotenv").config({path:"./env"});
import dotenv from "dotenv";
import mongoose from "mongoose";
import connectToDatabase from "./db/icabDb.js";
import express from "express";
dotenv.config({ path:'./env' });
const app = express();
connectToDatabase().then(() =>{
    app.listen(process.env.PORT || 5000),() => {
        console.log(`Server is running ar port ${process.env.PORT || 5000}`);
    }
}).catch((err) => {
    console.log("Error in connecting to database",err.message)
})
