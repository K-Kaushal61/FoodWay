import { createContext, useEffect, useState } from "react";
import axios from "axios";

export const StoreContext = createContext(null);

const StoreContextProvider = (props) => {

    const [cartItems, setCartItems] = useState({});
    const url = "https://foodway-67o9.onrender.com"
    const [token, setToken] = useState("")
    const [food_list, setFoodList] = useState([])

    const addToCart = async (itemId) => {
        if(!cartItems[itemId]) {
            setCartItems((prev) => ({ ...prev, [itemId]: 1 }));
        } else {
            setCartItems((prev) => ({ ...prev, [itemId]: prev[itemId] + 1 }));
        }
        if(token){
            await axios.post(url+"/api/cart/addcart", {itemId}, {headers: {token}})
        }
    }

    const removeFromCart = async (itemId) => {
        setCartItems((prev) => ({ ...prev, [itemId]: prev[itemId] - 1 }));
        if(token){
            await axios.post(url+"/api/cart/removecart", {itemId}, {headers: {token}})
        }
    }

    const getTotalCartAmount = ()=> {
        let totalAmount=0;
        for(const itemId in cartItems) {
            if(cartItems[itemId] > 0){
                const item = food_list.find(item => item._id === itemId);
                if(item) {
                    totalAmount += item.price * cartItems[itemId];
                }
            }
        }
        return totalAmount;
    }

    const fetchFoodList = async () => {
        const response = await axios.get(url+"/api/food/list");
        setFoodList(response.data.data)
    }

    const loadCartData = async (token) => {
        const response = await axios.get(url+"/api/cart/getcart", { headers: { Authorization: `Bearer ${token}` }});
        setCartItems(response.data.cartData || {});
    }

    const isCartEmpty = () => {
    return !Object.values(cartItems).some(qty => qty > 0);
    };


    useEffect( () => {
        async function loadData() {
            await fetchFoodList();
            if(localStorage.getItem("token")){
                setToken(localStorage.getItem("token"))
                await loadCartData(localStorage.getItem("token"));
            }
        }
        loadData();
    },[])

    const contextValue = {
        food_list,
        cartItems,
        setCartItems,
        addToCart,
        removeFromCart,
        getTotalCartAmount,
        url,
        token,
        setToken,
        isCartEmpty
    }

    return(
        <StoreContext.Provider value={contextValue}>
            {props.children}
        </StoreContext.Provider>
    )
}

export default StoreContextProvider;
