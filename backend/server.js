import 'dotenv/config'
import express from 'express';
import cors from 'cors';
import { connectDB } from './config/db.config.js';
import foodRouter from './routes/foodRoute.routes.js';


// app config
const app = express(); 


// middleware
app.use(express.json())
app.use(cors())

// DB Connection
connectDB();

// API endpoint
app.use("/api/food", foodRouter)
app.use("/images", express.static('uploads'))


app.get("/", (req, res) => {
    res.send("API working")
})

app.listen(process.env.PORT || 4000, () => {
    console.log(`Server running on http://localhost:${process.env.PORT}`);
    
}
)

 