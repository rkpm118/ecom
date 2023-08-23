const filterReducer = (state, action) => {
  //let { products } = useProductData();
  switch (action.type) {
    case "LOAD_FILTER_PRODUCTS":
      //here i am taking array because i dont want to use orignal array i want to return new array
      return {
        ...state,
        filter_products: [...action.payload],
        all_products: [...action.payload],
      };
    //this reducer for the showing grid view
    case "SET_GRIDVIEW":
      return {
        ...state,
        grid_view: true,
      };
    case "SET_LISTVIEW":
      return {
        ...state,
        grid_view: false,
      };

    case "SORT_VALUE":
      console.log(action.payload);
      return {
        ...state,
        sorting_value: action.payload,
      };
    case "SORTING_PRODUCTS":
      let newsortData;
      let tempsortProduct = [...state.filter_products];
      let sortingProducts = (a, b) => {
        if (state.sorting_value === "A-Z") {
          return a.name.localeCompare(b.name);
        }
        if (state.sorting_value === "Z-A") {
          return b.name.localeCompare(a.name);
        }
        if (state.sorting_value === "lowest") {
          return a.price - b.price;
        }
        if (state.sorting_value === "highest") {
          return b.price - a.price;
        }
      };
      newsortData = tempsortProduct.sort(sortingProducts);
      return {
        ...state,
        filter_products: newsortData,
      };
    default:
      return state;
  }
};
export default filterReducer;
