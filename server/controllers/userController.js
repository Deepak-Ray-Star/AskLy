import User from "../models/User.js";
import jwt from 'jsonwebtoken'
import bcrypt from "bcryptjs";
import Chat from "../models/Chat.js";

const generateToken = (id) => {
    return jwt.sign({ id }, process.env.JWT_SECRET, {
        expiresIn: '30d'
    })
}



// api to register user
export const registerUser = async (req, res) => {
    const { name, email, password } = req.body;

    if (!name || !email || !password) {
        return res.json({ success: false, message: "missing details" })
    }

    try {
        const userExists = await User.findOne({ email })

        if (userExists) {
            return res.json({ success: false, message: 'user already exists' })
        }

        const salt = await bcrypt.genSalt(10)
        const hashedPassword = await bcrypt.hash(password, salt)

        const user = await User.create({
            name, email, password: hashedPassword
        })

        const token = generateToken(user._id)

        res.json({ success: true, token })


    } catch (error) {
        res.json({ success: false, message: error.message })
    }
}

// api to login user

export const loginUser = async (req, res) => {
    const {email, password} = req.body;

    try {

        const user = await User.findOne({email})
        if(user){
            const isMatch = await bcrypt.compare(password, user.password)

            const token = generateToken(user._id)
 
            if(isMatch){
                return res.json({success:true, token})
            }
        }
        return res.json({ success: false, message: "Invalid email or password" })

        
    } catch (error) {
        res.json({ success: false, message: error.message })
    }
}

// get user data
export const getUser = async (req, res)=>{
    try {
        const user = req.user;
        return res.json({success:true, user})
    } catch (error) {
        res.json({ success: false, message: error.message })
    }
}

// api to get pusblished images 
export const getPublishedImages = async (req, res)=>{
    try {
        const publishedImageMessages = await Chat.aggregate([
            {$unwind:"$messages"},
            {
                $match:{
                    "messages.isImage":true,
                    "messages.isPublished":true
                }
            },
            {
                $project: {
                    _id: 0,
                    imageUrl: "$messages.content",
                    userName: "$userName"
                }
            }
        ])

        res.json({success:true, images: publishedImageMessages.reverse()})
        
    } catch (error) {
        res.json({ success: false, message: error.message })
    }
}