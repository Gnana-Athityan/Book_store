import express from 'express'
import mongoose from 'mongoose'
import { Mongo } from './config.js'
import { Book } from './models/bookmodel.js'
import booksroute from './routes/booksroute.js'
import cors from 'cors'
const app = express()
app.use(cors(
        {
                origin: 'https://book-store-64qi-frontend.vercel.app',
                methods: ['GET','HEAD','PUT','PATCH','POST','DELETE'],
                credentials: true
        
            }
        ))
        
app.use(express.json());
app.use((req, res, next) => {
  res.header('Access-Control-Allow-Origin', 'https://book-store-frontend-red.vercel.app');
  res.header('Access-Control-Allow-Methods', 'GET,POST,PUT,DELETE,OPTIONS');
  res.header('Access-Control-Allow-Headers', 'Content-Type, Authorization');
  res.header('Access-Control-Allow-Credentials', 'true');
  next();
});
app.use('/books', booksroute)


mongoose.connect(Mongo).then(
    ()=>{
        console.log('Connected to MongoDB')
    }
).catch(
    (err)=>{
        console.log('Error connecting to MongoDB')
        console.log(err)
    }
)
app.listen(process.env.PORT||3000)
