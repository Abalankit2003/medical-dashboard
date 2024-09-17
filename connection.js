import mongoose from "mongoose";


const connection = mongoose
  .connect(
    "mongodb+srv://ankit:ankit@medial-dashboard.y6pl0.mongodb.net/?retryWrites=true&w=majority&appName=medial-dashboard"
  )
  .then(() => console.log("mongoDB connection successful"))
  .catch((err) => console.log("mongoDB connection failure: " + err));

export default connection;
