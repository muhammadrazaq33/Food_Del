import userModel from "../models/UserModel.js";


// add to cart
const addToCart = async (req, res) => {
    try {
        const userData = await userModel.findOne({ _id: req.body.userId });
        const cartData = await userData.cartData;
        if (!cartData[req.body.itemId]) {
            cartData[req.body.itemId] = 1;
        } else {
            cartData[req.body.itemId] += 1;
        }
        await userModel.findByIdAndUpdate(req.body.userId, { cartData })
        res.json({success:true, message:"Added to cart."})
    } catch (error) {
        console.log(error);
        res.json({success:false, message:"Error"})

    }
}

// remove from cart
const removeFromCart = async (req, res) => {
    
}

// get cart item
const getCart = async (req, res) => {
    
}

export {addToCart,removeFromCart, getCart}