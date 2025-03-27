import mongoose from "mongoose";
import 'dotenv/config'
const url = process.env.MONGODB_URL
import chalk from "chalk";

const connectDB = async () => {
    try {
      const conn = await mongoose.connect(url, {dbName:"ecommerce"},{
        useNewUrlParser: true,
      });
      console.log(chalk.bgGreen.white('connected to MongoDB'));
    } 
    catch (error) {
      console.error(error.message);
      process.exit(1);
    }
}

export default connectDB;
