import mongoose from "mongoose";
import { MONGODB_URI } from "./config.js";

//const URI = process.env.MONGOOSE_URI ? process.env.MONGOOSE_URI : 'mongodb://localhost/postsDB';

export async function connectDB () {
  try {
    await mongoose.connect(MONGODB_URI);
    //console.log("Connected to", db.connection.name)
  } catch (error) {
    console.log(error)
  }
}

mongoose.connection.on("connected", () => {
  console.log("Mongodb is connected to", mongoose.connection.db.databaseName);
});

