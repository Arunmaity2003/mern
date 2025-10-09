import express from "express";
import dotenv from "dotenv";
import connectDB from "./db/db.js";

dotenv.config();

const app = express();

connectDB();

app.get("/", (req, res) => {
  res.send("Backend is running 🚀");
});

const PORT = process.env.PORT || 3000;
app.listen(PORT, () => console.log(`Server running on port ${PORT}`));
