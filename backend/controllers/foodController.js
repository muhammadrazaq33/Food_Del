// import express from "express";
import foodModel from "../models/FoodModel.js"
import fs from "fs"


const addFood = async (req, res) => {

    let image_filename = `${req.file.filename}`;

    const food = ({
        name: req.body.name,
        description: req.body.description,
        price: req.body.price,
        image: image_filename,
        category: req.body.category
    })

    try {
        await food.save();
        res.json({success:true, message: "Food Added"})
    } catch (error) {
        console.log(error)
                res.json({success:false, message: "Error"})
    }
}

export { addFood };