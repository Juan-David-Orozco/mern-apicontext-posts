import app from './app.js'
import {connectDB} from './db.js'

connectDB()

app.listen(5000)
console.log('Server runing, port:', 5000)
