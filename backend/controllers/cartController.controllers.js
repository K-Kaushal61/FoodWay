import {User} from '../models/userModel.models.js';


// add to cart
const addToCart = async (req, res) => { 
    
    try {

        let userData = await User.findById(req.userId);
        let cartData = await userData.cartData;
        if(!cartData[req.body.itemId]){
            cartData[req.body.itemId] = 1;
        } else {
            cartData[req.body.itemId] += 1; 
        }
        await User.findByIdAndUpdate(req.userId, {cartData});
        res.json({success: true, message: "Item added to cart, successfully."})
        
    } catch (error) {
        console.log(error);
        res.json({success: false, message: "Item not added to cart."});
    }
}

// remove from cart
const removeFromCart = async (req, res) => { 

    try {
        let userData = await User.findById(req.userId);
        let cartData = await userData.cartData;
        
        if (req.body.itemId && cartData[req.body.itemId] > 0) {
            cartData[req.body.itemId] -= 1;
        } else {
            return res.json({success: false, message: "Item not found"})
        }
        await User.findByIdAndUpdate(req.userId, {cartData});
        res.json({success: true, message: "Item removed from cart."})
    } catch (error) {
        console.log(error);
        res.json({success: false, message: "Item not removed from cart."})
    }

}

// fetch from cart
const getCart = async (req, res) => { 
    try { 
        let userData = await User.findById(req.userId);
        if (!userData) {
            return res.json({ success: false, message: "User not found." });
        }
        // ✅ FIX: If userData.cartData is undefined, use an empty object {} as a fallback.
        let cartData = userData.cartData || {}; 
        res.json({success: true, cartData})
    } catch (error) {
        console.log(error);
        res.json({success: false, message: "Error fetching cart data."})
    }
}

export {addToCart, removeFromCart, getCart};