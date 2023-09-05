import { createContext, useContext, useReducer } from "react";
import reducer from "../reducer/cartreducer";
let cartContext = createContext()
function CartProvider({ children }) {
    let initalState = {
        cart: [],
        total_item: '',
        total_amount: '',
        shipping_fee: 5000
    }
    let [state, dispatch] = useReducer(reducer, initalState)
    let addToCart = (id, color, cartCount, product) => {
        console.log('i am from context', id, color, cartCount, product)
        dispatch({ type: "ADD_TO_CART", payload: { id, color, cartCount, product } })
    }

    function delteCartHandler(id) {
        return dispatch({ type: "DELETE_CART_ITEM", payload: id })
    }
    return <cartContext.Provider value={{ ...state, addToCart, delteCartHandler }}>
        {children}
    </cartContext.Provider>

}

let useCart = () => {
    return useContext(cartContext)
}
export { CartProvider, useCart }