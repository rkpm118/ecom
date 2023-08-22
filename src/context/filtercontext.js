import { createContext, useContext, useEffect, useReducer } from "react";
import { useProductData } from "./product";
import reducer from '../reducer/filter_reducer'

const FilterContext = createContext();
const intialState = {
    filter_products: [],
    all_products: [],
    grid_view: true,
    sorting_value: "lowest"
}
export const FilterContextProvider = ({ children }) => {
    // we are getting this data form the product because we already got this data in product.js context
    let { products } = useProductData();
    const [state, dispatch] = useReducer(reducer, intialState)
    //this is the for showing the grid view
    const setGridView = () => {
        return dispatch({ type: 'SET_GRIDVIEW' })
    }
    const setListView = () => {
        return dispatch({ type: "SET_LISTVIEW" })
    }
    //sorting function 
    function sorting() {
        return dispatch({ type: "SORT_VALUE" })
    }
    //to sort the filter project
    useEffect(() => {
        dispatch({ type: "SORTING_PRODUCTS", payload: products })
    }, [state.sorting_value])
    useEffect(() => {
        dispatch({ type: 'LOAD_FILTER_PRODUCTS', payload: products })
    }, [products])
    return <FilterContext.Provider value={{ ...state, setGridView, setListView, sorting }}>
        {children}
    </FilterContext.Provider>
}

export const useFilterContext = () => {
    return useContext(FilterContext)
}

