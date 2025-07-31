import mongoose from "mongoose";

export const connectDB = async () => {
    try{
       await mongoose.connect(process.env.MONGO_URI, {
        useNewUrlParser: true,
        useUnifiedTopology: true
       });
       console.log('MONGODB connected');

    } catch(error) {
       console.error('MONGODB connection error', error.message);
       process.exit();
    }
};