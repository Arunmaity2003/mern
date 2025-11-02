const mongoose = require('mongoose')

const conn = async() => {
    try {
        await mongoose.connect(`${process.env.URI}`)
        console.log("Database connected successfully.")
    } catch (error) {
        console.log("Error in database connection.")
    }
}

conn()