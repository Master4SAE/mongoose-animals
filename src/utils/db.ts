import mongoose from 'mongoose';
import dotenv from 'dotenv';
dotenv.config();

const mongoConnect = async () => {
  // Connect to MongoDB
  try {
    const connection = await mongoose.connect(process.env.DB_URL as string);
    console.log('DB connected successfully');
    return connection;
  } catch (error) {
    console.log(process.env.DB_URL)
    console.error('Connection to db failed: ', (error as Error).message);
  }
};

export default mongoConnect;
