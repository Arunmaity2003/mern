const router = require("express").Router()
const jwt = require("jsonwebtoken")
const User = require("../models/user.model.js")
const { authenticationToken } = require("./userAuth.router.js")
const Book = require("../models/books.model.js")

//add book --admin
router.post("/add-book", authenticationToken, async (req, res) => {
    try {
        // const userId = req.user.id
        const { id } = req.headers;
        const user = await User.findById(id);
        if (user.role !== "admin") {
            return res.status(400).json({ message: "You are not allowed to add books." })
        }
        const book = new Book({
            url: req.body.url,
            title: req.body.title,
            author: req.body.author,
            price: req.body.price,
            desc: req.body.desc,
            language: req.body.language
        })
        await book.save()
        res.status(200).json({ message: "Book added successfully." })

    } catch (error) {
        console.log(error)
        res.status(500).json({ message: "Error while adding books." })
    }
})

//update book --admin
router.post("/update-book", authenticationToken, async (req, res) => {
    try {
        const { id } = req.headers;
        const user = await User.findById(id);
        if (user.role !== "admin") {
            return res.status(400).json({ message: "You are not allowed to add books." })
        }
        const book = new Book({
            url: req.body.url,
            title: req.body.title,
            author: req.body.author,
            price: req.body.price,
            desc: req.body.desc,
            language: req.body.language
        })
        await book.save()
        res.status(200).json({ message: "Book added successfully." })

    } catch (error) {
        console.log(error)
        res.status(500).json({ message: "Error while adding books." })
    }
})

module.exports = router;