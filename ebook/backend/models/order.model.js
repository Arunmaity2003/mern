const mongoose = require('mongoose')

const orderSchema = new mongoose.Schema({
    user: {
        type: mongoose.Schema.Types.ObjectId,
        ref: "user"
    },
    book: {
        type: mongoose.Schema.Types.ObjectId,
        ref: "books"
    },
    status: {
        type: String,
        default: "Order placed",
        enum: ["Order placed", "Out for delivery", "Delivered", "Canceled"]
    },
}, {
    timestamps: true
})

module.exports = mongoose.model("order", orderSchema)