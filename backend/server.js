// these all are packages
// express, mongoose, jsonwebtoken, cors, bcrypt, dotenv, body-parser, stripe, multer, validator ,nodemon

//    "test": "echo \"Error: no test specified\" && exit 1",
import express from "express";
import cors from "cors";
import { connectDB } from "./config/db.js";

//app config
const app = express();
const port = 4000;

// middlewares
app.use(express.json());
app.use(cors());

// DB connection
connectDB();

app.get("/", (req, res) => {
    res.send("api working")
})

app.listen(port, () => {
    console.log(`server started on http://localhost:${port}`)
})