import express from 'express'
import postRoutes from './routes/posts.routes.js'
import {connectDB} from './db.js'

const app = express()
connectDB()

app.use(postRoutes)

app.listen(4000)
console.log('Server runing, port:', 4000)
