import express from 'express';
import { addFood, listFood, removeFood } from '../controllers/foodController.js';
import multer from 'multer';

const foodRouter = express.Router(); // get, post, etc methods can be used

// image storage engine

const storage = multer.diskStorage({
    destination: "uploads", // folder where to store the images
    filename: (req, file, cb) => {
        return cb(null, `${Date.now()}${file.originalname}`) // create a unique name for the file/image
    }
})

const upload = multer({storage: storage})

foodRouter.post("/add", upload.single("image"), addFood)
foodRouter.get("/list", listFood)
foodRouter.post("/remove", removeFood)


export default foodRouter;

