import Post from '../models/Post.js'
import { uploadImage, deleteImage } from '../libs/cloudinary.js'
import fs from 'fs-extra'

export const getPosts = async (req, res) => {
  try {
    //throw new Error('my new error!!!')
    const posts = await Post.find()
    return res.json(posts)
  } catch (error) {
    console.error(error.message)
    return res.status(500).json({message: error.message})
  }
}

export const createPost = async (req, res) => {
  try {
    const {title, description} = req.body

    let image;
    if(req.files.image) {
      const result = await uploadImage(req.files.image.tempFilePath)
      await fs.remove(req.files.image.tempFilePath)
      image = {
        url: result.secure_url,
        public_id: result.public_id
      }
    }

    const newPost = new Post({title, description, image})
    await newPost.save()
    return res.json(newPost)
  } catch (error) {
    console.error(error)
    return res.status(500).json({message: error.message})
  }
}

export const updatePost = async (req, res) => {
  try {
    const updatePost = await Post.findByIdAndUpdate(req.params.id, req.body, {new: true})
    return res.json(updatePost)
  } catch (error) {
    console.error(error.message)
    return res.status(500).json({message: error.message})
  }
}

export const deletePost = async (req, res) => {
  try {
    const removePost = await Post.findByIdAndDelete(req.params.id)
    if(!removePost) return res.sendStatus(404)

    if(removePost.image.public_id){
      const deletePost = await deleteImage(removePost.image.public_id)
      console.log(deletePost)
    }

    return res.sendStatus(204)
  } catch (error) {
    console.error(error.message)
    return res.status(500).json({message: error.message})
  }
}

export const getPost = async (req, res) => {
  try {
    const post = await Post.findById(req.params.id)
    if (!post) return res.sendStatus(404)
    return res.json(post)
  } catch (error) {
    console.error(error.message)
    return res.status(500).json({message: error.message})
  }
}