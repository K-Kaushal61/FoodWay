import express, { Router } from "express";
import { addToCart, removeFromCart, getCart } from "../controllers/cartController.controllers.js";
import authMiddleware from "../middleware/auth.middleware.js";

const cartRouter = express.Router();

cartRouter.post("/addcart", authMiddleware, addToCart)
cartRouter.post("/removecart", authMiddleware, removeFromCart)
cartRouter.get("/getcart", authMiddleware, getCart)

export default cartRouter;