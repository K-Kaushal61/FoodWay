// server.js (Updated)

import 'dotenv/config' // 👈 MAKE SURE THIS IS AT THE VERY TOP
import express from 'express';
import cors from 'cors';
import { connectDB } from './config/db.config.js';
import foodRouter from './routes/foodRoute.routes.js';
import userRouter from './routes/userRoute.routes.js';
import cartRouter from './routes/cartRoute.routes.js';
import orderRouter from './routes/orderRoute.routes.js';

// app config
const app = express();

// middleware
app.use(express.json())
app.use(cors())

// DB Connection
connectDB();

// API endpoint
app.use("/api/food", foodRouter)
app.use("/api/user", userRouter)
app.use("/api/cart", cartRouter)
app.use("/api/order", orderRouter);

app.get("/", (req, res) => {
    res.send("API working")
})

app.listen(process.env.PORT || 4000, () => {
    console.log(`Server running on http://localhost:${process.env.PORT || 4000}`);
})