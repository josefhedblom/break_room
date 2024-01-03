import { connect } from "mongoose";

const dbString = process.env.DB_STRING;

const connectDB = async () => {
  try {
    await connect(dbString);
    console.log("Connected to database....");
  } catch (error) {
    console.error(error);
    console.log("Error");
    process.exit(1);
  }
};

export default connectDB;
