import { User } from "../models/userModel.models.js";
import jwt from 'jsonwebtoken';
import bcrypt, { hash } from 'bcrypt';
import validator from 'validator';



// login user

const loginUser = async (req, res) => {
    
    const {email, password} = req.body;

    try {

        const user = await User.findOne({email})
        if(!user){
            return res.json({success: false, message: "User dosen't exist"})
        }
        
        const isPassMatch = await bcrypt.compare(password, user.password)
        if(!isPassMatch){
            return res.json({success: false, message: "Password incorrect"})
        }

        const token = createToken(user._id)
        res.json({success: true, token})
    
    } catch (error) {
        console.log(error);
        res.json({success: false, message: "User not found"})
    }
}


const createToken = (id) => {
    return jwt.sign({id}, process.env.JWT_SECRET)
}


// register user

const registerUser = async (req, res) => {

    const {name, email, password} = req.body
    

    try {
        //checking if user already exists
        const exist = await User.findOne({email})
        if(exist){
            return res.json({success: false, message: "User already exists."})
        }

        // validating email format and strong password
        if(!validator.isEmail(email)){
            return res.json({success: false, message: "Enter valid email."})
        }

        if(password.length<8){
            return res.json({success: false, message: "Enter strong password."})
        }

        // hashing user password 
        const salt = await bcrypt.genSalt(10)
        const hashedPassword = await bcrypt.hash(password, salt);

        const newUser = new User({
            name: name,
            email: email,
            password: hashedPassword
        })

        const user = await newUser.save();
        const token = createToken(user._id)
        res.json({success: true, token})

    } catch (error) {
        console.log(error);
        res.json({success: false, message: "User not registered"})
    }
}

export {loginUser, registerUser}