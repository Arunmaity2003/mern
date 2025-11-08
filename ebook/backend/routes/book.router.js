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

// update book --admin
// router.put("/update-book", authenticationToken, async (req, res) => {
//     try {
//         const { bookId } = req.headers;
//         await Book.findByIdAndUpdate(bookId, {
//             url: req.body.url,
//             title: req.body.title,
//             author: req.body.author,
//             price: req.body.price,
//             desc: req.body.desc,
//             language: req.body.language
//         })
//         return res.status(200).json({ message: "Book updated successfully." })

//     } catch (error) {
//         console.log(error)
//         res.status(500).json({ message: "Error while updating book." })
//     }
// })

router.put("/update-book", authenticationToken, async (req, res) => {
    try {
        // Express automatically lowercases all header keys
        const { bookid } = req.headers;

        //Optional: verify admin 
        const { id } = req.headers;
        const user = await User.findById(id);
        if (!user || user.role !== "admin") {
            return res.status(403).json({ message: "You are not allowed to update books." });
        }

        //  Find and update
        const updatedBook = await Book.findByIdAndUpdate(
            bookid,
            {
                url: req.body.url,
                title: req.body.title,
                author: req.body.author,
                price: req.body.price,
                desc: req.body.desc,
                language: req.body.language
            },
            { new: true } // return the updated book
        );

        if (!updatedBook) {
            return res.status(404).json({ message: "Book not found." });
        }

        return res.status(200).json({
            message: "Book updated successfully."
        });
    } catch (error) {
        console.error(error);
        return res.status(500).json({ message: "Error while deleting book." });
    }
});


//delete book
router.delete("/delete-book",authenticationToken,async(req,res) => {
    try {
        const {bookid} = req.headers;
        await Book.findByIdAndDelete(bookid)
        return res.status(200).json({
            message: "Book deleted successfully."
        });
    } catch (error) {
        console.error(error);
        return res.status(500).json({ message: "Error while updating book." });
    }
})

//get all books
router.get("/get-all-books",async(req,res) => {
    try {
        const books = await Book.find().sort({createdAt:-1});
        return res.json({
            status:"Success",
            data: books
        });
    } catch (error) {
        console.error(error);
        return res.status(500).json({ message: "Error while get all books." });
    }
})

//get all books limit 4
router.get("/get-recent-books",async(req,res) => {
    try {
        const books = await Book.find().sort({createdAt:-1}).limit(4);
        return res.json({
            status:"Success",
            data: books
        });
    } catch (error) {
        console.error(error);
        return res.status(500).json({ message: "Error while get all books." });
    }
})

//get book by id
router.get("/get-book-by-id/:id",async(req,res) => {
    try {
        const { id } = req.params
        const book = await Book.findById(id)
        return res.json({
            status:"Success",
            data: book
        });
    } catch (error) {
        console.error(error);
        return res.status(500).json({ message: "Error while get book by id." });
    }
})

module.exports = router;