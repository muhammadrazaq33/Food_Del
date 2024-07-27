// these all are packages
// express, mongoose, jsonwebtoken, cors, bcrypt, dotenv, body-parser, stripe, multer, validator ,nodemon

//    "test": "echo \"Error: no test specified\" && exit 1",
import express from "express";
import cors from "cors";

//app config
const app = express();
const port = 4000;

// middlewares
app.use(express.json());
app.use(cors());

app.get("/", (req, res) => {
    res.send("api working")
})

app.listen(port, () => {
    console.log(`server started on http://localhost:${port}`)
})