import { Router } from 'express'
import { createPost, deletePost, getPost, getPosts, updatePost } from '../controllers/post.controllers.js'

const router = Router()

router.get('/posts', getPosts)

router.post('/posts', createPost)

router.put('/posts', updatePost)

router.delete('/posts', deletePost)

router.get('/posts/:id', getPost)


export default router