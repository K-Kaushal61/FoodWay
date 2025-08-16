import mongoose from "mongoose";

export const connectDB = async () => {
    await mongoose.connect('mongodb+srv://kartikkaushal3661:179300@cluster0.whgu7za.mongodb.net/food-delivery').then(() => console.log("DB Connected"));
}