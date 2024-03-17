import User from "../models/user.model.js"
import bcryptjs from 'bcryptjs';
import { errorHandler } from "../utils/error.js";



export const signup = async (req , res , next)=>{
    const { userName ,email ,  password } = req.body

    if(!email ||!userName || !password ||userName === "" || email=== "" ||password=== ""){
       return  next(errorHandler(400,"All fields are required"))
    }

    const hashPassword = bcryptjs.hashSync(password,10);

    const newUser = new User({
        userName:userName.toLowerCase(),
        password:hashPassword,
        email
    })
   try {
     await  newUser.save();

    res.send("user created successfully")
   } catch (error) {
     next(error)
   }
   

   
  
}