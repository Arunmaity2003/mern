const router = require("express").Router()
const bcrypt = require("bcryptjs")
const jwt = require("jsonwebtoken")
const user = require("../models/user.model.js")
const {authenticationToken} = require("./userAuth.router.js")

//sign up route
router.post("/sign-up", async (req, res) => {
    try {
        const { username, email, password, address } = req.body;

        //check for the length of the username if it is more than 3
        if (username.length < 4) {
            return res
                .status(400)
                .json({ message: "Username should be greater than 3" })
        }

        //check for username existance
        const existingUser = await user.findOne({ username: username })
        if (existingUser) {
            return res
                .status(400)
                .json({ message: "Username already exists" })
        }

        //check for username existance
        const existingEmail = await user.findOne({ email: email })
        if (existingEmail) {
            return res
                .status(400)
                .json({ message: "Email already exists" })
        }

        //check for the password length
        if (password.length < 6) {
            return res
                .status(400)
                .json({ message: "password length should be greater than 5" })
        }
        const hashedPass = await bcrypt.hash(password,10);

        //create new user
        const newUser = new user({
            username: username,
            email: email,
            password: hashedPass,
            address: address
        })

        await newUser.save();
        return res
            .status(200)
            .json({ message: "Signup successfully." })

    } catch (error) {
        res.status(500).json({ message: "Error while signup" })
    }
})

//sign in route
router.post("/sign-in",async (req,res) => {
    try {
        const { username,password } = req.body;

        const existingUser = await user.findOne({username})

        if(!existingUser){
            res.status(500).json({ message: "Invalid user credentials." })
        }

        await bcrypt.compare(password,existingUser.password,(err,data) => {
            if(data){
                const authClaims = [
                    {
                        name:existingUser.username
                    },
                    {
                        role:existingUser.role
                    }
                ]
                const token = jwt.sign({authClaims},process.env.SECRETE,{expiresIn:"30d"})
                res.status(200).json({ 
                    id:existingUser._id,
                    role:existingUser.role,
                    token:token
                 })
            }else{
                res.status(400).json({ message: "Invalid user credentials." })
            }
        })
    } catch (error) {
        res.status(500).json({ message: "Error while login" })
    }
})

//get user information
router.get("/get-user-information",authenticationToken,async (req,res) => {
    try {
        const { id } = req.headers;
        const data = await user.findById(id).select("-password")
        return res.status(200).json(data)
    } catch (error) {
        res.status(500).json({ message: "Error while geting user information." })
    }
})

//update user address
router.put("/update-address",authenticationToken,async (req,res) => {
    try {
        const { id } = req.headers;
        const {address} = req.body
        await user.findByIdAndUpdate(id,{address:address})
        return res.status(200).json({message:"Address updated successfully."})
    } catch (error) {
        res.status(500).json({ message: "Error while geting user information." })
    }
})

module.exports = router