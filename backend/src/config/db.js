import mongoose from 'mongoose';
import dotenv from 'dotenv';
dotenv.config(); // Load environment variables from .env file

 export const connectDB = async () => { 
    try{
       await mongoose.connect(process.env.MONGO_URI);
       console.log("mongodb connected successfully");
    }catch (error) {
        console.error('Error connecting to MongoDB:', error);
        process.exit(1)// Exit the process with failure
         }
        }