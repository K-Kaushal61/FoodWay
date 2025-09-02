import express from 'express';
import { addFood, listFood, removeFood } from '../controllers/foodController.controllers.js';
import multer from 'multer';

const foodRouter = express.Router(); // used to create http methods

// image storage engine

const storage = multer.diskStorage({
    destination: "uploads",
    filename: (req, file, cb) => {
        return cb(null ,`${Date.now()}${file.originalname}`) // will give unique name to each saved/uploaded file
    }
})

const upload = multer({storage: storage}) // multer will use the storage middelware

foodRouter.post("/add", upload.single("image"), addFood)
foodRouter.get("/list", listFood)
foodRouter.post("/remove", removeFood)




export default foodRouter;