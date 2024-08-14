import mongoose from "mongoose";
import { DB_NAME } from "../constants.js";

const connectDB = async () => {
    try {
        const connectionInstance = await mongoose.connect(`${process.env.MONGO_URI}/${DB_NAME}`);
        // connection string
        console.log(`\nDatabase connected successfully !! DB HOST: ${connectionInstance.connection.host}`);
    }
    catch (err) {
        console.log("Database Connection Failure: \n", err);
        process.exit(1);
    }
}

export default connectDB;