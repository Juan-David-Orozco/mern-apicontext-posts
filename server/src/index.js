import express from 'express'
import postRoutes from './routes/posts.routes.js'

const app = express()

app.use(postRoutes)

app.listen(4000)
console.log('Server runing, port:', 4000)
