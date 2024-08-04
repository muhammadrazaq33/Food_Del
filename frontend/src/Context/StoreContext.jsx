import { createContext, useEffect, useState } from "react";
import axios from "axios";


export const StoreContext = createContext(null);


const StoreContextProvider = (props) => {
  const [cartItem, setCartItem] = useState({})
  const [token, setToken] = useState("");
  const url = "http://localhost:4000";
  const [food_list, setFoodList] = useState([]);

  const addToCart = async (itemId) => {
    if (!cartItem[itemId]) {
     setCartItem(prev => ({...prev, [itemId] : 1}))
    }
    else {
      setCartItem(prev => ({...prev, [itemId] : prev[itemId] + 1}))
    }
    if (token) {
      await axios.post(url+"/api/cart/add",{itemId},{headers:{token}})
    }
  }

  const removeFromCart = (itemId) => {
    setCartItem(prev => ({...prev, [itemId]: prev[itemId] - 1}))
  }

  const getTotalCartAmount = () => {
    let totalAmount = 0;
    for (const item in cartItem) {
      if (item > "0") {
        let itemInfo = food_list.find((product) => product._id === item);
        totalAmount += itemInfo.price * cartItem[item];
      }
    }
    return totalAmount
  }

  const fetchFoodList = async () => {
    const response = await axios.get(url + "/api/food/list");
    setFoodList(response.data.data);
}

  useEffect(() => {
    async function loadData() {
      await fetchFoodList();
    if (localStorage.getItem("token")) {
      setToken(localStorage.getItem("token"));
    }
    }
    loadData();
  },[])
 
  const ContextValue = {
    food_list,
    addToCart,
    removeFromCart,
    cartItem,
    setCartItem,
    getTotalCartAmount,
    url,
    setToken,
    token
    }
    return (
      <StoreContext.Provider value={ContextValue}>
        {props.children}
      </StoreContext.Provider>
    );
}

export default StoreContextProvider; 