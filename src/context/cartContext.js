import { createContext, useContext, useReducer } from "react";
import reducer from "../reducer/cartreducer";
let cartContext = createContext()
function CartProvider({ children }) {
    let initalState = {
        cart: []
    }
    let [state, dispatch] = useReducer(reducer, initalState)
    return <cartContext.Provider value={{ ...state }}>
        {children}
    </cartContext.Provider>

}

let useCart = () => {
    return useContext(cartContext)
}
export { CartProvider, useCart }