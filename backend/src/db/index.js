import mongoose from "mongoose";
import { DATABASE_NAME } from "../constant.js";

const connectDB = async () => {
  try {
    const connectionInstance = await mongoose.connect(
      `mongodb+srv://dvverma9211:1GkvU0xKULaQfSA3@cluster0.gzxku.mongodb.net/`
    );
    // console.log("Connection success",connectionInstance)
  } catch (error) {
    console.log("MONGODB connection FAILED ", error);
    process.exit(1);
  }
};

export default connectDB;
