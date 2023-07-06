import { createContext, useContext, useEffect, useReducer } from "react";
import { useProductData } from "./product";
import reducer from '../reducer/filter_reducer'

const FilterContext=createContext();
const intialState={
    filter_products:[],
    all_products:[],
}
export const FilterContextProvider =({children})=>{
    // we are getting this data form the product because we already got this data in product.js context
    let {products}=useProductData();
    console.log(' i am product in filtercontext',products)
    const [state,dispatch]=useReducer(reducer,intialState)
    useEffect(()=>{
                dispatch({type:'LOAD_FILTER_PRODUCTS',payload:products})
    },[products])
    return <FilterContext.Provider value={{...state}}>
        {children}
      </FilterContext.Provider>
}

export const useFilterContext=()=>{
    return useContext(FilterContext)
}

