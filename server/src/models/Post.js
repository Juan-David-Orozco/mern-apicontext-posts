import { Model, Schema } from "mongoose";

const postSchema = new Schema({
  title: {
    type: String,
    required: true,
    trim: true
  },
  description: {
    type: String,
    required: true,
    trim: true
  },
  image: {
    url: String,
    public_id: String
  }
})

export default Model('Post', postSchema)