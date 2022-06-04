import express from 'express'
import morgan from "morgan";
import fileUpload from 'express-fileupload'
import { dirname, join } from 'path'
import { fileURLToPath } from 'url'

import postRoutes from './routes/posts.routes.js'

const app = express()
const __dirname = dirname(fileURLToPath(import.meta.url))

// Middlewares
app.use(morgan("dev"));
app.use(express.json())
app.use(fileUpload({
  useTempFiles: true,
  tempFileDir: './upload'
}))

// Routes
app.use(postRoutes)

console.log(__dirname)
app.use(express.static(join(__dirname, '../client/build')))

export default app