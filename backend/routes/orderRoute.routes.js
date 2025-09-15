import express from "express";
import authMiddleware from "../middleware/auth.middleware.js";
import { placeOrder, userOrders } from "../controllers/orderController.controllers.js";

const orderRouter = express.Router();

orderRouter.post("/place", authMiddleware, placeOrder);
orderRouter.post("/userorders", authMiddleware, userOrders);

export default orderRouter