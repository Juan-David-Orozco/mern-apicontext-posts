import app from './app.js'
import {connectDB} from './db.js'

connectDB()

app.listen(4000)
console.log('Server runing, port:', 4000)
