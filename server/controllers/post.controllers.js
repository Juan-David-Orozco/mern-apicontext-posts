import Post from '../models/Post.js'
import { uploadImage, deleteImage } from '../libs/cloudinary.js'
import fs from 'fs-extra'

export const getPosts = async (req, res) => {
  try {
    const posts = await Post.find()
    if(!posts) return res.status(404).json({message: "Posts not found"})
    return res.status(200).json(posts)
  } catch (error) {
    return res.status(500).json({message: error.message})
  }
}

export const getPost = async (req, res) => {
  try {
    const post = await Post.findById(req.params.id)
    if (!post) return res.status(404).json({message: "Post not found"})
    return res.status(200).json(post)
  } catch (error) {
    return res.status(500).json({message: error.message})
  }
}

export const createPost = async (req, res) => {
  try {
    const {title, description} = req.body
    let image;
    if(req.files && req.files.image) {
      const result = await uploadImage(req.files.image.tempFilePath)
      await fs.remove(req.files.image.tempFilePath)
      image = {
        url: result.secure_url,
        public_id: result.public_id
      }
    }
    const newPost = new Post({title, description, image})
    await newPost.save()
    return res.status(200).json(newPost)
  } catch (error) {
    return res.status(500).json({message: error.message})
  }
}

export const updatePost = async (req, res) => {
  try {
    const {title, description} = req.body
    // Found post if exists
    const post = await Post.findById(req.params.id)
    if (!post) return res.status(404).json({message: "Post not found"})
    // Define data to storage in DB
    const data = {title, description}
    // Validate for the image exist
    if (req.body.image !== ''){
      if(req.files && req.files.image) {
        // Delete Image of the post found
        const ImageId = post.image.public_id
        if(ImageId) await deleteImage(ImageId)
        // Create new Image for the post
        const newImage = await uploadImage(req.files.image.tempFilePath)
        await fs.remove(req.files.image.tempFilePath)
        // Asigned new data to image
        data.image = {
          public_id: newImage.public_id,
          url: newImage.secure_url
        }
      }
    }
    console.log(data)
    const updatePost = await Post.findByIdAndUpdate(req.params.id, data, {new: true})
    if (!updatePost) return res.status(404).json({message: "Post not updated"})
    return res.status(200).json(updatePost)
  } catch (error) {
    return res.status(500).json({message: error.message})
  }
}

export const deletePost = async (req, res) => {
  try {
    const removePost = await Post.findByIdAndDelete(req.params.id)
    if(!removePost) return res.status(404).json({message: "Post not found"})
    // Validate image in Clodinary
    if(removePost.image.public_id){
      const deletePost = await deleteImage(removePost.image.public_id)
      if(deletePost.result == "ok") console.log("Remove image success")
    }
    return res.sendStatus(204)
  } catch (error) {
    return res.status(500).json({message: error.message})
  }
}