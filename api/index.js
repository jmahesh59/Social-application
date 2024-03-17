import express from 'express';
import mongoose from 'mongoose';
import dotenv from 'dotenv'
import authRouter from './routes/auth.routes.js'

dotenv.config();

mongoose.connect(process.env.MONGO).then(()=>{
    console.log("mongodb is connected")
})

const app = express();

app.use(express.json())
app.listen(3000,()=>{
    console.log('server  is running on port 3000')
});


// app.get('/',(req,res)=>{
//     res.send("test suceessfull")
// })

app.use("/api/auth",authRouter)