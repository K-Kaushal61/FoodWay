import { log } from "console";
import foodModel from "../models/foodModels.js";
import fs from 'fs';

// add food item

const addFood = async (req, res) => {

    let image_filename = `${req.file.filename}`;

    const food = foodModel({
        name: req.body.name,
        description: req.body.description,
        price: req.body.price,
        image: image_filename,
        category: req.body.category
    })

    try{
        await food.save();
        res.json({success:true, message: "Food Added"})
    } catch(error){
        console.log(error);
        res.json({success:false, message: "error"})
    }
    
}

// all food list
const listFood = async (req, res) => {

    try {
        const foods = await foodModel.find({});
        res.json({success:true, data: foods})
    } catch (error) {
        console.log(error);
        res.json({success: false, message:"error" })
        
    }
}

// remove food item
const removeFood = async (req, res) => {
    try {
        const food = await foodModel.findById(req.body.id);

        // CHECK IF THE ITEM EXISTS!
        if (!food) {
            return res.status(404).json({ success: false, message: "Food item not found" });
        }

        // If it exists, then proceed to delete the image file
        fs.unlink(`uploads/${food.image}`, (err) => {
            if (err) {
                console.log("Error deleting image file:", err);
            }
        });

        // Now, delete the item from the database
        await foodModel.findByIdAndDelete(req.body.id);

        res.json({ success: true, message: "Food Removed" });

    } catch (error) {
        console.log(error);
        res.status(500).json({ success: false, message: "Server Error" });
    }
}

export {addFood, listFood, removeFood}