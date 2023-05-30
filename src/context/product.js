import  { createContext, useContext } from "react";
let productProvider=createContext()

let ProductContext=({children})=>{
    return <productProvider.Provider value="utsav">{children}</productProvider.Provider>
}

//custom hook for useContex
let useProductData=()=>{
   return useContext(productProvider)
}
export { ProductContext ,useProductData}