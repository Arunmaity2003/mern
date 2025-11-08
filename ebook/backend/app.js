const express = require('express')
const app = express()
require('dotenv').config()
const cors = require("cors")

require("./conn/conn.js")
const user = require("./routes/user.router.js")
const Books = require("./routes/book.router.js")
const Faviourite = require("./routes/favourite.router.js")
const Cart = require("./routes/cart.router.js")
const Order = require("./routes/order.router.js")

app.use(cors())

app.use(express.json())
app.get("/",(req,res) => {
    res.send("Your app is running")
})

//routes
app.use("/api/v1",user)
app.use("/api/v1",Books)
app.use("/api/v1",Faviourite)
app.use("/api/v1",Cart)
app.use("/api/v1",Order)


const port = process.env.PORT || 3000

app.listen(port,() => {
    console.log(`Your app is running on the port : http://localhost:${port}`);
})

