import express from 'express'
import cors from 'cors'
import 'dotenv/config'
import cookieParser from 'cookie-parser'
import connectDB from './config/mongodb.js'

import authRouter from './routes/authRoutes.js'

const app = express()
const port = process.env.PORT || 3000

connectDB();

app.use(express.json())
app.use(cookieParser())
app.use(cors({credentials:true}))


//API end point
app.get("/",(req,res) => {
    res.send("Buddy everything is now ready to start")
})

app.use('/api/auth',authRouter)
app.listen(port,() => console.log(`app is runnin on the port : ${port}`))