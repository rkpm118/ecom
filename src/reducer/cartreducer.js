function cartreducer(state, action) {

    switch (action.type) {

        case "ADD_TO_CART":
            let { product: { price, image, name }, color, id, cartCount } = action.payload
            let productData = {
                name,
                id: Math.trunc(Math.random() * 10000) + id,
                image: image[0].url,
                color,
                quantity: cartCount,
                price
            }
            return {
                ...state,
                cart: [productData, ...state.cart,]
            }
        case "DELETE_CART_ITEM":
            let filterItem = state.cart.filter((data) => {
                return data.id !== action.payload
            })
            return {
                ...state,
                cart: filterItem
            }


        default:
            return state
    }
}
export default cartreducer;