import Post from '../models/Post.js'

export const getPosts = async (req, res) => {
  const posts = await Post.find()
  return res.json(posts)
}

export const createPost = async (req, res) => {
  const {title, description} = req.body
  const newPost = new Post({title, description})
  await newPost.save()
  return res.json(newPost)
}

export const updatePost = async (req, res) => {
  try {
    console.log(req.body, req.params)
    const updatePost = await Post.findByIdAndUpdate(req.params.id, req.body, {new: true})
    console.log(updatePost)
    return res.json(updatePost)
  } catch (error) {
    console.log(error.mensaje)
    return res.json("error.mensaje")
  }
}

export const deletePost = async (req, res) => {
  const removePost = await Post.findByIdAndDelete(req.params.id)
  console.log(removePost)
  if(!removePost) return res.sendStatus(404)
  return res.sendStatus(204)
}

export const getPost = async (req, res) => {
  const post = await Post.findById(req.params.id)
  if (!post) return res.sendStatus(404)
  return res.json(post)
  /*
  try {
    const post = await Post.findById(req.params.id)
    console.log(post)
    return res.json(post)
  } catch (error) {
    console.log(error.mensaje)
    return res.sendStatus(404)
  }
  */
}