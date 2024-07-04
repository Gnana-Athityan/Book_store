import express from 'express'
import mongoose from 'mongoose'
import { Mongo } from './config.js'
import { Book } from './models/bookmodel.js'
import booksroute from './routes/booksroute.js'
import cors from 'cors'
const app = express()
app.use(cors(
        {
                origin: ['https://book-store-two-peach.vercel.app'],
                methods: ['GET','HEAD','PUT','PATCH','POST','DELETE'],
                credentials: true
        
            }
        ))
        
app.use(express.json());
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
