const router = require('express').Router()
const { authenticationToken } = require("./userAuth.router.js")
const Book = require("../models/books.model.js")
const Order = require("../models/order.model.js")
const User = require("../models/user.model.js")

//place order
router.post("/place-order", authenticationToken, async (req, res) => {
    try {
        const { id } = req.headers;
        const { order } = req.body;
        for (const orderData of order) {
            const newOrder = new Order({ user: id, book: orderData._id })
            const orderDataFromDb = await newOrder.save()
            //saving order in user model
            await User.findByIdAndUpdate(id, {
                $push: { order: orderDataFromDb._id }
            })

            //clearing cart
            await User.findByIdAndUpdate(id, {
                $pull: { cart: orderDataFromDb._id }
            })
        }
        return res.json({
            status:"Success",
            message:"Order placed successfully."
        })
    } catch (error) {
        console.error(error)
        return res.status(500).json({message:"Error during place order"})
    }
})

//Get order history of a perticuler user
router.get("/get-order-history", authenticationToken, async (req, res) => {
    try {
        const { id } = req.headers;
        const userData = await User.findById(id).populate({
            path:"orders",
            populate:{path:"book"}
        })
        const ordersData = userData.orders.reverse()
        return res.json({
            status:"Success",
            data:ordersData
        })
    } catch (error) {
        console.error(error)
        return res.status(500).json({message:"Error during getting the order history"})
    }
})

//Get all orders
router.get("/get-all-orders", authenticationToken, async (req, res) => {
    try {
        const userData = await Order.find()
        .populate({
            path:"book"
        })
        .populate({
            path:"user"
        })
        .sort({createdAt:-1})

        return res.json({
            status:"Success",
            data:userData
        })
    } catch (error) {
        console.error(error)
        return res.status(500).json({message:"Error during getting all orders"})
    }
})

//Update order
router.put("/update-status/:id", authenticationToken, async (req, res) => {
    try {
        const { id } = req.params;
        await Order.findByIdAndUpdate(id,{status:req.body.status})//

        return res.json({
            status:"Success",
            message:"Status updated successfully."
        })
    } catch (error) {
        console.error(error)
        return res.status(500).json({message:"Error during update orders"})
    }
})

module.exports = router;