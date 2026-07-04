import mongoose from "mongoose";
const uri = process.env.MONGO_URL;

const connectDB = async () => {
  try {
    const conn = await mongoose.connect(uri);
    if (!conn) {
      throw new Error("Error while connection");
    }
    console.log("connection is successful!");
  } catch (error) {
    console.log(`error in connection to database ${error.message}`);
    process.exit(1);
  }
};

export default connectDB;
