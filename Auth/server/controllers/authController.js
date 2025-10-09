import bcrypt from 'bcryptjs'
import jwt from 'jsonwebtoken'
import userModel from '../models/userModel.js'
import transporter from '../config/nodemailer.js'

export const register = async (req, res) => {
    const { name, email, password } = req.body

    if (!name || !email || !password) {
        return res.json({ success: false, message: "Missing Details" })
    }
    try {

        const existingUser = await userModel.findOne({ email })

        if (existingUser) {
            return res.json({ success: false, message: "User is already exists" })
        }
        const hashedPassword = await bcrypt.hash(password, 10)
        const user = new userModel({ name, email, password: hashedPassword })
        await user.save()

        const token = jwt.sign({ id: user._id }, process.env.JWT_SECRET, { expiresIn: '7d' })

        res.cookie('token', token, {
            httpOnly: true,
            secure: process.env.NODE_ENV === 'production',
            sameSite: process.env.NODE_ENV === 'production' ? 'none' : 'strict',
            maxAge: 7 * 24 * 60 * 60 * 1000
        })

        //sending welcome email
        const mailOptions = {
            from: process.env.SENDER_EMAIL,
            to: email,
            subject: "Welcme to CodeQueue",
            text: `Welcme to CodeQueue. Your account has been created with email id: ${email}`
        }
        await transporter.sendMail(mailOptions)

        return res.json({ success: true })

    } catch (error) {
        console.error("Register error:", error);
        res.status(500).json({ success: false, message: error.message });
    }

}


export const login = async (req, res) => {
    const { email, password } = req.body
    if (!email || !password) {
        return res.json({ success: false, message: "Email or password is required" })
    }

    try {
        const user = await userModel.findOne({ email })
        if (!user) {
            return res.json({ success: false, message: "Invalid email or password" })
        }

        const ismatch = await bcrypt.compare(password, user.password)
        if (!ismatch) {
            return res.json({ success: false, message: "Invalid email or password" })
        }

        const token = jwt.sign({ id: user._id }, process.env.JWT_SECRET, { expiresIn: '7d' })

        res.cookie('token', token, {
            httpOnly: true,
            secure: process.env.NODE_ENV === 'production',
            sameSite: process.env.NODE_ENV === 'production' ? 'none' : 'strict',
            maxAge: 7 * 24 * 60 * 60 * 1000
        })
        return res.json({ success: true })
    } catch (error) {
        return res.json({ success: false, message: error.message })
    }
}


export const logout = async (req, res) => {
    try {
        res.clearCookie('token', {
            httpOnly: true,
            secure: process.env.NODE_ENV === 'production',
            sameSite: process.env.NODE_ENV === 'production' ? 'none' : 'strict',
            maxAge: 7 * 24 * 60 * 60 * 1000
        })
        return res.json({ success: true, message: "Succesfully logged out" })
    } catch (error) {
        return res.json({ success: false, message: error.message })
    }
}