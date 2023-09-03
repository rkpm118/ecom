import { createContext, useContext, useReducer } from "react";
import reducer from "../reducer/cartreducer";
let cartContext = createContext()
function CartProvider({ children }) {
    let initalState = {
        cart: [],
        total_item:'',
        total_amount:'',
        shipping_fee:5000
    }
    let [state, dispatch] = useReducer(reducer, initalState)
    let addToCart=(id,color,cartCount,product)=>{
        console.log('i am from context',id,color,cartCount,product)
        dispatch ({type:"ADD_TO_CART",payload:{id,color,cartCount,product}})
    }
    return <cartContext.Provider value={{ ...state,addToCart }}>
        {children}
    </cartContext.Provider>

}

let useCart = () => {
    return useContext(cartContext)
}
export { CartProvider, useCart }