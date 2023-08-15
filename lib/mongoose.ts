import { Console } from 'console';
import mongoose from 'mongoose';

let isConnected=false; //variable to check if mongoose is connected

export const connectToDB=async()=>{
    mongoose.set('strictQuery',true); //to prevent unknown feild query

    if(!process.env.MONGODB_URL)return console.log('MONGO_URL NOT FOUND');
    
    if(isConnected)return console.log('already connected');

    try {
        await mongoose.connect(process.env.MONGODB_URL);
        
        isConnected=true;

        console.log('connected to mongodb');
    
    } catch (error) {
        console.log(error);
        
    }


}