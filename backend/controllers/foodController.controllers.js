import { foodModel } from "../models/foodModel.models.js";

// add food items
// foodController.controllers.js

const addFood = async (req, res) => {
  // 🔽 THIS IS THE EDIT 🔽
  // First, check if a file was actually uploaded.
  if (!req.file) {
    console.log("Error: req.file is missing. Check Cloudinary credentials.");
    return res.json({ success: false, message: "Image upload failed, please check server logs." });
  }

  // This part of your code is correct
  const imageUrl = req.file.path;

  const food = new foodModel({
    name: req.body.name,
    description: req.body.description,
    price: req.body.price,
    category: req.body.category,
    image: imageUrl,
  });

  try {
    await food.save();
    res.json({ success: true, message: "Food added" });
  } catch (error) {
    console.log("Error saving food to database:", error);
    res.json({ success: false, message: "Error: Food was not saved to DB" });
  }
};

// all food list
const listFood = async (req, res) => {
  try {
    const foods = await foodModel.find({});
    res.json({ success: true, data: foods });
  } catch (error) {
    console.log(error);
    res.json({ success: false, message: "Error, food list not found" });
  }
};

// remove food item
const removeFood = async (req, res) => {
  try {
    await foodModel.findByIdAndDelete(req.body.id);
    res.json({ success: true, message: "Food item deleted" });
  } catch (error) {
    console.log(error);
    res.json({
      success: false,
      message: "error: food item not found, not deleted",
    });
  }
};

export { addFood, listFood, removeFood };