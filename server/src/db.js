import mongoose from "mongoose";

//const URI = process.env.MONGOOSE_URI ? process.env.MONGOOSE_URI : 'mongodb://localhost/postsDB';

export async function connectDB () {
  try {
    const URI = 'mongodb://localhost/postsDB'
    const db = await mongoose.connect(URI);
    console.log("Connected to", db.connection.name)
  } catch (error) {
    console.log(error.mensaje)
  }
}

