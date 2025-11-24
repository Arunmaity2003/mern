const router = require("express").Router()

const User = require("../models/user.model.js")
const { authenticationToken } = require("./userAuth.router.js")

//add book to faviourite
router.put("/add-to-faviourite",authenticationToken,async (req,res) => {
    try {
        const {bookid,id} = req.headers;
        const userData = await User.findById(id)
        const isBookFaviourite = userData.favourites.includes(bookid)
        if(isBookFaviourite){
            return res.status(200).json({message:"Book is already in favourite."})
        }
        await User.findByIdAndUpdate(id,{$push:{favourites:bookid}})
        return res.status(200).json({message:"Book added to favourites successfully."})
    } catch (error) {
        res.status(500).json({message:"Error to add in the faviourite"})
    }
})


//delete from faviourite
router.put("/delete-from-faviourite",authenticationToken,async (req,res) => {
    try {
        const {bookid,id} = req.headers;
        const userData = await User.findById(id)
        const isBookFaviourite = userData.favourites.includes(bookid)
        if(isBookFaviourite){
            await User.findByIdAndUpdate(id,{$pull:{favourites:bookid}})
        }
        return res.status(200).json({message:"Book removed from favourites successfully."})
    } catch (error) {
        res.status(500).json({message:"Error to delete from faviourite"})
    }
})

//get faviourite books of a perticuler user
router.get("/get-faviourite-books",authenticationToken,async (req,res) => {
    try {
        const {id} = req.headers;
        const userData = await User.findById(id).populate("favourites")
        const faviouriteBooks = userData.favourites
        
        return res.json({
            status:"Success",
            data:faviouriteBooks
        })
    } catch (error) {
        res.status(500).json({message:"Error to get faviourite books of a perticuler user"})
    }
})

module.exports = router;