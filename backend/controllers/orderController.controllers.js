import { Order } from "../models/orderModel.models.js";
import { User } from "../models/userModel.models.js";
import Stripe from "stripe";

const stripe = new Stripe(process.env.STRIPE_SECRET_KEY)


// placing user order from frontend
const placeOrder = async (req, res) => {

    const frontend_url = "http://localhost:5173"

    try {
        const newOrder = new Order({
            userId: req.body.userId,
            items: req.body.items,
            amount: req.body.amount,
            address: req.body.address,
        })

        await newOrder.save();
        await User.findByIdAndUpdate(req.body.userId, {cartData: {}});

        const line_items = req.body.items.map( (item) => ({
            price_data:{
                currency: "usd",
                product_data:{
                    name: item.name,
                },
                unit_amount:item.price*100
            },
            quantity: item.quantity
        }))
        
        line_items.push({
            price_data:{
                currency: "usd",
                product_data:{
                    name: "Delivery Charges",
                },
                unit_amount:2*100
            },
            quantity: 1
        })

        const session = await stripe.checkout.sessions.create({
            line_items: line_items,
            mode: 'payment',
            success_url: `${frontend_url}/verify?success=true&orderId=${newOrder._id}`,
            cancel_url: `${frontend_url}/verify?success=false&orderId=${newOrder._id}`,
        })

        res.json({success: true, success_url: session.url})
    } catch (error) {
        console.log(error);
        res.json({success: false, message: "Payment error"})
    }

}

const verifyOrder = () => {
    // sort payment then complete
}

// user orders for frontend

const userOrders = async (req, res) => {
  try {
    const orders = await Order.find({ userId: req.userId });
    res.json({ success: true, data: orders });
  } catch (error) {
    console.log(error);
    res.json({ success: false, message: "error in user orders" });
  }
};


export { placeOrder, verifyOrder, userOrders };