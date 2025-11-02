const express = require('express')
const app = express()
require('dotenv').config()
require("./conn/conn.js")

app.get("/",(req,res) => {
    res.send("Your app is running")
})

const port = process.env.PORT || 3000

app.listen(port,() => {
    console.log(`Your app is running on the port : http://localhost:${port}`);
})

