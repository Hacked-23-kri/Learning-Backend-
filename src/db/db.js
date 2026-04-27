import mongoose from "mongoose";
import { DB_NAME } from "../constants.js";  

const connectDB = async function connectDB() {
  try {
    const connectionInstance = await mongoose.connect(`${process.env.MONGO_URI}/${DB_NAME}`);
    console.log(`MongoDB Connected !! Host: ${connectionInstance.connection.host}`);
  } 
  catch (error) {
    console.error("Error connecting to MongoDB:", error);
    process.exit(1); // Exit the process with an error code
  }
}

export default connectDB;