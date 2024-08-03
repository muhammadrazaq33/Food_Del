// these all are packages
// express, mongoose, jsonwebtoken, cors, bcrypt, dotenv, body-parser, stripe, multer, validator ,nodemon

//    "test": "echo \"Error: no test specified\" && exit 1",
import express from "express";
import cors from "cors";
import { connectDB } from "./config/db.js";
import foodRouter from "./routes/foodRouter.js";
import userRouter from "./routes/userRoute.js";
import "dotenv/config.js"
import cartRouter from "./routes/cartRouter.js";

//app config
const app = express();
const port = 4000;

// middlewares
app.use(express.json());
app.use(cors());

// DB connection
connectDB();

// api endpoints
app.use("/api/food", foodRouter);
// if we want to images that are in database so we will create api "/images/filename"
app.use("/images", express.static("uploads"));
app.use("/api/user", userRouter);
app.use("/api/cart", cartRouter);


app.get("/", (req, res) => {
    res.send("api working")
})

app.listen(port, () => {
    console.log(`server started on http://localhost:${port}`)
})


// const mongoose = require("mongoose");

// const UserSchema = new mongoose.Schema({
//     name: String,
//     email: String,
//     password:String
// });

// module.exports = mongoose.model("users", UserSchema); 