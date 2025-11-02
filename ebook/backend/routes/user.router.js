const router = require("express").Router()

const user = require("../models/user.model.js")

//sign up
router.post("/sign-up",async(req,res) => {
    try {
        const { username, email, password, address } = req.body;

        //check for the length of the username if it is more than 3
        if(username.length < 4){
            return res
                .status(400)
                .json({message: "Username should be greater than 3"})
        }

        //check for username existance
        const existingUser = await user.find({username:username})
        if(existingUser){
            return res
                .status(400)
                .json({message: "Username already exists"})
        }

        //check for username existance
        const existingEmail = await user.find({email:email})
        if(existingEmail){
            return res
                .status(400)
                .json({message: "Email already exists"})
        }
    } catch (error) {
        res.status(500).json({message:"Internal server error"})
    }
})

module.exports = router