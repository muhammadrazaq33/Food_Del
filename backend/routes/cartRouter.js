import express from "express";
import { addToCart, removeFromCart, getCart } from "../controllers/cartController";
import authMiddleWare from "../middleware/auth";


const cartRouter = express.Router();

cartRouter.post("/add",authMiddleWare, addToCart);
cartRouter.post("/remove",authMiddleWare, removeFromCart);
cartRouter.post("/get",authMiddleWare, getCart);


export default cartRouter;