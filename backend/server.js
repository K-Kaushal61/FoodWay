import express from 'express'
import cors from 'cors'
import { connect } from 'mongoose'
import { connectDB } from './config/db.js'


//app configuration
const app = express()
const port = 4000

//middleware
app.use(express.json()) //frontend->backends request parse thru it
app.use(cors()) //access backend from any frontend

//DB connection
connectDB();

app.get("/", (req, res) => {
    res.send("API Working")
})

app.listen(port, () => {
    console.log(`Server started at http://localhost:${port}`)
})
