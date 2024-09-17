import mongoose from "mongoose";
import dotenv from "dotenv";

dotenv.config();

const connection = mongoose
  .connect(process.env.MONGO)
  .then(() => console.log("mongoDB connection successful"))
  .catch((err) => console.log("mongoDB connection failure: " + err));

export default connection;
