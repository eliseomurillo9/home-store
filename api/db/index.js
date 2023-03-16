import { connect } from 'mongoose';
import dotenv from 'dotenv';
dotenv.config();

const dbConnection = async () => {
  try {
    await connect(process.env.MONGO_CONNECTION);
  } catch (error) {
    console.error(error);
    process.exit(1);
  }
  
  // use `await mongoose.connect('mongodb://user:password@127.0.0.1:27017/test');` if your database has auth enabled
}

export default dbConnection