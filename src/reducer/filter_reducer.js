const filterReducer = (state, action) => {
    switch (action.type) {
        case "LOAD_FILTER_PRODUCTS":
            //here i am taking array because i dont want to use orignal array i want to return new array
            return {
                ...state,
                filter_products: [...action.payload],
                all_products: [...action.payload]

            }
        //this reducer for the showing grid view
        case "SET_GRIDVIEW":
            return {
                ...state,
                grid_view: true
            }
        case "SET_LISTVIEW":
            return {
                ...state,
                grid_view: false
            }

        case "SORT_VALUE":
            let sortvalue = document.getElementById('sort')
            let value = sortvalue.options[sortvalue.selectedIndex].value
            console.log('value is', value)
            return {
                ...state,
                sorting_value: value
            }
        case "SORTING_PRODUCTS":
            let newsortData;
            let tempsortProduct = [...action.payload]
            if (state.sorting_value === "A-Z") {
                newsortData = tempsortProduct.sort((a, b) => {
                    return a.name.localeCompare(b.name)
                })
            }
            if (state.sorting_value === "Z-A") {
                newsortData = tempsortProduct.sort((a, b) => {
                    return b.name.localeCompare(a.name)
                })
            }
            if (state.sorting_value === "lowest") {
                const sortingProducts = (a, b) => {
                    return a.price - b.price
                }
                newsortData = tempsortProduct.sort(sortingProducts)
            }
            if (state.sorting_value === "highest") {
                const sortingProducts = (a, b) => {
                    return b.price - a.price
                }
                newsortData = tempsortProduct.sort(sortingProducts)
            }
            return {
                ...state,
                filter_products: newsortData
            }
        default:
            return state
    }

}
export default filterReducer