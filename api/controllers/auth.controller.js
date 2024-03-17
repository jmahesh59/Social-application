import User from "../models/user.model.js"
import bcryptjs from 'bcryptjs';



export const signup = async (req , res)=>{
    const { userName ,email ,  password } = req.body

    if(!email ||!userName || !password ||userName === "" || email=== "" ||password=== ""){
       return  res.status(400).json({message:"All fields are required"})
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
     res.json(error.message)
   }
   

   
  
}