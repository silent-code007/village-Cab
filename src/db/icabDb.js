import mongoose from "mongoose";
import { DB_NAME } from "../constants.js";


const connectToDatabase = async () => {
    try {
        const response = await mongoose.connect(`${process.env.MONGO_URL}/${DB_NAME}`);
        // const dataFetched = response?.data;
        console.log("----------------Database connected successfully---------------", response.connection.port);
    } catch (err) {
        console.log("Database connection error.", err.message);
        process.exit(1);
    }
}

export default connectToDatabase;