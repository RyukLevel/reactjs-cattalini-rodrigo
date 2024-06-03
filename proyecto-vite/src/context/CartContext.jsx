import { createContext, useContext, useState } from "react";

const cartContext =  createContext();

export const { Provider } = cartContext;

export const useCartContext = () => {
    return useContext (cartContext);
};

const CartContextProvider = ({ children }) => {
const [totalCant, setTotalCant] = useState(0);
const [cart, setCart] = useState([]);

const addToCart = (item, cant) => {
    setTotalCant (totalCant + cant);
    setCart(...cart, {item, cant})
};

const cartContextValue = {
    totalCant,
    addToCart,
};
    return <Provider value={cartContextValue}> {children} </Provider>
}

export default CartContextProvider;