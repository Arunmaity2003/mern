const express = require('express')
const app = express()
require('dotenv').config()
require("./conn/conn.js")
const user = require("./routes/user.router.js")
const Books = require("./routes/book.router.js")

app.use(express.json())
app.get("/",(req,res) => {
    res.send("Your app is running")
})

//routes
app.use("/api/v1",user)
app.use("/api/v1",Books)

const port = process.env.PORT || 3000

app.listen(port,() => {
    console.log(`Your app is running on the port : http://localhost:${port}`);
})

