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

app.use("/api/auth",authRouter)


app.use((err,req,res,next)=>{
    const statusCode = err.statusCode || 500;
    const message = err.message || "Internal Server Error"

    res.status(statusCode).json({
        success:false ,
        statusCode ,
        message
    })
})